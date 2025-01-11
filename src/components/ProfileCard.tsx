import React from 'react';
import { Mail, Twitter, Github, Instagram } from 'lucide-react';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

export default function ProfileCard() {
  return (
    <div className="bg-[#1A1A1A] rounded-[32px] p-8 flex flex-col items-center text-center">
      <Logo />
      
      <div className="text-sm text-gray-400 mt-2 mb-6">
        Senior Full Stack Developer<br />
        Cloud Solutions Expert
      </div>
      
      <div className="w-48 h-48 rounded-[24px] overflow-hidden mb-6">
        <img 
          src="/images/pic.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-[15px] text-gray-300 mb-1">harsha86.chatu@gmail.com</div>
      <div className="text-[15px] text-gray-500 mb-8">Based in Skellefteå, Sweden</div>

      <SocialLinks />

      <button className="w-full bg-[#2EE59D] hover:bg-[#25CC89] text-black font-medium py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 text-sm">
        <Mail className="w-4 h-4" />
        HIRE ME!
      </button>

      <div className="mt-8 text-xs text-gray-600">
        © {new Date().getFullYear()} Harsha. All Rights Reserved
      </div>

    </div>
  );
}