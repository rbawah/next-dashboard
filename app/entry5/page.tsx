import React from 'react';
import Image from 'next/image';

export default function Entry5() {
  return (
    <div className="flex bg-gray-100 rounded-lg shadow-md">
      <div className="w-1/2 pr-4">
        <div className="max-w-3xl mx-auto p-10">
          <div className="space-y-0">
            <div className="text-2xl font-bold text-gray-900">TheGoodRobot Podcast - The EU AI Act</div>
            <div className="text-gray-700 space-y-4">
              <div>
                <b>Source:</b> <a href="https://open.spotify.com/episode/2Xox3pClB1zn53QOQ3GrSb" className="text-blue-600 underline">Spotify Podcast Link</a>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  This podcast emphasized the <b>complex relationship between innovation and ethical responsibility</b> in technology, challenging the common assumption that regulation stifles progress. I realized how prioritizing transparency and protecting rights can coexist with, rather than hinder innovation.
                </li>
                <li>
                  A key takeaway was the importance of <b>anticipating risks</b> in new technologies rather than only responding once issues arise. This approach reshapes my view of engineering ethics from reactive to proactive, encouraging me to foresee potential ethical implications of my work.
                </li>
                <li>
                  I found the discussion on <b>law enforcement exemptions</b> striking, as it exposes how certain systems can bypass accountability. This insight drives me to advocate for <b>ethical consistency</b> in my projects, ensuring that all applications, especially high-stakes ones, are transparent.
                </li>
                <li>
                  Having faced pressure to prioritize efficiency over transparency in past projects, I now see the value in <b>fostering a rights-centered perspective</b> in engineering practices.
                </li>
              </ul>
              <div>
                <b>Resource:</b> <a href="https://www.youtube.com/watch?v=9qS53He7SUY" className="text-blue-600 underline">YouTube Link</a>
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