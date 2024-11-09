"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Entry10() {
  const router = useRouter();

  const handlePrev = () => {
    router.push('/entry9');
  };

  const handleNext = () => {
    router.push('/entry11');
  };

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-md">
      <div className="flex-grow flex">
        <div className="w-1/2 pr-4">
          <div className="max-w-3xl mx-auto p-10">
            <div className="space-y-0">
              <div className="text-2xl font-bold text-gray-900">Looking Back</div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Reflecting on my initial responses, I noticed a strong desire to deepen my understanding of ethics beyond theoretical knowledge. In <b>Quiz 1</b>, I mentioned excitement for <b>"weekly reflections and personal portfolio,"</b> as these elements pushed us to <b>"think deeply about...ethics in practice"</b>.
                </li>
                <li>
                  This journey has helped me integrate ethics into real-world situations, understanding that ethical decision-making is complex and often requires balancing personal values with professional standards. For example, I learned to appreciate how <b>authenticity</b> and <b>kindness</b> are crucial in fostering a healthy work environment, even though they might not directly relate to typical engineering ethics (<b>Quiz 2</b>). This experience reminds me to consider both ethical codes and personal values in my career, especially when the former might lack nuance.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/portfolio/looking-back-1.webp"
            alt="Entry10 Image"
            width={500}
            height={400}
          />
          <p>
            AI generated on <a href="https://chatgpt.com/" className='text-blue-500 hover:text-red-500'>https://chatgpt.com/ </a>
            Generated on November 9, 2024
            using all text on this slide in the prompt.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center p-4">
        <button 
          onClick={handlePrev} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow">
          Prev
        </button>
        <button 
          onClick={handleNext} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow">
          Next
        </button>
      </div>
    </div>
  );
}
