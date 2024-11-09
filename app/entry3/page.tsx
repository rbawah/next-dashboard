// "use client"
// import React from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// export default function Entry3() {
//   const router = useRouter();

//   const handlePrev = () => {
//     router.push('/entry2');
//   };

//   const handleNext = () => {
//     router.push('/entry4');
//   };

//   return (
//     <div className="flex flex-col bg-gray-100 rounded-lg shadow-md">
//       <div className="flex-grow flex">
//         <div className="w-1/2 pr-4">
//           <div className="max-w-3xl mx-auto p-10">
//             <div className="space-y-0">
//               <h1 className="text-4xl font-semibold text-gray-900">Engineering Ethics and Responsibility</h1>
//               <p className="text-gray-700">
//                 I learned that ethics and professional responsibility in engineering are about balancing
//                 <b> technical proficiency</b> with <b>societal impact</b>. The course materials emphasize that engineers
//                 must not only ensure the <b>safety</b> and <b>functionality</b> of their designs but also consider their
//                 <b> long-term effects</b> on the environment, and <b>individual well-being</b>. Ethical frameworks such as
//                 <b> deontology</b>, <b>consequentialism</b>, and <b>virtue ethics</b> are critical in guiding decision-making,
//                 particularly in complex situations.
//               </p>

//               <div className="space-y-0 pt-8">
//                 <h2 className="text-2xl font-semibold text-gray-800">Takeaway</h2>
//                 <p className="text-gray-700">
//                   My biggest takeaway is that <b>ethical engineering</b> requires an understanding of both <b>technical
//                   details</b> and <b>broader implications</b>. Going into my career, I will integrate these learnings by
//                   ensuring that every step I take considers the <b>immediate technical outcome</b> and its <b>long-term
//                   effects</b> on people and the planet. I will advocate for <b>continuous learning</b> to stay updated on
//                   ethical standards and best practices.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-1/2">
//           <Image
//             src="/portfolio/entry3.jpeg"
//             alt="Engineering Ethics Image"
//             width={800}
//             height={400}
//           />
//           <p>Diagram from 'goseeko' course on Professional Ethics and Moral Values</p>
//           <p>From: <a 
//             href="https://www.goseeko.com/reader/question-bank/adikavi-nannaya-university-andhra-pradesh/engineering/electronics-and-communication-engineering/first-year/sem-1/professional-ethics-human-values-1/unit-2-engineering-ethics-3"
//             className='text-blue-500'>goseeko.com</a></p>
//         </div>
//       </div>
//       <div className="flex justify-between items-center p-4">
//         <button 
//           onClick={handlePrev} 
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow">
//           Prev
//         </button>
//         <button 
//           onClick={handleNext} 
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Entry3() {
  const router = useRouter();

  const handlePrev = () => {
    router.push('/entry2');
  };

  const handleNext = () => {
    router.push('/entry4');
  };

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-md">
      <div className="flex-grow flex">
        <div className="w-1/2 pr-4">
          <div className="max-w-3xl mx-auto p-10">
            <div className="space-y-0">
              <h1 className="text-4xl font-semibold text-gray-900">Engineering Ethics and Responsibility</h1>
              <p className="text-gray-700">
                The course reveals that <b>engineering ethics extends far beyond following codes</b> or preventing disasters. My biggest takeaway is understanding that engineers are <b>"world builders"</b> whose decisions have profound impacts on society. The course demonstrates how engineering is never truly neutral or objective - our work either perpetuates or challenges existing systems.
              </p>

              <div className="space-y-0 pt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Key lessons for my career:</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Practice <b>"Two-Eyed Seeing"</b> - valuing both Indigenous and Western knowledge systems</li>
                  <li>Consider both <b>micro and macro ethics</b> in decision-making</li>
                  <li>Look beyond technical solutions to understand <b>systemic impacts</b></li>
                  <li>Question <b>who benefits and who is harmed</b> by design choices</li>
                  <li>Recognize that <b>sustainability</b> requires balancing environmental, social, and economic factors</li>
                  <li>Stay alert to <b>ethical boundaries</b> and competency limits</li>
                  <li>Remember that <b>safety and public welfare</b> must always come before profit</li>
                </ul>
                <p className="text-gray-700 pt-4">
                  I will integrate these by actively practicing <b>reflective and critical thinking</b> throughout my career.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <Image
            src="/portfolio/entry3.jpeg"
            alt="Engineering Ethics Image"
            width={800}
            height={400}
          />
          <p>Diagram from 'goseeko' course on Professional Ethics and Moral Values</p>
          <p>From: <a 
            href="https://www.goseeko.com/reader/question-bank/adikavi-nannaya-university-andhra-pradesh/engineering/electronics-and-communication-engineering/first-year/sem-1/professional-ethics-human-values-1/unit-2-engineering-ethics-3"
            className='text-blue-500'>goseeko.com</a></p>
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
