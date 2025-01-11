import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightedTitle: string;
}

export function SectionHeader({ badge, title, highlightedTitle }: SectionHeaderProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-[32px] p-12">
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1E1E1E] text-xs mb-12">
        <span className="w-2 h-2 bg-white rounded-full" />
        {badge}
      </div>
      
      <h2 className="text-4xl font-light mb-6">
        {title} <span className="text-[#2EE59D]">{highlightedTitle}</span>
      </h2>
    </div>
  );
}