import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getRelatedServiceIds, getServicesForAudience } from '../utils/navigationHelpers';
import { getServicesByIds, getServicesByAudience, Service } from '../data/servicesData';

interface RelatedServicesCarouselProps {
  currentService?: string;
  audienceType?: string;
  title?: string;
}

export const RelatedServicesCarousel: React.FC<RelatedServicesCarouselProps> = ({
  currentService,
  audienceType,
  title
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  let services: Service[] = [];
  let heading = title || 'Related Services';

  if (currentService) {
    const relatedIds = getRelatedServiceIds(currentService);
    services = getServicesByIds(relatedIds);
  } else if (audienceType) {
    const serviceIds = getServicesForAudience(audienceType);
    services = getServicesByIds(serviceIds);
    heading = title || 'Recommended Services';
  }

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      window.addEventListener('resize', updateScrollButtons);
      return () => {
        container.removeEventListener('scroll', updateScrollButtons);
        window.removeEventListener('resize', updateScrollButtons);
      };
    }
  }, [services]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  if (services.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">{heading}</h2>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`
                p-2 rounded-lg transition-all duration-200
                ${canScrollLeft
                  ? 'bg-white/10 hover:bg-white/20 text-white cursor-pointer'
                  : 'bg-white/5 text-white/30 cursor-not-allowed'
                }
              `}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`
                p-2 rounded-lg transition-all duration-200
                ${canScrollRight
                  ? 'bg-white/10 hover:bg-white/20 text-white cursor-pointer'
                  : 'bg-white/5 text-white/30 cursor-not-allowed'
                }
              `}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] snap-start"
            >
              <Link to={service.ctaLink.startsWith('http') ? service.ctaLink : service.ctaLink}>
                <div className={`
                  ${service.bgColor} backdrop-blur-sm rounded-xl p-6
                  border border-white/10 hover:border-[#19FF7F]/50
                  transition-all duration-300 h-full
                  flex flex-col justify-between
                  hover:transform hover:scale-105
                  group
                `}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {service.icon}
                      <div className="flex-1">
                        <h3 className="text-lg text-white font-semibold leading-tight group-hover:text-[#19FF7F] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="text-xs text-[#19FF7F] font-semibold bg-[#19FF7F]/10 px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    </div>

                    <p className="text-white/80 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-[#19FF7F] font-semibold text-sm">
                      {service.ctaText}
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#19FF7F] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {services.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/20"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
