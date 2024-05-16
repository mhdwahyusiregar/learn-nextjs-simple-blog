import Heading from '@/components/Heading';
import PostCard from './../../components/PostCard';
import { getAllPosts } from '@/lib/post';

export const metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="mb-3 text-2xl">List of post</h2>

      {posts.map((post) => (
        <PostCard
          title={post.title}
          href={`/blog/${post.slug}`}
          image={post.image}
          description={post.description}
          date={post.date}
          author={post.author}
        />
      ))}
    </>
  );
}
