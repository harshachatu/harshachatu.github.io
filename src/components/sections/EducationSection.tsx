import React from 'react';
import ParallaxSection from '../ParallaxSection';

const education = [
  {
    period: "2023 - Present",
    degree: "MSc in Information Security",
    institution: "Luleå University of Technology",
    description: "Pursuing advanced studies in secure system design and cybersecurity"
  },
  {
    period: "2008 - 2012",
    degree: "BSc in Computer Science",
    institution: "University College Dublin",
    description: "Focused on software engineering, web development, and computer systems"
  }
];

export default function EducationSection() {
  return (
    <div className="space-y-8">
      <ParallaxSection speed={0.3}>
        <div className="bg-[#1A1A1A] rounded-[32px] p-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1E1E1E] text-xs mb-12">
            <span className="w-2 h-2 bg-white rounded-full" />
            EDUCATION
          </div>
          
          <h2 className="text-4xl font-light mb-6">
            Education & <span className="text-[#2EE59D]">Certifications</span>
          </h2>
        </div>
      </ParallaxSection>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <ParallaxSection key={index} speed={0.4 + (index * 0.1)}>
            <div className="bg-[#1A1A1A] rounded-[32px] p-8">
              <div className="text-[#2EE59D] text-sm mb-2">{edu.period}</div>
              <h3 className="text-xl font-medium mb-1">{edu.degree}</h3>
              <div className="text-gray-400 mb-4">{edu.institution}</div>
              <p className="text-gray-500 leading-relaxed">{edu.description}</p>
            </div>
          </ParallaxSection>
        ))}
      </div>
    </div>
  );
}