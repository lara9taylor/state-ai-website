import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getBreadcrumbTrail } from '../utils/navigationHelpers';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbTrail(location.pathname);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const isFirst = index === 0;

          return (
            <motion.li
              key={crumb.path}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="flex items-center gap-2"
            >
              {!isFirst && (
                <ChevronRight className="w-4 h-4 text-white/40" aria-hidden="true" />
              )}

              {isLast ? (
                <span className="text-white/90 font-medium">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-white/70 hover:text-[#19FF7F] transition-colors duration-200"
                >
                  {crumb.label}
                </Link>
              )}
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
};
