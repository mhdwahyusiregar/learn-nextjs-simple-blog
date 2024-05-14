import Link from 'next/link';
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Learn NextJS Fundamental</title>
      </head>
      <body className="flex flex-col px-4 py-4 min-h-screen">
        <header>
          <nav>
            <ul className="flex gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="py-4 grow">{children}</main>
        <footer className="border-t py-3 text-xs text-center">
          Copyright 2024
        </footer>
      </body>
    </html>
  );
}
