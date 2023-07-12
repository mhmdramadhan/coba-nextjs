import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/about">Go to about page</Link>
      <br />
      <Link href="/users">Go to users page</Link>
    </main>
  );
}
