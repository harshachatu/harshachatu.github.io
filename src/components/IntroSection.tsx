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
          Say Hi from <span className="text-[#2EE59D]">Harsha</span>,<br />
          Senior Web Developer<br />
          & Full Stack Expert
        </h1>
      </ParallaxSection>
      
      <ParallaxSection speed={0.7}>
        <p className="text-gray-400 text-lg">
          Over 14 years of expertise in creating modern, scalable web and mobile applications.<br />
          Passionate about delivering innovative solutions!
        </p>
      </ParallaxSection>
    </div>
  );
}