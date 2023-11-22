import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center mt-12 mx-auto max-w-4xl">
      <section className="flex justify-center align-middle">
        <Image className="rounded-full" src={"/bateman.jpg"} alt={""} height={75} width={75}/>
      </section>

      <h1 className="text-[#cccccc] mt-5">maksims (/ˈmæksɪms/)</h1>
      <h2 className="text-[#cccccc]">backend developer</h2>
      <h3 className="text-[#cccccc]">based in the united kingdom</h3>

      <section className="mt-6">
        <h1 className="text-2xl font-semibold mb-6">projects</h1>

        <div className="flex flex-wrap justify-center gap-4">
          <ProjectCard
            title="monkeytype.py"
            description="an api wrapper built around the monkeytype api."
            link="https://github.com/m2ksims/monkeytype.py"
          />
          <ProjectCard
            title="maksims.co.uk"
            description="my personal website which is the one you're browsing now."
            link="https://github.com/m2ksims/maksims.co.uk"
          />
        </div>
      </section>

      <footer className="border-t border-[#3b3b3b] mb-1 fixed bottom-0 sm:w-1/2 lg:1/2 w-full flex justify-between items-center p-4">
        <span className="text-[#cccccc]">maksims k.</span>

        <div className="flex space-x-2">
          <Link href={"https://github.com/m2ksims"}>
            <Image src={"/github.svg"} alt={""} width={20} height={20}/>
          </Link>
        </div>
      </footer>

    </main>
  );
}
