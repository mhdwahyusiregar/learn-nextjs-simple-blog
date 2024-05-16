import Heading from '@/components/Heading';
import PostCard from './../../components/PostCard';
export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="mb-3 text-2xl">List of post</h2>

      <PostCard
        title="Belajar Next.js"
        href="/blog/belajar-nextjs"
        image="/images/7.jpg"
        description="Belajar nextjs itu mueeedahhh"
        date="15.05.2024"
        author="admin"
      />
      <PostCard
        title="Belajar Next.js v2"
        href="/blog/belajar-nextjs"
        image="/images/6.jpg"
        description="Belajar nextjs v2"
        date="15.05.2024"
        author="admin"
      />
    </>
  );
}
