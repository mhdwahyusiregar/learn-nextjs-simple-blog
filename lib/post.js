import matter from 'gray-matter';
import { marked } from 'marked';
import { readdir, readFile } from 'node:fs/promises';

export async function getPost(slug) {
  const text = await readFile(`./content/blog/${slug}.md`, 'utf-8');
  const {
    content,
    data: { title, description, image, date, author },
  } = matter(text);
  const body = marked(content);
  return { slug, title, description, date, body, author, image };
}

export async function getAllPosts() {
  const files = await readdir('./content/blog');
  const slugs = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => filename.slice(0, -'.md'.length));

  const posts = [];

  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push(post);
  }

  return posts;
}
