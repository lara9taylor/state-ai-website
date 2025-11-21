import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface BackButtonProps {
  label?: string;
  fallbackPath?: string;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  label = 'Back',
  fallbackPath = '/',
  className = ''
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (window.history.length > 1 && document.referrer.includes(window.location.host)) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      onClick={handleBack}
      className={`
        inline-flex items-center gap-2 px-4 py-2
        text-white/90 hover:text-[#19FF7F]
        bg-transparent hover:bg-white/10
        rounded-lg transition-all duration-200
        group
        ${className}
      `}
      aria-label={label}
    >
      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
      <span className="font-medium">{label}</span>
    </motion.button>
  );
};
