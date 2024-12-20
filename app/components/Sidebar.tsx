"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-80 bg-gray-300 p-4 pt-20">
      <h2 className="text-xl font-semibold mb-4">
        <Link href="/">Rashid Bawah</Link>
      </h2>
      <ul>
        <li className={`${pathname === '/' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/" className={`${pathname === '/' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
            1. Home
          </Link>
        </li>
        <li className={`${pathname === '/entry2' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/entry2" className={`${pathname === '/entry2' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
            2. Introduction
          </Link>
        </li>
        <li className={`${pathname === '/entry3' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/entry3" className={`${pathname === '/entry3' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
            3. Engineering Ethics and Responsibility
          </Link>
        </li>
        <li className={`${pathname === '/entry4' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/entry4" className={`${pathname === '/entry4' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
            4. Most Surprising thing I learned
          </Link>
        </li>
        <li className={`${pathname === '/entry5' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/entry5" className={`${pathname === '/entry5' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
            5. The EU AI act
          </Link>
        </li>
        <li className={`${pathname === '/entry6' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/entry6" className={`${pathname === '/entry6' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
            6. Buddhism and AI Ethics
          </Link>
        </li>
        <li className={`${pathname === '/entry7' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/entry7" className={`${pathname === '/entry7' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
            7. Ethical AI Regulation in Africa
          </Link>
        </li>
        <li className={`${pathname === '/entry8' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/entry8" className={`${pathname === '/entry8' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
          8. Ghana's First Female Engineer
          </Link>
        </li>
        <li className={`${pathname === '/entry9' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/entry9" className={`${pathname === '/entry9' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
            9. Team Work
          </Link>
        </li>
        <li className={`${pathname === '/entry10' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/entry10" className={`${pathname === '/entry10' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
            10. Looking Back
          </Link>
        </li>
        <li className={`${pathname === '/entry11' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/entry11" className={`${pathname === '/entry11' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
            11. Looking Back
          </Link>
        </li>
        <li className={`${pathname === '/entry12' ? 'bg-gray-400' : ''} mb-2`}>
          <Link href="/entry12" className={`${pathname === '/entry12' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:underline capitalize`}>
            12. My Hobby
          </Link>
        </li>
      </ul>
    </div>
  );
}
