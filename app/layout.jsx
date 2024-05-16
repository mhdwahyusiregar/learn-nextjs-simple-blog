import Navbar from '../components/Navbar';
import { roboto } from './fonts';
import './globals.css';

export const metadata = {
  title: {
    default: 'Situs Next.js',
    template: '%s | Situs Next.js',
  },
  description: 'Kumpula tutorial belajar Next.js dari dasar',
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
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
