import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <h1 className="bg-red-500">Hello World</h1>
      <Link href="/about">Go to about page</Link>
      <br />
      <Link href="/users">Go to users page</Link>
    </main>
  );
}
