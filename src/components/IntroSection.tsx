import React from 'react';
import ParallaxSection from './ParallaxSection';

export default function IntroSection() {
  return (
    <div className="bg-[#1A1A1A] rounded-[32px] p-12 overflow-hidden">
      <ParallaxSection speed={0.3}>
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1E1E1E] text-xs mb-12">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          INTRODUCE
        </div>
      </ParallaxSection>
      
      <ParallaxSection speed={0.5}>
        <h1 className="text-[64px] leading-[1.1] font-light mb-6">
          Hi, I'm <span className="text-[#2EE59D]">Harsha</span>,<br />
          Full Stack Developer<br />
          Cyber Security Expert<br />
          Digital Media Manager
        </h1>
      </ParallaxSection>
      
      
    </div>
  );
}