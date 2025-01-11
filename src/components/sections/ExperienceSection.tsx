import React from 'react';
import ParallaxSection from '../ParallaxSection';
import { SectionHeader } from '../common/SectionHeader';
import { experienceData } from './experience/experienceData';
import { ExperienceCard } from './experience/ExperienceCard';

export default function ExperienceSection() {
  return (
    <div className="space-y-8">
      <ParallaxSection speed={0.3}>
        <SectionHeader 
          badge="EXPERIENCE"
          title="Work"
          highlightedTitle="Experience"
        />
      </ParallaxSection>

      <div className="space-y-6">
        {experienceData.map((timeframe, index) => (
          <ParallaxSection key={index} speed={0.4 + (index * 0.1)}>
            {timeframe.roles.map((role, roleIndex) => (
              <div key={roleIndex} className="mb-6 last:mb-0">
                <ExperienceCard 
                  role={role}
                  period={timeframe.period}
                  isFirst={roleIndex === 0}
                />
              </div>
            ))}
          </ParallaxSection>
        ))}
      </div>
    </div>
  );
}