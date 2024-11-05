import Image from 'next/image';

export default function Entry2() {
  return (
    <div className="flex bg-gray-100 rounded-lg shadow-md">
      <div className="w-1/2 pr-4">
        <div className="max-w-3xl mx-auto p-10">
          <div className="space-y-0">

            <h1 className="text-2xl font-bold text-gray-900">Introduction</h1>
            <p className="text-lg"><strong>Name:</strong> Rashid Bawah</p>

            <div className="space-y-0">
              <h2 className="text-xl font-semibold text-gray-800">Career Goals</h2>
              <p className="text-gray-700">
                My main career goal is to continually innovate in the fields of <b>artificial intelligence</b>,
                focusing on developing impactful solutions that integrate cutting-edge technologies.
              </p>
            </div>

            <div className="space-y-0">
              <h2 className="text-xl font-semibold text-gray-800">Strengths</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  As an engineer, my work is mostly done in collaboration with others. I tend to work well
                  with project team members to achieve desired results.
                </li>
                <li>
                  My day-to-day tasks require a great deal of focus. For an introvert like me, the ability
                  to focus comes effortlessly.
                </li>
              </ul>
            </div>

            <div className="space-y-0">
              <h2 className="text-xl font-semibold text-gray-800">Experiences</h2>
              <p className="text-gray-700">
                My professional life started off in Chemical Engineering where I worked in hydrocarbon 
                conversion research and gradually transitioned to Computer Engineering where I now 
                specialize in artificial intelligence and machine learning.
              </p>
            </div>

            <div className="space-y-0">
              <h2 className="text-xl font-semibold text-gray-800">Challenges</h2>
              <p className="text-gray-700">
                I plan my days around professional and personal goals. My main challenge lies in balancing
                the various tasks associated with my personal and professional goals.
              </p>
            </div>

            <div className="space-y-0">
              <h2 className="text-xl font-semibold text-gray-800">Successes</h2>
              <p className="text-gray-700">
                I am most proud of my achievements such as obtaining a research-based graduate degree in
                Chemical Engineering and successfully changing my area of specialization to Computer
                Engineering.
            </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <Image
          src="/portfolio/BMS-W700.webp"
          alt="Entry0 Image"
          width={800}
          height={400}
        />
      </div>
    </div>
  );
}
