"use client"
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handlePrev = () => {
    router.push('/entry10');
  };

  const handleNext = () => {
    router.push('/entry2');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-0">
      <h1 className="text-3xl font-semibold pb-8">Welcome to My Portfolio Website</h1>
      <div className="w-36 h-44 rounded-full overflow-hidden">
        <img src="/portfolio/avatar.png" alt="Rashid Bawah" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-xl pt-8">Rashid Bawah</h1>
      <h1 className="text-2xl pt-8 pb-8">ENGG 687 - Ethics, Law, and the Engineering Profession</h1>
      <button 
          onClick={handleNext} 
          className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded shadow">
          Continue
        </button>
    </div>
  );
}
