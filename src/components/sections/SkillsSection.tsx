import React from 'react';
import ParallaxSection from '../ParallaxSection';
import { Figma, Framer, Atom } from 'lucide-react';

const skills = [
  { name: 'Figma', icon: Figma, progress: 92 },
  { name: 'Framer', icon: Framer, progress: 85 },
  { name: 'Webflow', progress: 80, customIcon: 'W' },
  { name: 'React', icon: Atom, progress: 90 },
  { name: 'WordPress', progress: 86, customIcon: 'W' },
  { name: 'Laravel/PHP', progress: 70, customIcon: 'L' }
];

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      <ParallaxSection speed={0.3}>
        <div className="bg-[#1A1A1A] rounded-[32px] p-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1E1E1E] text-xs mb-12">
            <span className="w-2 h-2 bg-white rounded-full" />
            SKILLS
          </div>
          
          <h2 className="text-4xl font-light mb-6">
            Technical <span className="text-[#2EE59D]">Expertise</span>
          </h2>
        </div>
      </ParallaxSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <ParallaxSection key={index} speed={0.4 + (index * 0.1)}>
            <div className="bg-[#1A1A1A] rounded-[32px] p-8 relative overflow-hidden group">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1E1E1E] mb-6">
                {skill.icon ? (
                  <skill.icon className="w-8 h-8" />
                ) : (
                  <span className="text-2xl font-bold">{skill.customIcon}</span>
                )}
              </div>
              
              <h3 className="text-xl mb-2">{skill.name}</h3>
              
              <div className="relative w-full h-1 bg-[#1E1E1E] rounded-full overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full bg-[#2EE59D] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.progress}%` }}
                />
              </div>
              
              <span className="absolute top-8 right-8 text-3xl font-light text-[#2EE59D]">
                {skill.progress}%
              </span>
            </div>
          </ParallaxSection>
        ))}
      </div>
    </div>
  );
}