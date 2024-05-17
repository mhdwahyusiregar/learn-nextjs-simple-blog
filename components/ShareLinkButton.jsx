'use client';
import { useState } from 'react';
import { LinkIcon } from '@heroicons/react/24/solid';

// untk mengubah menjadi client side
export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => setCopied(false), 1500);
    setCopied(true);
  }
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 px-2 py-1 text-sm text-gray-500 border rounded hover:bg-gray-200 hover:text-gray-700"
    >
      <LinkIcon className="w-4 h-4" />
      {copied ? 'Link Copied!' : 'Share link'}
    </button>
  );
}
