import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Site {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  url: string;
  status: 'active' | 'coming-soon';
}

interface NetworkCardProps {
  site: Site;
}

export const NetworkCard: React.FC<NetworkCardProps> = ({ site }) => {
  const colorMap = {
    blue: 'bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20',
    green: 'bg-green-500/10 border-green-500/20 hover:bg-green-500/20',
    red: 'bg-red-500/10 border-red-500/20 hover:bg-red-500/20',
    amber: 'bg-amber-500/10 border-amber-500/20 hover:bg-amber-500/20',
    purple: 'bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20',
    indigo: 'bg-indigo-500/10 border-indigo-500/20 hover:bg-indigo-500/20',
    emerald: 'bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20',
  };

  return (
    <div 
      className={`rounded-xl border backdrop-blur-md p-6 transition-all duration-300 group transform hover:-translate-y-2 hover:shadow-xl ${colorMap[site.color as keyof typeof colorMap]}`}
    >
      <div className="mb-4">{site.icon}</div>
      
      <h3 className="text-xl font-bold text-white mb-2">{site.title}</h3>
      
      <p className="text-gray-300 mb-6">{site.description}</p>
      
      <div className="flex items-center justify-between">
        {site.status === 'active' ? (
          <a 
            href={site.url}
            className="inline-flex items-center text-white font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        ) : (
          <span className="text-gray-400 font-medium">Coming Soon</span>
        )}
        
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          site.status === 'active' 
            ? 'bg-green-500/20 text-green-400' 
            : 'bg-gray-500/20 text-gray-400'
        }`}>
          {site.status === 'active' ? 'Active' : 'Coming Soon'}
        </span>
      </div>
    </div>
  );
};