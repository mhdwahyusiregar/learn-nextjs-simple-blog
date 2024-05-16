import Heading from '@/components/Heading';

export default function Home() {
  return (
    <>
      <Heading>Home Page</Heading>
      <img
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
