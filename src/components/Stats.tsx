import React from 'react';
import ParallaxSection from './ParallaxSection';

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <ParallaxSection speed={0.4}>
        <StatCard
          number="14+"
          label="YEARS OF EXPERIENCE"
        />
      </ParallaxSection>
      
      <ParallaxSection speed={0.6}>
        <StatCard
          number="200+"
          label="PROJECTS COMPLETED ACROSS 3 COUNTRIES"
        />
      </ParallaxSection>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-[#1A1A1A] rounded-[32px] p-12">
      <div className="text-[#2EE59D] text-[50px] font-light leading-none mb-4">{number}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}