import React from 'react';
import { X, CreditCard, Calendar, DollarSign, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  title: string;
  price: string;
}

interface PaymentPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

interface PaymentPlan {
  downPayment: number;
  monthlyPayment: number;
  installments: number;
  totalPrice: number;
}

export const PaymentPlanModal: React.FC<PaymentPlanModalProps> = ({ isOpen, onClose, service }) => {
  const parsePrice = (priceString: string): number => {
    // Remove $ and any text after numbers, handle formats like "$1,200/day" and "$5,000+"
    const cleanPrice = priceString.replace(/[$,]/g, '').replace(/[^\d.]/g, '');
    return parseFloat(cleanPrice) || 0;
  };

  const calculatePaymentPlan = (priceString: string): PaymentPlan => {
    const totalPrice = parsePrice(priceString);
    const downPayment = Math.round(totalPrice * 0.3);
    const remainingAmount = totalPrice - downPayment;
    
    let installments: number;
    
    // Determine installments based on price ranges
    if (totalPrice >= 1200 && totalPrice <= 2499) {
      installments = 3;
    } else if (totalPrice >= 2500 && totalPrice <= 4999) {
      installments = 4;
    } else if (totalPrice >= 5000) {
      installments = 6;
    } else {
      installments = 2; // fallback
    }
    
    const monthlyPayment = Math.round(remainingAmount / installments);
    
    return {
      downPayment,
      monthlyPayment,
      installments,
      totalPrice
    };
  };

  const samplePlans = [
    {
      service: "Mississippi AI Starter Kit – $2,500",
      downPayment: "$750",
      payments: "3 monthly payments of $583.33",
      milestone: "Chatbot ready by Month 2, all tools delivered by Month 3"
    },
    {
      service: "AI Strategy Workshop – $2,000",
      downPayment: "$600",
      payments: "2 monthly payments of $700",
      milestone: "Workshop scheduled after Month 1; roadmap finalized in Month 2"
    },
    {
      service: "Private AI Training – $1,200/day",
      downPayment: "$360",
      payments: "2 monthly payments of $420",
      milestone: "Scheduled upon 1st payment; conducted by Month 2"
    },
    {
      service: "AI-Powered Dashboards – $5,000",
      downPayment: "$1,500",
      payments: "4 monthly payments of $875",
      milestone: "Prototype in Month 2, final delivery in Month 4"
    },
    {
      service: "Custom AI Assistant – $7,500",
      downPayment: "$2,250",
      payments: "5 monthly payments of $1,050",
      milestone: "Scoping in Month 1, prototype in Month 3, launch in Month 5"
    }
  ];

  if (!service) return null;

  const paymentPlan = calculatePaymentPlan(service.price);
  const isEligible = paymentPlan.totalPrice >= 1200;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-gradient-to-br from-[#4B007F]/95 to-[#A23ACD]/95 backdrop-blur-lg rounded-xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            style={{ marginTop: '80px' }}
          >
            <div className="sticky top-0 bg-gradient-to-r from-[#4B007F]/90 to-[#A23ACD]/90 backdrop-blur-sm p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Payment Plan Options</h2>
                  <p className="text-white/80">{service.title}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {isEligible ? (
                <>
                  {/* Service-Specific Payment Plan */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-[#19FF7F] mb-4 flex items-center gap-2">
                      <CreditCard className="w-6 h-6" />
                      Your Payment Plan for {service.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="bg-[#19FF7F]/10 rounded-lg p-4 mb-2">
                          <DollarSign className="w-8 h-8 text-[#19FF7F] mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">${paymentPlan.downPayment.toLocaleString()}</div>
                          <div className="text-white/70 text-sm">Down Payment (30%)</div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-[#FDC526]/10 rounded-lg p-4 mb-2">
                          <Calendar className="w-8 h-8 text-[#FDC526] mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">{paymentPlan.installments}</div>
                          <div className="text-white/70 text-sm">Monthly Payments</div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-white/10 rounded-lg p-4 mb-2">
                          <CheckCircle className="w-8 h-8 text-white mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">${paymentPlan.monthlyPayment.toLocaleString()}</div>
                          <div className="text-white/70 text-sm">Per Month</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-[#19FF7F]/10 rounded-lg">
                      <p className="text-white/90 text-center">
                        <strong>0% Interest</strong> • Work begins after down payment • Final delivery after final payment
                      </p>
                    </div>
                  </div>

                  {/* Overview */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">💳 Overview</h3>
                    <p className="text-white/90 mb-4">
                      To make high-value AI services more accessible to small and midsize businesses, State AI Strategies offers 
                      <strong className="text-[#19FF7F]"> interest-free payment plans</strong> for eligible services. These plans help clients get started sooner while supporting your cash flow and phased delivery.
                    </p>
                  </div>

                  {/* Eligibility */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">✅ Eligibility</h3>
                    <div className="mt-4 space-y-2">
                      <p className="text-white/90"><strong>Client Requirements:</strong></p>
                      <ul className="list-disc list-inside text-white/80 space-y-1">
                        <li>Signed service agreement</li>
                        <li>Valid payment method (ACH, debit/credit, bank transfer)</li>
                        <li>For projects over $5,000: optional financial documentation or soft credit check</li>
                      </ul>
                    </div>
                  </div>

                  {/* Terms & Structure */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">🧾 Terms & Structure</h3>
                    <ul className="space-y-2 text-white/90">
                      <li><strong>Down Payment:</strong> 30% of total project cost due at contract signing</li>
                      <li><strong>Installments:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-white/80">
                          <li>$1,200–$2,499 → 2–3 monthly payments</li>
                          <li>$2,500–$4,999 → 3–4 monthly payments</li>
                          <li>$5,000+ → 4–6 monthly payments (flexible)</li>
                        </ul>
                      </li>
                      <li><strong>Interest:</strong> 0% for standard terms (up to 6 months)</li>
                      <li><strong>Late Fee:</strong> 1.5% monthly on overdue balances</li>
                      <li><strong>Start Date:</strong> Payments begin 30 days after down payment</li>
                      <li><strong>Delivery Milestones:</strong> Work begins after down payment. Major deliverables are tied to installment milestones. Final delivery after final payment.</li>
                    </ul>
                  </div>

                  {/* Sample Payment Plans */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">📅 Sample Payment Plans</h3>
                    <div className="space-y-4">
                      {samplePlans.map((plan, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-[#19FF7F] font-semibold mb-2">{plan.service}</h4>
                          <div className="text-white/90 space-y-1">
                            <p>Down Payment: {plan.downPayment}</p>
                            <p>{plan.payments}</p>
                            <p className="text-sm text-white/70">Milestone: {plan.milestone}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-gradient-to-r from-[#19FF7F]/20 to-[#FDC526]/20 rounded-xl p-6 border border-[#19FF7F]/30 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
                    <p className="text-white/90 mb-6">
                      Contact us to discuss your payment plan and begin your AI transformation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="tel:+16622701199"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
                      >
                        <span>Call (662) 270-1199</span>
                      </a>
                      <a
                        href="mailto:larataylor@stateaistrategies.com"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-colors duration-200"
                      >
                        <span>Email Us</span>
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                    <h3 className="text-xl font-bold text-red-400 mb-4">Payment Plan Not Available</h3>
                    <p className="text-white/90">
                      Payment plans are only available for services priced at $1,200 or higher. 
                      This service ({service.title} - {service.price}) does not qualify for payment plans.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};