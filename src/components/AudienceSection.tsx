import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';

export const AudienceSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What's your current experience with AI tools?",
      options: [
        "I've never used AI tools",
        "I've tried ChatGPT a few times",
        "I use AI tools occasionally",
        "I use AI tools regularly"
      ]
    },
    {
      question: "What's your biggest business challenge right now?",
      options: [
        "Not enough time for everything",
        "Managing customer communications",
        "Creating content consistently",
        "Analyzing data and feedback"
      ]
    },
    {
      question: "How comfortable are you with learning new technology?",
      options: [
        "I prefer to stick with what I know",
        "I'll learn if someone guides me",
        "I enjoy learning new tools",
        "I'm always eager to try new tech"
      ]
    },
    {
      question: "What's your timeline for implementing AI solutions?",
      options: [
        "Just exploring options",
        "Within the next 6 months",
        "Within the next 3 months",
        "Ready to start now"
      ]
    },
    {
      question: "What's your main goal with AI implementation?",
      options: [
        "Save time on routine tasks",
        "Improve customer service",
        "Boost productivity",
        "Transform business operations"
      ]
    }
  ];

  const getReadinessLevel = () => {
    const answerValues = Object.values(answers);
    const readinessScore = answerValues.reduce((acc, curr) => {
      return acc + parseInt(curr);
    }, 0) / answerValues.length;

    if (readinessScore <= 1) return {
      level: "Explorer",
      description: "You're taking the first steps into AI. Let's start with simple, high-impact tools to build your confidence.",
      recommendation: "Start with our AI Readiness Assessment ($225) to identify your best opportunities."
    };
    if (readinessScore <= 2) return {
      level: "Prepared",
      description: "You have a good foundation and are ready to implement AI strategically.",
      recommendation: "Consider our Mississippi AI Starter Kit ($899) to begin your AI journey."
    };
    if (readinessScore <= 3) return {
      level: "Advanced",
      description: "You're ready to leverage AI for significant business transformation.",
      recommendation: "Book an AI Strategy Workshop ($1,200) to maximize your AI potential."
    };
    return {
      level: "Leader",
      description: "You're positioned to be an AI innovation leader in your industry.",
      recommendation: "Explore our Custom AI Assistants ($3,000+) to create transformative solutions."
    };
  };

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    setAnswers({ ...answers, [questionIndex]: optionIndex.toString() });
    if (questionIndex < questions.length - 1) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const startQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  return (
    <section className="py-6 px-4 mt-6" id="audiences">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Custom AI Tools That Think Like You
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Skip the hype and gimmicks. You need AI tools that boost productivity, sharpen decisions, and grow your bottom line. I deliver solutions that are ethical, practical, and built for YOU.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* SMBs Card */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm h-80">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-35"
              style={{ backgroundImage: 'url(/images/SmallBusinesses.jpeg)' }}
              role="img"
              aria-label="Small business owners working together in a modern office environment"
            />
            <div className="relative z-10 p-6 h-full flex flex-col justify-between cursor-pointer" onClick={() => window.location.href = '/small-business'}>
              <h3 className="text-2xl text-[#FDC526] font-bold mb-4 uppercase tracking-wide">SMBs</h3>
              <p className="text-white/90 text-sm leading-relaxed">Save 10 hours/week with AI-driven content calendars and instant customer insights. <span className="text-[#19FF7F] font-semibold">73% of AI users report higher productivity.</span></p>
            </div>
          </div>

          {/* Government Agencies Card */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm h-80">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-35"
              style={{ backgroundImage: 'url(/images/Govtagency.jpg)' }}
              role="img"
              aria-label="Mississippi State Capitol building representing government agencies"
            />
            <div className="relative z-10 p-6 h-full flex flex-col justify-between cursor-pointer" onClick={() => window.location.href = '/government'}>
              <h3 className="text-2xl text-[#FDC526] font-bold mb-4 uppercase tracking-wide">GOVERNMENT AGENCIES</h3>
              <p className="text-white/90 text-sm leading-relaxed">Streamline citizen services and reduce processing time by <span className="text-[#19FF7F] font-semibold">50%</span> with AI automation.</p>
            </div>
          </div>

          {/* Startups & Solopreneurs Card */}
          <a href="/startups-solopreneurs" className="relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm h-80 block hover:border-[#19FF7F]/50 transition-all duration-300">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-35"
              style={{ backgroundImage: 'url(/images/Creatives-Solopreneurs.jpg)' }}
              role="img"
              aria-label="Startup founders and solopreneurs working on innovative projects"
            />
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <h3 className="text-2xl text-[#FDC526] font-bold mb-4 uppercase tracking-wide">STARTUPS & SOLOPRENEURS</h3>
              <p className="text-white/90 text-sm leading-relaxed">Boost productivity by <span className="text-[#19FF7F] font-semibold">60%</span> with custom chatbots and project management tools.</p>
            </div>
          </a>

          {/* Nonprofits Card */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm h-80">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-35"
              style={{ backgroundImage: 'url(/images/Nonprofits.jpeg)' }}
              role="img"
              aria-label="Nonprofit organization team members collaborating on community impact projects"
            />
            <div className="relative z-10 p-6 h-full flex flex-col justify-between cursor-pointer" onClick={() => window.location.href = '/nonprofits'}>
              <h3 className="text-2xl text-[#FDC526] font-bold mb-4 uppercase tracking-wide">NONPROFITS</h3>
              <p className="text-white/90 text-sm leading-relaxed">Automate grant writing and donor outreach, increasing impact by <span className="text-[#19FF7F] font-semibold">66%</span>.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#4B007F]/30 to-[#A23ACD]/30 rounded-xl p-8 border border-white/10 backdrop-blur-sm mb-6"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Take Our 2-Minute AI Quick Quiz
            </h2>
            <p className="text-lg text-white/90">
              See how AI can transform your work. In just 2 minutes, spot your top opportunities and get a snapshot of where AI can save you time, money, and stress.
            </p>
          </div>

          {currentQuestion === null && !showResults && (
            <div className="text-center">
              <button
                onClick={startQuiz}
                className="px-8 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
              >
                Start Your Free Quiz
              </button>
            </div>
          )}

          {currentQuestion !== null && !showResults && (
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="flex justify-between text-sm text-white/60 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full">
                  <div 
                    className="h-full bg-[#19FF7F] rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className="text-xl text-white font-medium mb-6">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion, index)}
                    className="w-full p-4 bg-white/5 hover:bg-white/10 text-left text-white rounded-lg transition-colors duration-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showResults && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/5 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-[#19FF7F] mb-2">
                  Your AI Readiness Level: {getReadinessLevel().level}
                </h3>
                <p className="text-white/90 mb-4">
                  {getReadinessLevel().description}
                </p>
                <p className="text-white font-medium">
                  Recommendation: {getReadinessLevel().recommendation}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:larataylor@stateaistrategies.com"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
                <a
                  href="tel:+16627220335"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Call or Text (662) 722-0335
                </a>
              </div>

              <p className="text-center text-white/60 mt-6">
                I'll personally respond within 24 hours to discuss your goals and recommend the best next steps.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};