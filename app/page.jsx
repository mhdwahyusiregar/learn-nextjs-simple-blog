import Heading from '@/components/Heading';
import Image from 'next/image';

export const metadata = {
  title: 'Situs Next.js',
  description: 'Kumpula tutorial belajar Next.js dari dasar',
};

export default function Home() {
  return (
    <>
      <Heading>Home Page</Heading>
      <Image
        src="/images/2.jpg"
        alt=""
        width={320}
        height={320}
        className="mb-2 rounded-none"
      />
      <p>Hello, Next.js</p>
    </>
  );
}
