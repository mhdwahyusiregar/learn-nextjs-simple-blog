import Link from 'next/link';

export default function PostCard({
  title,
  href,
  description,
  date,
  author,
  image,
}) {
  return (
    <div className="flex flex-wrap">
      <div className="w-full mb-4 shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
        <div className="relative mb-6 overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg">
          <img src={image} className="w-full" alt="" />
          <Link href={href}>
            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"></div>
          </Link>
        </div>
      </div>

      <div className="w-full px-3 mb-6 mr-auto shrink-0 grow-0 basis-auto md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 className="text-lg font-bold">{title}</h5>
        <p className="mb-3 text-gray-800">
          <small>
            Published <u>{date} </u> by {''}
            <a href="#!">{author}</a>
          </small>
        </p>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
}
