import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2 } from 'lucide-react';
import { RoleType } from './experienceData';

interface ExperienceCardProps {
  role: RoleType;
  period: string;
  isFirst: boolean;
}

export function ExperienceCard({ role, period, isFirst }: ExperienceCardProps) {
  return (
    <motion.div 
      className={`
        bg-[#1A1A1A] rounded-[32px] p-8 transition-all duration-300
        hover:bg-[#1E1E1E] group relative overflow-hidden
        ${role.isActive ? 'border border-[#2EE59D]' : ''}
      `}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative elements */}
      {role.isActive && (
        <div className="absolute top-0 right-0 w-20 h-20">
          <div className="absolute transform rotate-45 bg-[#2EE59D] text-black text-xs font-medium py-1 px-6 right-[-20px] top-[20px]">
            ACTIVE
          </div>
        </div>
      )}

      <div className="text-[#2EE59D] text-sm mb-2">{period}</div>
      
      <div className="flex items-start justify-between">
        <div className="flex-grow">
          <h3 className="text-xl font-medium mb-2 group-hover:text-[#2EE59D] transition-colors">
            {role.title}
          </h3>
          
          <div className="flex items-center text-gray-400 mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{role.company}</span>
          </div>

          {role.description && (
            <p className="text-gray-500 leading-relaxed">
              {role.description}
            </p>
          )}

          {role.achievements && (
            <ul className="mt-4 space-y-2">
              {role.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-400 flex items-start">
                  <span className="text-[#2EE59D] mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          )}
        </div>

        {role.link && (
          <a 
            href={role.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#2EE59D] transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}