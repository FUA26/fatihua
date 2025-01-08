import { allBlogs, Blog } from "@/.contentlayer/generated";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

function PostCard(post: Blog) {
  console.log(post.path)
  return (
    <div className='mb-8'>
      <h2 className='mb-1 text-xl'>
        <Link href={post.path} className='text-blue-700 hover:text-blue-900'>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <p>{post.summary}</p>
    </div>
  );
}

export default function Home() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ThemeToggle />
        {posts.map((post) => (
          <PostCard {...post} key={post._id} />
        ))}
      </main>
    </div>
  );
}
