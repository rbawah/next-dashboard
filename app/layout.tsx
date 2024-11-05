// import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
// import { Metadata } from 'next';
 
// export const metadata: Metadata = {
//   title: {
//     template: '%s | Acme Dashboard',
//     default: 'Acme Dashboard',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }

import '@/app/ui/global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from './components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Portfolio - ENGG 687',
  description: 'Personal Portfolio',
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="flex min-h-screen">
//           <Sidebar />
//           <div className='pt-10'>
//             <main className="flex-1 p-8">{children}</main>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-8 min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
