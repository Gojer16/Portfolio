import React from 'react';
import { useTypewriter } from './useTypewriter';

const terminalLines = [
  '> whoami',
  'Orlando_dev',
  '> passion',
  '"Building clean, scalable, and thoughtful apps."',
  '> mission',
  '"Empower users through innovation, simplicity, and impact."',
  '> stack',
  'JavaScript | React | Node | Next.js | AI/ML | Firebase | Tailwind',
  '> values',
  'Honesty, Curiosity, Collaboration, Growth',
];

const MacOs = () => {
  const typedText = useTypewriter({ texts: terminalLines, speed: 40, delay: 1200 });

  return (
    
    <div className="bg-[#1e1e1ece] text-green-300 font-mono p-6 rounded-xl shadow-md">
       <div className="flex space-x-2 mb-4">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>
      <p>{typedText}<span className="animate-pulse">|</span></p>
    </div>
  );
};

export default MacOs;
