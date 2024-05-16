'use client';
// untk mengubah menjadi client side
export default function ShareLinkButton() {
  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
  }
  return (
    <button
      onClick={handleClick}
      className="px-2 py-1 text-sm text-gray-500 border rounded hover:bg-gray-200 hover:text-gray-700"
    >
      Coppy link
    </button>
  );
}
