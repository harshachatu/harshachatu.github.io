import React from 'react';
import { Github, Linkedin, Facebook } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/harshachatu' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/harshachathuranga/' },
    { Icon: Facebook, href: 'https://www.facebook.com/harshachatu' }
  ];

  return (
    <div className="flex gap-3 mb-8">
      {socialLinks.map(({ Icon, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#1E1E1E] hover:bg-[#2A2A2A] transition-colors"
        >
          <Icon className="w-5 h-5 text-gray-400 hover:text-[#2EE59D]" />
        </a>
      ))}
    </div>
  );
}
