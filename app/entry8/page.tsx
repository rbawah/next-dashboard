import React from 'react';
import Image from 'next/image';

export default function Entry8() {
  return (
    <div className="flex bg-gray-100 rounded-lg shadow-md">
      <div className="w-1/2 pr-4">
        <div className="max-w-3xl mx-auto p-10">
          <div className="space-y-0">
            <div className="text-2xl font-bold text-gray-900">Entry 8</div>
            <div className="text-gray-700 space-y-4">
              <div>
                <b>Entry 8:</b>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <Image
          src="/portfolio/eu-ai-act.png"//https://www.thinkers360.com/tl/blog/members/an-introduction-to-risk-levels-in-the-e-u-ai-act
          alt="Entry3 Image"
          width={700}
          height={400}
        />
      </div>
    </div>
  );
}
