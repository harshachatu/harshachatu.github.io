import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-2xl font-medium">Drake</span>
      <span className="text-[10px] bg-[#1E1E1E] rounded-full px-1 py-0.5 leading-none">®</span>
    </div>
  );
}