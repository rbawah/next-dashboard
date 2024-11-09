// import React from 'react';
// import Image from 'next/image';

// export default function Entry4() {
//   return (
//     <div className="flex bg-gray-100 rounded-lg shadow-md">
//       <div className="w-1/2 pr-4">
//         <div className="max-w-3xl mx-auto p-10">
//           <div className="space-y-0">
//             <div className="text-2xl font-bold text-gray-900">Surprising or Most Interesting</div>
//             <div className="text-gray-700 space-y-4">
//               <div>
//                 The integration of <b>Indigenous ethics</b> and <b>Two-Eyed Seeing</b> into engineering practice was intriguing, as it promotes the blending of traditional knowledge with modern science, emphasizing inclusive approaches to solving problems.
//               </div>
//               <div>
//                 The concept of <b>design justice</b> stood out, especially the idea that design can either liberate or oppress based on who controls the narrative, which expanded my understanding of equity in engineering.
//               </div>
//             </div>

//             <div className="space-y-0 pt-4">
//               <div className="text-xl font-semibold text-gray-800">Extended Learnings from Class</div>
//               <div className="text-gray-700">
//                 I explored the concept of <b>ecological engineering</b> further, particularly in the context of circular economies and sustainability. Reading about how engineers can implement solutions that mimic ecological cycles deepened my understanding of sustainable development.
//               </div>
//             </div>

//             <div className="space-y-0 pt-4">
//               <div className="text-xl font-semibold text-gray-800">Challenges or Disagreements</div>
//               <div className="text-gray-700">
//                 The topic of <b>planned obsolescence</b> challenged my thinking, as it presented a moral dilemma between driving economic growth and contributing to waste and environmental degradation. It made me rethink the role of engineers in perpetuating unsustainable practices.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-1/2 flex flex-col items-center justify-center">
//         <Image
//           src="/portfolio/entry4.png"
//           alt="Entry2 Image"
//           width={600}
//           height={400}
//         />
//         <p>Diagram by <a href='https://ipcaknowledgebasket.ca/enacting-and-operationalizing-ethical-space-and-two-eyed-seeing-in-indigenous-protected-and-conserved-areas-and-crown-protected-and-conserved-areas/'
//         className='text-blue-500'
//         >
//           IPCA Knowledge Basket 
//         </a> <span></span>
//         explaining the Ethical Space and Two-Eyed Seeing in Indigenous culture.
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Entry4() {
  const router = useRouter();

  const handlePrev = () => {
    router.push('/entry3');
  };

  const handleNext = () => {
    router.push('/entry5');
  };

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-md">
      <div className="flex-grow flex">
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

              <div className="space-y-0 pt-4">
                <div className="text-xl font-semibold text-gray-800">Extended Learnings from Class</div>
                <div className="text-gray-700">
                  I explored the concept of <b>ecological engineering</b> further, particularly in the context of circular economies and sustainability. Reading about how engineers can implement solutions that mimic ecological cycles deepened my understanding of sustainable development.
                </div>
              </div>

              <div className="space-y-0 pt-4">
                <div className="text-xl font-semibold text-gray-800">Challenges or Disagreements</div>
                <div className="text-gray-700">
                  The topic of <b>planned obsolescence</b> challenged my thinking, as it presented a moral dilemma between driving economic growth and contributing to waste and environmental degradation. It made me rethink the role of engineers in perpetuating unsustainable practices.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/portfolio/entry4.png"
            alt="Entry2 Image"
            width={500}
            height={400}
          />
          <p>Diagram by <a href='https://ipcaknowledgebasket.ca/enacting-and-operationalizing-ethical-space-and-two-eyed-seeing-in-indigenous-protected-and-conserved-areas-and-crown-protected-and-conserved-areas/'
          className='text-blue-500'>
            IPCA Knowledge Basket 
          </a> explaining the Ethical Space and Two-Eyed Seeing in Indigenous culture.
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
