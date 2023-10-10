import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-slate-900">
      <div>
        <div>
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-[#7ab0ee] to-[#1588da] bg-clip-text text-transparent">
            maksims
          </h1>
          <h2 className="text-2xl text-[#c5c5c5] sm:text-2xl mt-2">
            Backend Developer
          </h2>
        </div>
        <div className="mt-5 sm:mt-4 flex">
          <Link href="/github" className="mr-3">
            <Image src="/github.svg" width={30} height={30} alt="Github" />
          </Link>
          <Link href="/twitter">
            <Image src="/twitter.svg" width={30} height={30} alt="Twitter" />
          </Link>
        </div>
      </div>
    </main>
  );
}
