import React from 'react';
import { Twitter, Github, Instagram } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex gap-3 mb-8">
      {[Twitter, Github, Instagram].map((Icon, index) => (
        <button key={index} className="p-3 rounded-full bg-[#1E1E1E] hover:bg-[#2A2A2A] transition-colors">
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
}