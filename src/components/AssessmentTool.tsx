import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { AssessmentService } from '../lib/assessment';
import { AnalysisEngine } from '../lib/analysisEngine';
import { Assessment, QuestionTemplate, Response } from '../types/assessment';
import toast from 'react-hot-toast';

export const AssessmentTool: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [questions, setQuestions] = useState<QuestionTemplate[]>([]);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [businessInfo, setBusinessInfo] = useState({
    business_name: '',
    contact_name: '',
    contact_email: '',
    phone: '',
    business_website: '',
    business_location: '',
    business_type: '',
    employee_count: '',
    annual_revenue: '',
    products_services: ''
  });

  const sections = AssessmentService.getSections();

  useEffect(() => {
    if (assessment && sections[currentStep]) {
      loadQuestions(sections[currentStep].key, assessment.business_type);
    }
  }, [currentStep, assessment]);

  const loadQuestions = async (section: string, businessType: string) => {
    try {
      setLoading(true);
      const sectionQuestions = await AssessmentService.getQuestions(section, businessType);
      setQuestions(sectionQuestions);
    } catch (error) {
      console.error('Error loading questions:', error);
      toast.error('Failed to load questions');
    } finally {
      setLoading(false);
    }
  };

  const handleBusinessInfoSubmit = async () => {
    if (!businessInfo.business_name || !businessInfo.contact_name || !businessInfo.contact_email || !businessInfo.business_type) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      const newAssessment = await AssessmentService.createAssessment(businessInfo);
      setAssessment(newAssessment);
      setCurrentStep(1);
      toast.success('Assessment started successfully!');
    } catch (error) {
      console.error('Error creating assessment:', error);
      toast.error('Failed to start assessment');
    } finally {
      setLoading(false);
    }
  };

  const handleResponseChange = async (questionKey: string, value: string) => {
    setResponses(prev => ({ ...prev, [questionKey]: value }));
    
    if (assessment) {
      try {
        await AssessmentService.saveResponse(assessment.id, questionKey, value);
      } catch (error) {
        console.error('Error saving response:', error);
      }
    }
  };

  const handleNextSection = async () => {
    if (!assessment) return;

    // Validate required questions
    const requiredQuestions = questions.filter(q => q.is_required);
    const missingResponses = requiredQuestions.filter(q => !responses[q.question_key]);
    
    if (missingResponses.length > 0) {
      toast.error('Please answer all required questions before proceeding');
      return;
    }

    if (currentStep < sections.length - 1) {
      setCurrentStep(currentStep + 1);
      // Update progress
      const progress = ((currentStep + 1) / sections.length) * 100;
      await AssessmentService.updateAssessment(assessment.id, {
        current_section: sections[currentStep + 1].key,
        progress_percentage: progress
      });
    } else {
      // Complete assessment and run analysis
      await completeAssessment();
    }
  };

  const handlePreviousSection = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeAssessment = async () => {
    if (!assessment) return;

    try {
      setLoading(true);
      
      // Complete the assessment
      await AssessmentService.completeAssessment(assessment.id);
      
      // Get all responses
      const allResponses = await AssessmentService.getResponses(assessment.id);
      
      // Run analysis
      const analysisEngine = new AnalysisEngine();
      const analysisResult = await analysisEngine.analyzeAssessment(assessment, allResponses);
      
      // Save analysis results to database (you'll need to implement this)
      // For now, we'll show a success message
      toast.success('Assessment completed! Analysis results are ready.');
      
      // You can redirect to results page or show results inline
      console.log('Analysis Results:', analysisResult);
      
    } catch (error) {
      console.error('Error completing assessment:', error);
      toast.error('Failed to complete assessment');
    } finally {
      setLoading(false);
    }
  };

  const renderBusinessInfoForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Business Information</h2>
      <p className="text-white/90 mb-8">
        Let's start with some basic information about your business to tailor the assessment to your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-medium mb-2">Business Name *</label>
          <input
            type="text"
            value={businessInfo.business_name}
            onChange={(e) => setBusinessInfo(prev => ({ ...prev, business_name: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-[#19FF7F] focus:outline-none"
            placeholder="Enter your business name"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Contact Name *</label>
          <input
            type="text"
            value={businessInfo.contact_name}
            onChange={(e) => setBusinessInfo(prev => ({ ...prev, contact_name: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-[#19FF7F] focus:outline-none"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Email Address *</label>
          <input
            type="email"
            value={businessInfo.contact_email}
            onChange={(e) => setBusinessInfo(prev => ({ ...prev, contact_email: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-[#19FF7F] focus:outline-none"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            value={businessInfo.phone}
            onChange={(e) => setBusinessInfo(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-[#19FF7F] focus:outline-none"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Business Type *</label>
          <select
            value={businessInfo.business_type}
            onChange={(e) => setBusinessInfo(prev => ({ ...prev, business_type: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#19FF7F] focus:outline-none"
          >
            <option value="">Select business type</option>
            <option value="retail">Retail</option>
            <option value="restaurant">Restaurant</option>
            <option value="service">Service</option>
            <option value="non-profit">Non-profit</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Number of Employees *</label>
          <select
            value={businessInfo.employee_count}
            onChange={(e) => setBusinessInfo(prev => ({ ...prev, employee_count: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#19FF7F] focus:outline-none"
          >
            <option value="">Select employee count</option>
            <option value="1-5">1-5 employees</option>
            <option value="6-20">6-20 employees</option>
            <option value="21-50">21-50 employees</option>
            <option value="51-100">51-100 employees</option>
            <option value="100+">100+ employees</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-white font-medium mb-2">Annual Revenue *</label>
          <select
            value={businessInfo.annual_revenue}
            onChange={(e) => setBusinessInfo(prev => ({ ...prev, annual_revenue: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#19FF7F] focus:outline-none"
          >
            <option value="">Select revenue range</option>
            <option value="Under $100K">Under $100K</option>
            <option value="$100K - $500K">$100K - $500K</option>
            <option value="$500K - $1M">$500K - $1M</option>
            <option value="$1M - $5M">$1M - $5M</option>
            <option value="$5M - $10M">$5M - $10M</option>
            <option value="Over $10M">Over $10M</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-white font-medium mb-2">Main Products or Services *</label>
          <textarea
            value={businessInfo.products_services}
            onChange={(e) => setBusinessInfo(prev => ({ ...prev, products_services: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-[#19FF7F] focus:outline-none"
            placeholder="Describe your main products or services..."
            rows={3}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleBusinessInfoSubmit}
          disabled={loading}
          className="px-8 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Starting Assessment...
            </>
          ) : (
            'Start Assessment'
          )}
        </button>
      </div>
    </motion.div>
  );

  const renderQuestion = (question: QuestionTemplate) => {
    const value = responses[question.question_key] || '';

    switch (question.question_type) {
      case 'text':
      case 'textarea':
        return (
          <div key={question.id} className="mb-6">
            <label className="block text-white font-medium mb-3">
              {question.question_text}
              {question.is_required && <span className="text-red-400 ml-1">*</span>}
            </label>
            {question.question_type === 'textarea' ? (
              <textarea
                value={value}
                onChange={(e) => handleResponseChange(question.question_key, e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-[#19FF7F] focus:outline-none"
                placeholder="Enter your response..."
                rows={4}
              />
            ) : (
              <input
                type="text"
                value={value}
                onChange={(e) => handleResponseChange(question.question_key, e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-[#19FF7F] focus:outline-none"
                placeholder="Enter your response..."
              />
            )}
          </div>
        );

      case 'multiple_choice':
        return (
          <div key={question.id} className="mb-6">
            <label className="block text-white font-medium mb-3">
              {question.question_text}
              {question.is_required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <select
              value={value}
              onChange={(e) => handleResponseChange(question.question_key, e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#19FF7F] focus:outline-none"
            >
              <option value="">Select an option</option>
              {question.options?.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        );

      case 'scale':
        return (
          <div key={question.id} className="mb-6">
            <label className="block text-white font-medium mb-3">
              {question.question_text}
              {question.is_required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <div className="grid grid-cols-1 gap-3">
              {question.options?.map((option, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={question.question_key}
                    value={option}
                    checked={value === option}
                    onChange={(e) => handleResponseChange(question.question_key, e.target.value)}
                    className="mr-3 text-[#19FF7F] focus:ring-[#19FF7F]"
                  />
                  <span className="text-white">{option}</span>
                </label>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderAssessmentSection = () => {
    if (!assessment || currentStep === 0) return null;

    const section = sections[currentStep - 1];
    const progress = ((currentStep - 1) / (sections.length - 1)) * 100;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
      >
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-white/70 mb-2">
            <span>Section {currentStep} of {sections.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full">
            <div 
              className="h-full bg-[#19FF7F] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {sections.map((sec, index) => (
            <button
              key={sec.key}
              onClick={() => setCurrentStep(index + 1)}
              className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                currentStep === index + 1
                  ? 'bg-[#19FF7F] text-black'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {sec.display_name}
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">{section.display_name}</h2>
          <p className="text-white/90 mb-6">{section.description}</p>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-[#19FF7F] animate-spin" />
            </div>
          ) : (
            <div className="space-y-6">
              {questions.map(renderQuestion)}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePreviousSection}
            disabled={currentStep <= 1}
            className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <button
            onClick={handleNextSection}
            disabled={loading}
            className="px-6 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : currentStep === sections.length ? (
              <>
                Complete Assessment
                <CheckCircle className="w-5 h-5" />
              </>
            ) : (
              <>
                Next
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Business Assessment
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover how AI can transform your business with our comprehensive assessment. 
            Get personalized recommendations and a detailed implementation roadmap.
          </p>
        </div>

        {currentStep === 0 ? renderBusinessInfoForm() : renderAssessmentSection()}
      </div>
    </div>
  );
};