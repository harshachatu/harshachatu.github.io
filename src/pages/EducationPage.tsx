import React from 'react';
import ParallaxSection from '../components/ParallaxSection';

const education = [
  {
    period: "2012 - 2015",
    degree: "Bachelor of Science in Computer Science",
    institution: "Tech University",
    description: "Focused on software engineering, web development, and user interface design. Graduated with honors."
  },
  {
    period: "2016",
    degree: "UI/UX Design Certification",
    institution: "Design Academy",
    description: "Intensive program covering user research, wireframing, prototyping, and modern design tools."
  },
  {
    period: "2018",
    degree: "Advanced Frontend Development",
    institution: "Code Institute",
    description: "Specialized training in modern JavaScript frameworks, responsive design, and web performance optimization."
  },
];

export default function EducationPage() {
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