import Heading from '@/components/Heading';
import ShareLinkButton from '@/components/ShareLinkButton';
import { getPost, getSlugs } from '@/lib/post';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 30;

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params: { slug } }) {
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }
  return (
    <>
      <Heading>{post.title}</Heading>
      <div className="flex items-baseline gap-3">
        <p className="pb-2 text-sm italic">
          {post.date} - {post.author}
        </p>
        <ShareLinkButton />
      </div>
      <Image
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
