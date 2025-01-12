import React from 'react';
import ParallaxSection from '../ParallaxSection';
import { Trophy } from 'lucide-react';

const awards = [
  {
    year: "2024",
    title: "Best Tech InnovationMost Popular Media, Sports & Entertainment Award",
    organization: "BestWeb.LK",
    description: "Recognized as the Most Popular Website in the Media, Sports, and Entertainment category at BestWeb.LK for outstanding digital innovation and user engagement."
  },
  {
    year: "2020",
    title: "Gold Award for Best Media Website",
    organization: "BestWeb.LK",
    description: "hirunews.lk achieved the Gold Award in the Media and Publishing category at the BestWeb.LK 2020 for exceptional design and content."
  },
  {
    year: "2019",
    title: "Best Digital Enabled Product",
    organization: "SLT Zero One Awards",
    description: "hirutv.lk earned the Gold Award for Best Digital-Enabled Product in the Media and Publishing category at the SLT Zero One Awards."
  },
  {
    year: "2018",
    title: "Best Website - Media and Publishing",
    organization: "SLT Zero One Awards",
    description: "hirufm.lk was honored as the Best Website in the Media and Publishing category and received the Overall Award in the sector at the SLT Zero One Awards."
  },
  {
    year: "2016",
    title: "e-Swabhimani Awards",
    organization: "ICTA",
    description: "hirunews.lk was celebrated as the Best News & Media Website, and 'Hiru Online Wesak Thorana' was recognized for preserving and promoting local heritage at the e-Swabhimani Awards."
  },
  {
    year: "2015",
    title: "Best Entertainment Website & Best Media Website",
    organization: "BestWeb.LK",
    description: "Hiru News.lk and Hiru FM.lk secured top honors at BestWeb.LK 2015 for exceptional performance in the Media and Entertainment categories."
  },
  {
    year: "2014",
    title: "Best Mobile App",
    organization: "UN-based World Summit Awards",
    description: "Hiru TV's mobile app was awarded Best Mobile App at the UN-based World Summit Awards 2014 for its innovative design and functionality."
  },
  {
    year: "2013",
    title: "Silver Award for Best Media Website",
    organization: "BestWeb.LK",
    description: "hirunews.lk received the Silver Award for excellence in the Media and Publishing category at BestWeb.LK 2013."
  },
  {
    year: "2012",
    title: "Gold Award for Best Web Developer",
    organization: "BestWeb.LK",
    description: "Awarded the Gold Award for Best Web Developer at BestWeb.LK 2012 for delivering outstanding web solutions."
  },
  {
    year: "2012",
    title: "Merit Award for Best SME Website",
    organization: "BestWeb.LK",
    description: "Recognized with the Merit Award for the Best SME Website at BestWeb.LK 2012 for supporting small and medium enterprises."
  },
  {
    year: "2011",
    title: "Entertainment & Games Award",
    organization: "e-Swabhimani Awards",
    description: "Hiru FM was awarded for excellence in Entertainment & Games at the e-Swabhimani Awards 2011 for its engaging digital platform."
  },
  {
    year: "2011",
    title: "Manthan Award",
    organization: "Manthan Awards",
    description: "The Hiru FM website won the prestigious Manthan Award 2011 for innovative and impactful digital initiatives."
  }
];


export default function AwardsSection() {
  return (
    <div className="space-y-8">
      <ParallaxSection speed={0.3}>
        <div className="bg-[#1A1A1A] rounded-[32px] p-12">
          
          
          <h2 className="text-4xl font-light mb-6">
            Recognition & <span className="text-[#2EE59D]">Achievements</span>
          </h2>
        </div>
      </ParallaxSection>

      <div className="space-y-6">
        {awards.map((award, index) => (
          <ParallaxSection key={index} speed={0.4 + (index * 0.1)}>
            <div className="bg-[#1A1A1A] rounded-[32px] p-8 group hover:bg-[#1E1E1E] transition-colors mt-8 mb-8">
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