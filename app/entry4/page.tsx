import React from 'react';
import Image from 'next/image';

export default function Entry4() {
  return (
    <div className="flex bg-gray-100 rounded-lg shadow-md">
      <div className="w-1/2 pr-4">
        <div className="max-w-3xl mx-auto p-10">
          <div className="space-y-0">
            <div className="text-2xl font-bold text-gray-900">Surprising or Most Interesting</div>
            <div className="text-gray-700 space-y-4">
              <div>
                The integration of <b>Indigenous ethics</b> and <b>Two-Eyed Seeing</b> into engineering practice was intriguing, as it promotes the blending of traditional knowledge with modern science, emphasizing inclusive approaches to solving problems.
              </div>
              <div>
                The concept of <b>design justice</b> stood out, especially the idea that design can either liberate or oppress based on who controls the narrative, which expanded my understanding of equity in engineering.
              </div>
            </div>

            <div className="space-y-0">
              <div className="text-xl font-semibold text-gray-800">Extended Learnings from Class</div>
              <div className="text-gray-700">
                I explored the concept of <b>ecological engineering</b> further, particularly in the context of circular economies and sustainability. Reading about how engineers can implement solutions that mimic ecological cycles deepened my understanding of sustainable development.
              </div>
            </div>

            <div className="space-y-0">
              <div className="text-xl font-semibold text-gray-800">Challenges or Disagreements</div>
              <div className="text-gray-700">
                The topic of <b>planned obsolescence</b> challenged my thinking, as it presented a moral dilemma between driving economic growth and contributing to waste and environmental degradation. It made me rethink the role of engineers in perpetuating unsustainable practices.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <Image
          src="/portfolio/BMS-W700.webp"
          alt="Entry2 Image"
          width={800}
          height={400}
        />
      </div>
    </div>
  );
}
