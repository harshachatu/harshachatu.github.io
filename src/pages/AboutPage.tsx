import React from 'react';
import PageTransition from '../components/PageTransition';
import ParallaxSection from '../components/ParallaxSection';

export default function AboutPage() {
  return (
    <PageTransition>
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
              Since beginning my journey as a freelance designer over 10 years ago, 
              I've done remote work for agencies, consulted for startups, and 
              collaborated with talented people to create digital products for both 
              business and consumer use. I'm quietly confident, naturally curious, 
              and perpetually working on improving my chops one project at a time.
            </p>
          </div>
        </ParallaxSection>

        <ParallaxSection speed={0.5}>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-[#1A1A1A] rounded-[32px] p-8">
              <h3 className="text-[#2EE59D] text-lg font-medium mb-4">Design</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Web Design</li>
                <li>Mobile App Design</li>
                <li>UI/UX Design</li>
                <li>Branding</li>
              </ul>
            </div>
            
            <div className="bg-[#1A1A1A] rounded-[32px] p-8">
              <h3 className="text-[#2EE59D] text-lg font-medium mb-4">Development</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>React / Next.js</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </PageTransition>
  );
}