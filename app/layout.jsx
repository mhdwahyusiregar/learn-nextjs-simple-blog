import Navbar from '../components/Navbar';
import { roboto } from './fonts';
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <title>Learn NextJS Fundamental</title>
      </head>
      <body className="flex flex-col min-h-screen px-4 py-4">
        <header>
          <Navbar />
        </header>
        <main className="py-4 grow">{children}</main>
        <footer className="py-3 text-xs text-center border-t">
          Copyright 2024
        </footer>
      </body>
    </html>
  );
}
