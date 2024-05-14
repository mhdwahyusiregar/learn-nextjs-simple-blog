import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Learn NextJS Fundamental</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
