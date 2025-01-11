import React from 'react';
import ParallaxSection from '../ParallaxSection';

const skills = [
  { name: 'Figma', image: '/images/php.png' },
  { name: 'Figma', image: '/images/python.png' },
  { name: 'Figma', image: '/images/mysql.png' },
  { name: 'Figma', image: '/images/nginx.png' },
  { name: 'Figma', image: '/images/node.png' },
  { name: 'Figma', image: '/images/react.png' },
  { name: 'Figma', image: '/images/wordpress.png' },
  { name: 'Figma', image: '/images/kali.png' },
  { name: 'Laravel/PHP', image: '/images/mongo.png' },
  { name: 'Figma', image: '/images/adobe.png' },
  { name: 'Framer', image: '/images/azure.png' },
  { name: 'Webflow', image: '/images/canva.png' },
  { name: 'React', image: '/images/docker.png' },
  { name: 'WordPress', image: '/images/metaverse.png' },
  { name: 'Laravel/PHP', image: '/images/codeignitor.png' },
  { name: 'Laravel/PHP', image: '/images/laravel.png' }
];

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      <ParallaxSection speed={0.3}>
        <div className="bg-[#1A1A1A] rounded-[32px] p-12">
          <h2 className="text-4xl font-light mb-6">
            Technical <span className="text-[#2EE59D]">Expertise</span>
          </h2>
        </div>
      </ParallaxSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <ParallaxSection key={index} speed={0.4 + index * 0.1}>
            <div className="bg-[#1A1A1A] rounded-full p-6 flex items-center justify-center">
              <img src={skill.image} alt={skill.name} className="w-16 h-16" />
            </div>
          </ParallaxSection>
        ))}
      </div>
    </div>
  );
}
