import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div>
        <div>
          <h1 className="font-bold text-4xl sm:text-5xl">
            Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]">Maksims</span>.
          </h1>
          <h2 className="text-2xl sm:text-2xl mt-2 sm:mt-3">Backend Developer</h2>
        </div>
        <div className="mt-5 sm:mt-6 flex">
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
