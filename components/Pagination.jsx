import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Pagination({ page, pageCount, href }) {
  return (
    <div className="flex gap-3 pb-3">
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronLeftIcon className="w-5 h-5" />
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </PaginationLink>
    </div>
  );
}

function PaginationLink({ children, href, enabled }) {
  if (!enabled) {
    return (
      <span className="px-3 py-1 text-gray-200 border border-gray-300 rounded cursor-not-allowed">
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
    >
      {children}
    </Link>
  );
}
