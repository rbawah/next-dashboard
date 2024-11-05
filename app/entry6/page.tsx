"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Entry6() {
  const router = useRouter();

  const handlePrev = () => {
    router.push('/entry5');
  };

  const handleNext = () => {
    router.push('/entry7');
  };

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-md">
      <div className="flex-grow flex">
        <div className="w-1/2 pr-4">
          <div className="max-w-3xl mx-auto p-10">
            <div className="space-y-0">
              <div className="text-2xl font-bold text-gray-900">TheGoodRobot Podcast - Buddhism and AI Ethics with The Venerable Tenzin Priyadarshi</div>
              <div className="text-gray-700 space-y-4">
                <div>
                  <b>Source:</b> <a href="https://open.spotify.com/episode/3GaECUXSVFoqefdci3d48t" className="text-blue-600 underline">Spotify Podcast Link</a>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    This conversation with Tenzin Priyadarshi reshaped my perspective on ethics in engineering, emphasizing the need to embed <b>ethical considerations</b> before development, not only through post-deployment adjustments.
                  </li>
                  <li>
                    I found his critique of over-relying on metrics powerful, as it highlights that <b>quantifying everything overlooks qualitative values</b> like empathy and kindness—elements often difficult to measure but essential in ethical technology.
                  </li>
                  <li>
                    His distinction between intelligence and wisdom resonated with me, urging me to consider that efficient algorithms alone aren't enough; fostering systems that reflect <b>human values</b> is critical.
                  </li>
                  <li>
                    This insight reminded me of a past project where <b>prioritizing performance</b> metrics over user-centered values led to a less effective outcome. In the future, I plan to incorporate more <b>diverse perspectives</b> early in the design phase to achieve a balance between technical efficiency and ethical responsibility, focusing on the societal impact of technology.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/portfolio/buddhism-ai-ethics.jpg"
            alt="Entry4 Image"
            width={800}
            height={400}
          />
          <p>Picture explaining the intersection of Buddhist Ethics AND Professional/Political Ethics</p>
          <p>From: <a
            href='https://so04.tci-thaijo.org/index.php/JSBA/article/view/269643'
            className='text-blue-500 hover:text-red-600'>
            Journal of Buddist Anthropology
          </a>
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
