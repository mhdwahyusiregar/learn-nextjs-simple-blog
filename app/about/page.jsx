import Heading from '../../components/Heading';

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <Heading>about page</Heading>
      <image
        src="/images/5.jpg"
        alt=""
        width={320}
        height={320}
        className="mb-2 rounded-none"
      />
      <p>halaman dari about</p>
    </>
  );
}
