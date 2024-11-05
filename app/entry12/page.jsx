import React from 'react';
import Image from 'next/image';

export default function Entry12() {
  return (
    <div className="flex bg-gray-100 rounded-lg shadow-md">
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

      <div className="w-1/2">
        <Image
          src="/portfolio/BMS-W700.webp"
          alt="Entry12 Image"
          width={800}
          height={400}
        />
      </div>
    </div>
  );
}