import Heading from '@/components/Heading';
import { getPost } from '@/lib/post';

export default async function PostPage() {
  const post = await getPost('belajar-nextjs');

  return (
    <>
      <Heading>{post.title}</Heading>
      <p className="pb-2 text-sm italic">
        {post.date} - {post.author}
      </p>
      <img
        src={post.image}
        alt=""
        width={320}
        height={320}
        className="mb-2 rounded-none"
      />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
