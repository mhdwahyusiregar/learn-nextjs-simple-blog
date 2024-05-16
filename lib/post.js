import matter from 'gray-matter';
import { marked } from 'marked';
import { readFile } from 'node:fs/promises';

export async function getPost(slug) {
  const text = await readFile(`./content/blog/${slug}.md`, 'utf-8');
  const {
    content,
    data: { title, image, date, author },
  } = matter(text);
  const body = marked(content);
  return { title, date, body, author, image };
}
