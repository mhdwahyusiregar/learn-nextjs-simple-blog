import Heading from '@/components/Heading';
import Image from 'next/image';

export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <>
      <Heading>contact page</Heading>
      <Image
        src="/images/1.jpg"
        alt=""
        width={320}
        height={320}
        className="mb-2 rounded-none"
      />
      <p>halaman dari contact</p>
    </>
  );
}
