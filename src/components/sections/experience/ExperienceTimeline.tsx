import React from 'react';
import ParallaxSection from '../../ParallaxSection';
import { TimelineItem } from './TimelineItem';
import { experienceData } from './experienceData';

export function ExperienceTimeline() {
  return (
    <div className="relative pl-8 mt-16">
      {/* Timeline line */}
      <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-[#2EE59D] via-[#2A2A2A] to-[#2A2A2A]" />

      {experienceData.map((timeframe, index) => (
        <ParallaxSection key={index} speed={0.4 + (index * 0.1)}>
          <TimelineItem timeframe={timeframe} />
        </ParallaxSection>
      ))}
    </div>
  );
}