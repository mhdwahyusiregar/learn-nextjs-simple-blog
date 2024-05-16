export default function BlogLayout({ children }) {
  return (
    <div className="flex">
      <div>[sidebar]</div>
      <div className="px-4">{children}</div>
    </div>
  );
}
