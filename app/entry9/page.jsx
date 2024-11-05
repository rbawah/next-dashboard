"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Entry9() {
  const router = useRouter();

  const handlePrev = () => {
    router.push('/entry8');
  };

  const handleNext = () => {
    router.push('/entry10');
  };

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-md">
      <div className="flex-grow flex">
        <div className="w-1/2 pr-4">
          <div className="max-w-3xl mx-auto p-10">
            <div className="space-y-0">
              <div className="text-2xl font-bold text-gray-900">Team Work</div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  My biggest takeaway from the project process and teamwork was the importance of <b>clear communication</b> and <b>shared responsibility</b> in achieving success. I learned that effective teamwork requires active collaboration, regular check-ins, and ensuring that everyone understands their roles and contributions.
                </li>
                <li>
                  What surprised me was how quickly <b>miscommunication</b> could lead to delays or confusion, emphasizing the need for clarity and openness.
                </li>
                <li>
                  The hardest part was <b>synchronizing schedules</b> and ensuring all team members were aligned, especially when tasks overlapped.
                </li>
                <li>
                  However, the most rewarding part was seeing our combined efforts result in a polished final product, where everyone's input was reflected. It highlighted that diverse perspectives lead to stronger outcomes when managed well.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/portfolio/team-work-meme.avif"
            alt="Entry9 Image"
            width={600}
            height={400}
          />
          <p>Teamwork meme by 'KUMOSPACE'</p>
          Source: <a className='text-blue-500 hover:text-red-600' href='https://www.kumospace.com/blog/teamwork-memes'>KUMOSPACE</a>
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
