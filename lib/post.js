import { marked } from 'marked';
import { readdir } from 'node:fs/promises';
import qs from 'qs';

const BACKEND_URL = 'http://localhost:1337';

export async function getPost(slug) {
  const { data } = await fetchPosts({
    filters: { slug: { $eq: slug } },
    // untuk ngambil satu data
    fields: ['slug', 'title', 'description', 'publishedAt', 'body', 'author'],
    populate: {
      image: { fields: ['url'] },
    },
    pagination: { pageSize: 1, withCount: false },
  });
  const { attributes } = data[0];
  return {
    ...toPost({ attributes }),
    body: marked(attributes.body, { headerIds: false, mangle: false }),
  };
}

export async function getAllPosts() {
  const { data } = await fetchPosts({
    fields: ['slug', 'title', 'description', 'publishedAt', 'body', 'author'],
    populate: {
      image: { fields: ['url'] },
    },
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 3 },
  });

  return data.map(toPost);
}

export async function getSlugs() {
  const files = await readdir('./content/blog');
  return files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => filename.slice(0, -'.md'.length));
}

async function fetchPosts(parameters) {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(parameters, { encodeValuesOnly: true });
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

function toPost({ attributes }) {
  return {
    slug: attributes.slug,
    title: attributes.title,
    description: attributes.description,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    author: attributes.author,
    image: BACKEND_URL + attributes.image.data.attributes.url,
  };
}
