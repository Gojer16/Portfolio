import React from 'react';
import { useTypewriter } from './useTypewriter';

const terminalLines = [
  '> whoami',
  'orlando_ascanio',
  '> passion',
  '"Designing robust systems and clean APIs that scale."',
  '> mission',
  '"Build efficient, secure, and scalable solutions that matter."',
  '> stack',
  'JavaScript | Express | Python | FastAPI | React.js | MySQL | MongoDB | Redis | Docker | Tailwind',
  '> values',
  'Simplicity. Reliability. Curiosity. Impact. Growth.',
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
