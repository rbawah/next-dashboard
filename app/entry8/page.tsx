"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Entry8() {
  const router = useRouter();

  const handlePrev = () => {
    router.push('/entry7');
  };

  const handleNext = () => {
    router.push('/entry9');
  };

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-md">
      <div className="flex-grow flex">
        <div className="w-1/2 pr-4">
          <div className="max-w-3xl mx-auto p-10">
            <div className="space-y-0">
              <div className="text-2xl font-bold text-gray-900">Ghana's First Female Engineer and President of the Federation of African Engineers</div>
              <div className='py-2'>
                <b>Source:</b> <a href="https://cipesa.org/2024/03/towards-ethical-ai-regulation-in-africa/#:~:text=As%20AI%20systems%20make%20decisions,coloniality%2C%20class%20and%20citizenship%E2%80%9D" className="text-blue-600 underline">CIPESA Article Link</a>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <b>Course Topic:</b> This article relates to <b>Engineering Ethics and Leadership</b>, specifically regarding the impact of diversity and resilience in engineering practice.
                </li>
                <li>
                  <b>Summary:</b> The article covers Carlien Bou-Chedid’s journey as Ghana’s first female structural engineer and her leadership role as president of the Federation of African Engineering Organizations. She advocates for earthquake resilience in Ghana and emphasizes the importance of promoting female representation in engineering.
                </li>
                <li>
                  <b>Reflection:</b> Her achievements highlight the ethical responsibility of engineers to create safe, resilient structures while advancing diversity within the profession. Her commitment to earthquake preparedness demonstrates an application of ethical design to real-world issues, prioritizing community well-being. This article reinforced the importance of leadership and inclusivity in engineering—qualities that can inspire a more supportive and innovative field. Her work motivates me to embrace both technical expertise and a socially responsible approach, which are vital to fulfilling the broader purpose of engineering.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/portfolio/bou-chedid.jpg"
            alt="Entry8 Image"
            width={800}
            height={400}
          />
          <p>Portrait of Carlien Bou-Chedid. Ghana's first female engineer</p>
          <p>Source: <a
            className='text-blue-500 hover:text-red-600'
            href='https://winegh.com/index.php/blog/carlien-bou-chedid-ghanas-first-female-engineer-and-current-president-of-the-federation-of-african-engineers'>
            https://winegh.com/
          </a></p>
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
