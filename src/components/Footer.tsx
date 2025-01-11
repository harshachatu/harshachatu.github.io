import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] mt-48 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-medium mb-2">Let's work together</h3>
            <p className="text-gray-400">Open for freelance projects and full-time positions</p>
          </div>
          
          <div className="flex gap-4">
            {[
              { Icon: FaGithub, href: 'https://github.com/harshachatu' },
              { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/harshachathuranga/' },
              { Icon: FaFacebook, href: 'https://www.facebook.com/harshachatu' }
            ].map(({ Icon, href }, index) => (
              <a 
                key={index}
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#1E1E1E] hover:bg-[#2A2A2A] transition-colors text-gray-400 hover:text-[#2EE59D]"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© {currentYear} Harsha. All Rights Reserved</div>
          <div className="flex gap-8"></div>
        </div>
      </div>
    </footer>
  );
}
