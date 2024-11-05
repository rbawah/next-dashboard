"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Entry12() {
  const router = useRouter();

  const handlePrev = () => {
    router.push('/entry11');
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
              <div className="text-2xl font-bold text-gray-900">What I Like Doing</div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  One valuable activity I would highlight is my involvement in <b>community hackathons</b>. Participating in these collaborative coding events honed my ability to work under pressure, solve complex problems quickly, and adapt to new technologies. The fast-paced nature of <b>hackathons</b> has improved my <b>teamwork, communication, and time management skills</b>, all of which are essential in engineering. I’ve learned how to break down large problems into manageable tasks, prioritize critical issues, and implement creative solutions on the fly.
                </li>
                <li>
                  One key takeaway from these experiences is the importance of <b>iterative development</b>—building a basic, functional product first and refining it over time. This aligns with engineering principles of <b>prototyping and testing</b>. Additionally, the <b>diversity</b> of people I collaborated with during these events has enhanced my ability to approach problems from different perspectives, making me more adaptable and <b>open-minded</b> in engineering projects.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/portfolio/hackathon.jpeg"
            alt="Entry12 Image"
            width={800}
            height={400}
          />
          <p>Hackathon meme by 'Derek Ferguson' on LinkedIn</p>
          Source: <a className='text-blue-500 hover:text-red-600' href='https://www.linkedin.com/pulse/hackathon-testing-environment-derek-ferguson/'>LinkedIn Article</a>
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
          className="bg-gray-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded shadow">
          End
        </button>
      </div>
    </div>
  );
}
