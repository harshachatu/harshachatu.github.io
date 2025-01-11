import React from 'react';
import ParallaxSection from '../components/ParallaxSection';

const experiences = [
  {
    period: "2020 - Present",
    role: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    description: "Lead frontend development for enterprise applications, mentoring junior developers, and implementing best practices."
  },
  {
    period: "2018 - 2020",
    role: "UI/UX Designer",
    company: "Creative Studio",
    description: "Designed user interfaces for mobile apps and websites, conducted user research, and created interactive prototypes."
  },
  {
    period: "2015 - 2018",
    role: "Web Developer",
    company: "Digital Agency",
    description: "Developed responsive websites and web applications using modern JavaScript frameworks and tools."
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <ParallaxSection speed={0.3}>
        <div className="bg-[#1A1A1A] rounded-[32px] p-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1E1E1E] text-xs mb-12">
            <span className="w-2 h-2 bg-white rounded-full" />
            EXPERIENCE
          </div>
          
          <h2 className="text-4xl font-light mb-6">
            Work <span className="text-[#2EE59D]">Experience</span>
          </h2>
        </div>
      </ParallaxSection>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ParallaxSection key={index} speed={0.4 + (index * 0.1)}>
            <div className="bg-[#1A1A1A] rounded-[32px] p-8">
              <div className="text-[#2EE59D] text-sm mb-2">{exp.period}</div>
              <h3 className="text-xl font-medium mb-1">{exp.role}</h3>
              <div className="text-gray-400 mb-4">{exp.company}</div>
              <p className="text-gray-500 leading-relaxed">{exp.description}</p>
            </div>
          </ParallaxSection>
        ))}
      </div>
    </div>
  );
}