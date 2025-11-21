import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  impact: string;
}

export const TimelineSection: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const timelineEvents: TimelineEvent[] = [
    {
      year: "1988",
      title: "Director & Graphics Operator at WLOX-TV",
      description: "Directed daily newscast and crafted graphics. Sparked global freelancing career for HBO, ESPN, and more until 2007.",
      impact: "Delivered 500+ annual broadcasts"
    },
    {
      year: "1998",
      title: "Graphics Operator at WSB-TV",
      description: "Managed graphic operators' schedules, created graphics for daily newscasts, and liaised with creative services and news department.",
      impact: "Witnessed WSB-TV's first digital signal broadcast"
    },
    {
      year: "2011",
      title: "Social Media Management",
      description: "Ran Local Sociable, crafting campaigns for diverse clients like restaurants, forklift manufacturers, and gas stations.",
      impact: "Boosted client engagement by 150%+"
    },
    {
      year: "2018",
      title: "Library Assistant at Choctaw County",
      description: "Hosted weekly STEM and community programs, driving tech literacy in an 8,000+ person county.",
      impact: "Engaged 1,000+ community members annually"
    },
    {
      year: "2021",
      title: "Library Associate at MSU Architectural Library",
      description: "Cataloged 600+ rare books and digitized a rare find, preserving the past for today's architectural students.",
      impact: "Supported 5,000+ student interactions"
    },
    {
      year: "2022",
      title: "Founded MSU Libraries Emerging Technologies Committee",
      description: "Upgraded to the newest Meta 3 VR headsets and purchased digital archiving equipment.",
      impact: "Secured $5,000 in tech grants"
    },
    {
      year: "2023",
      title: "Instructional Technology Specialist",
      description: "Taught over 350 workshops/classes across campus, including staff training sessions during development days.",
      impact: "Trained 2,000+ educators, staff, and students"
    },
    {
      year: "2024",
      title: "Created Generative AI Literacy Framework",
      description: "Developed D.A.R.E.S. framework, shared via Substack, conferences, and campus workshops.",
      impact: "Shaped global AI education"
    },
    {
      year: "2024",
      title: "BoodleBox.ai Leadership Council",
      description: "Advised on AI tools for educators, researched best tools, and beta-tested developed bots.",
      impact: "Influenced 10+ AI literacy initiatives"
    },
    {
      year: "2024",
      title: "Founded LetAIBe Network",
      description: "Launched network to connect AI innovators, rebranded to letaibe.com in March 2025.",
      impact: "Built a global AI collaboration platform"
    },
    {
      year: "2025",
      title: "Developed LetAIBe Network Bots",
      description: "Created I Hear You and Peer Reviewer bots using BoodleBox for the LetAIBe Network.",
      impact: "Established AI-driven collaboration foundation"
    },
    {
      year: "2025",
      title: "MSAIC Research Fellow",
      description: "Developing AI training courses with MSAIC and fellows to bridge education and industry gaps statewide.",
      impact: "Empowering Mississippians to engage with AI"
    },
    {
      year: "2025",
      title: "Perplexity Business Fellow",
      description: "Promotes AI tools through industry talks and early access to Perplexity features.",
      impact: "Amplified AI adoption for businesses"
    },
    {
      year: "2025",
      title: "Gifted The Spark Logo",
      description: "Designed and released 'The Spark' symbol for generative AI under CC0 at sparksymbol.org.",
      impact: "Launched an iconic Generative AI emblem"
    },
    {
      year: "2025",
      title: "Founded State AI Strategies",
      description: "Launched to bring ethical AI to SMBs, rooted in decades of tech expertise.",
      impact: "Golden Triangle's First AI Consultant for SMBs"
    }
  ];

  const handleCardClick = (index: number) => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    setActiveIndex(index);
    const card = timeline.children[index] as HTMLElement;
    const cardLeft = card.offsetLeft;
    timeline.scrollTo({
      left: cardLeft - (timeline.clientWidth - card.clientWidth) / 2,
      behavior: 'smooth'
    });

    setShowLeftArrow(index > 0);
    setShowRightArrow(index < timelineEvents.length - 1);
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left' 
      ? Math.max(0, activeIndex - 1)
      : Math.min(timelineEvents.length - 1, activeIndex + 1);
    
    handleCardClick(newIndex);
  };

  return (
    <>
      {/* YouTube Video Section */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto mb-8"
          >
            <video controls preload="auto" playsInline className="w-full">
              <source src="https://www.stateaistrategies.com/videos/StateAIStrategiesIntro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg text-white/90 mb-4">
              Want to explore how AI can work for your Mississippi business?
            </p>
            <a
              href="tel:+16622701199"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#19FF7F] text-black font-semibold rounded-lg hover:bg-[#19FF7F]/90 transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call or Text Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-6" id="timeline">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From Mississippi Roots to AI Leadership
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              From classrooms, boardrooms, and Mississippi backroads, I bring AI strategies that connect and deliver for your business.
            </p>
            {/* Mississippi scenic image */}
            <div className="rounded-xl overflow-hidden max-w-3xl mx-auto">
              <img
                src="/images/Foggy lake view with trees during sunset near Starkville, MS.jpeg"
                alt="Serene foggy lake view with silhouetted trees during golden sunset near Starkville, Mississippi showcasing local natural beauty"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>

          <div className="relative">
            {showLeftArrow && (
              <button
                onClick={() => handleArrowClick('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
                aria-label="View previous timeline event"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {showRightArrow && (
              <button
                onClick={() => handleArrowClick('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
                aria-label="View next timeline event"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            <div 
              ref={timelineRef}
              className="flex overflow-hidden scroll-smooth"
              role="region"
              aria-label="Career timeline"
            >
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={`${event.year}-${index}`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-none w-[600px] mr-6 cursor-pointer"
                  onClick={() => handleCardClick(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${event.year}: ${event.title}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(index);
                    }
                  }}
                >
                  <div 
                    className={`bg-gradient-to-br from-purple-600/20 to-pink-500/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 h-full transition-all duration-300 hover:scale-[1.02] hover:border-[#19FF7F]/30 relative ${
                      activeIndex === index ? 'scale-[1.02] border-[#19FF7F]/30' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#19FF7F]/10 to-[#FDC526]/10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex flex-col h-full relative z-10">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-[#19FF7F] mb-2">{event.year}</h3>
                        <h4 className="text-xl font-semibold text-white mb-3">{event.title}</h4>
                        <p className="text-white/80">{event.description}</p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-white/10">
                        <p className="text-sm font-medium text-[#19FF7F]">Impact: {event.impact}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};