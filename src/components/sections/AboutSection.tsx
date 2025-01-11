import React from 'react';
import ParallaxSection from '../ParallaxSection';

export default function AboutSection() {
  return (
    <div className="space-y-8">
      <ParallaxSection speed={0.3}>
        <div className="bg-[#1A1A1A] rounded-[32px] p-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1E1E1E] text-xs mb-12">
            <span className="w-2 h-2 bg-white rounded-full" />
            ABOUT ME
          </div>
          
          <h2 className="text-4xl font-light mb-6">
            Every great design begins with<br />
            an even <span className="text-[#2EE59D]">better story</span>
          </h2>
          
          <p className="text-gray-400 leading-relaxed">
            Experienced and versatile Senior Full-Stack Developer with over 14 years of expertise in creating modern, scalable web and mobile applications. 
            Skilled in PHP, Python, React, and Next.js, with a proven track record in WordPress development, e-commerce platforms, and cloud-based solutions (Azure). 
            Currently pursuing an MSc in Information Security at Luleå University of Technology to further enhance expertise in secure system design and development.
          </p>
        </div>
      </ParallaxSection>

      <ParallaxSection speed={0.5}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A1A] rounded-[32px] p-8">
            <h3 className="text-[#2EE59D] text-lg font-medium mb-4">Development</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Full Stack Development</li>
              <li>Cloud Solutions (Azure)</li>
              <li>React & Next.js</li>
              <li>PHP & Python</li>
            </ul>
          </div>
          
          <div className="bg-[#1A1A1A] rounded-[32px] p-8">
            <h3 className="text-[#2EE59D] text-lg font-medium mb-4">Infrastructure</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Linux Server Administration</li>
              <li>Apache, NGINX, LiteSpeed</li>
              <li>Database Design</li>
              <li>Security Implementation</li>
            </ul>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}