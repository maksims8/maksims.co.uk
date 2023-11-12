import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center mt-12 mx-auto max-w-4xl">
      <h1 className="text-[#cccccc]">/ˈmæksɪms/ - latvian origin</h1>
      

      <section className="mt-6">
        <h1 className="text-xl font-semibold mb-6">projects</h1>

        <div className="flex flex-wrap justify-center gap-4">
          <ProjectCard
            title="maksims.co.uk"
            description="my personal website which is the one you're browsing now."
            link="https://github.com/m2ksims/maksims.co.uk"
          />
        </div>
      </section>

      <footer className="border-t border-[#3b3b3b] mb-2 fixed bottom-0 w-1/2 flex justify-between items-center p-4">
        <span className="text-[#cccccc]">maksims k.</span>

        <div className="flex space-x-2">
          <Link href={"https://github.com/m2ksims"}>
            <Image src={"/github.svg"} alt={""} width={20} height={20}/>
          </Link>

          <Link href={"mailto:maksims.kadobnovs@gmail.com?subject = Feedback&body = Message"}>
            <Image src={"/email.png"} alt={""} width={20} height={20}/>
          </Link>
        </div>
      </footer>

    </main>
  );
}
