import React from 'react';
import ParallaxSection from '../ParallaxSection';
import { Trophy } from 'lucide-react';

const awards = [
  {
    year: "2023",
    title: "Best Tech Innovation Award",
    organization: "Digital Excellence Awards",
    description: "Recognized for developing innovative AI-powered chatbot solutions"
  },
  {
    year: "2022",
    title: "Digital Growth Champion",
    organization: "Media & Marketing Excellence",
    description: "Awarded for achieving 300% digital revenue growth through strategic campaigns"
  },
  {
    year: "2020",
    title: "Outstanding Tech Leadership",
    organization: "Tech Leaders Summit",
    description: "Recognized for excellence in leading complex e-commerce development projects"
  }
];

export default function AwardsSection() {
  return (
    <div className="space-y-8">
      <ParallaxSection speed={0.3}>
        <div className="bg-[#1A1A1A] rounded-[32px] p-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1E1E1E] text-xs mb-12">
            <span className="w-2 h-2 bg-white rounded-full" />
            AWARDS
          </div>
          
          <h2 className="text-4xl font-light mb-6">
            Recognition & <span className="text-[#2EE59D]">Achievements</span>
          </h2>
        </div>
      </ParallaxSection>

      <div className="space-y-6">
        {awards.map((award, index) => (
          <ParallaxSection key={index} speed={0.4 + (index * 0.1)}>
            <div className="bg-[#1A1A1A] rounded-[32px] p-8 group hover:bg-[#1E1E1E] transition-colors">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#1E1E1E] group-hover:bg-[#2A2A2A] rounded-full transition-colors">
                  <Trophy className="w-6 h-6 text-[#2EE59D]" />
                </div>
                <div>
                  <div className="text-[#2EE59D] text-sm mb-2">{award.year}</div>
                  <h3 className="text-xl font-medium mb-1">{award.title}</h3>
                  <div className="text-gray-400 mb-4">{award.organization}</div>
                  <p className="text-gray-500 leading-relaxed">{award.description}</p>
                </div>
              </div>
            </div>
          </ParallaxSection>
        ))}
      </div>
    </div>
  );
}