// import Image from 'next/image';

// export default function Entry2() {
//   return (
//     <div className="flex bg-gray-100 rounded-lg shadow-md">
//       <div className="w-1/2 pr-4">
//         <div className="max-w-3xl mx-auto p-10">
//           <div className="space-y-0">

//             <h1 className="text-2xl font-bold text-gray-900">Introduction</h1>
//             <p className="text-lg"><strong>Name:</strong> Rashid Bawah</p>

//             <div className="space-y-0">
//               <h2 className="text-xl font-semibold text-gray-800">Career Goals</h2>
//               <p className="text-gray-700">
//                 My main career goal is to continually innovate in the fields of <b>artificial intelligence</b>,
//                 focusing on developing impactful solutions that integrate cutting-edge technologies.
//               </p>
//             </div>

//             <div className="space-y-0">
//               <h2 className="text-xl font-semibold text-gray-800">Strengths</h2>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   As an engineer, my work is mostly done in collaboration with others. I tend to work well
//                   with project team members to achieve desired results.
//                 </li>
//                 <li>
//                   My day-to-day tasks require a great deal of focus. For an introvert like me, the ability
//                   to focus comes effortlessly.
//                 </li>
//               </ul>
//             </div>

//             <div className="space-y-0">
//               <h2 className="text-xl font-semibold text-gray-800">Experiences</h2>
//               <p className="text-gray-700">
//                 My professional life started off in Chemical Engineering where I worked in hydrocarbon 
//                 conversion research and gradually transitioned to Computer Engineering where I now 
//                 specialize in artificial intelligence and machine learning.
//               </p>
//             </div>

//             <div className="space-y-0">
//               <h2 className="text-xl font-semibold text-gray-800">Challenges</h2>
//               <p className="text-gray-700">
//                 I plan my days around professional and personal goals. My main challenge lies in balancing
//                 the various tasks associated with my personal and professional goals.
//               </p>
//             </div>

//             <div className="space-y-0">
//               <h2 className="text-xl font-semibold text-gray-800">Successes</h2>
//               <p className="text-gray-700">
//                 I am most proud of my achievements such as obtaining a research-based graduate degree in
//                 Chemical Engineering and successfully changing my area of specialization to Computer
//                 Engineering.
//             </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-1/2 flex flex-col items-center justify-center">
//         <Image
//           src="/portfolio/hike_photo.jpg"
//           alt="Entry0 Image"
//           width={400}
//           height={400}
//           // className='items-center justify-center'
//         />
//         <p>Me on a hike at Kananaskis Country, AB.</p>
//         <p>Taken on Oct 04, 2024.</p>
//       </div>
//     </div>
//   );
// }


"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Entry2() {
  const router = useRouter();

  const handlePrev = () => {
    router.push('/');
  };

  const handleNext = () => {
    router.push('/entry3');
  };

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-md">
      <div className="flex-grow flex">
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

        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/portfolio/hike_photo.jpg"
            alt="Entry0 Image"
            width={400}
            height={400}
          />
          <p>Me on a hike at Kananaskis Country, AB.</p>
          <p>Taken on Oct 04, 2024.</p>
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
