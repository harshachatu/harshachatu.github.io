import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import { TimeframeType } from './experienceData';

interface TimelineItemProps {
  timeframe: TimeframeType;
}

export function TimelineItem({ timeframe }: TimelineItemProps) {
  const hasActiveRole = timeframe.roles.some(role => role.isActive);

  return (
    <div className="mb-16 last:mb-0">
      {/* Time period */}
      <div className="flex items-center mb-8 -ml-8">
        <div className="flex items-center min-w-[200px]">
          <motion.div 
            className={`w-4 h-4 rounded-full ${hasActiveRole ? 'bg-[#2EE59D]' : 'bg-[#2A2A2A]'}`}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <div 
            className={`ml-4 text-lg font-light tracking-wide whitespace-nowrap
              ${hasActiveRole ? 'text-[#2EE59D]' : 'text-gray-400'}`}
          >
            {timeframe.period}
          </div>
        </div>
      </div>

      {/* Roles */}
      <div className="space-y-6">
        {timeframe.roles.map((role, roleIndex) => (
          <ExperienceCard 
            key={roleIndex}
            role={role}
            isFirst={roleIndex === 0}
          />
        ))}
      </div>
    </div>
  );
}