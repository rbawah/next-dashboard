"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Entry11() {
  const router = useRouter();

  const handlePrev = () => {
    router.push('/entry10');
  };

  const handleNext = () => {
    router.push('/entry12');
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
                  One of the most impactful insights was exploring Indigenous ethics. I was struck by how Indigenous principles emphasize interconnectedness, a perspective I hadn’t fully considered but now recognize as valuable in engineering. My response in <b>Quiz 4</b> noted that these ethics felt <b>"almost universal"</b> in promoting a balanced, harmonious life.
                </li>
                <li>
                  Reflecting on this, I realize that engineering doesn’t exist in isolation—it directly affects communities and ecosystems.
                </li>
                <li>
                  Indigenous ethics encourage mindfulness about every impact, which resonates with me deeply and motivates me to design responsibly.
                </li>
                <li>
                  In my future career, I want to embody this approach, ensuring that the solutions I create align with sustainable, community-centered principles. This new understanding will guide me to consider not just technical excellence but also cultural sensitivity in my work.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/portfolio/looking-back-2.webp"
            alt="Entry11 Image"
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
