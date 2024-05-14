import Link from 'next/link';
export default function BlogPage() {
  return (
    <>
      <h1>Blog</h1>
      <p>List of post</p>
      <ul>
        <li>
          <Link href="/blog/belajar-nextjs">belajar next.js</Link>
        </li>
        <li>
          <Link href="/blog/latihan-route-nextjs">latihan route nextjs</Link>
        </li>
      </ul>
    </>
  );
}
