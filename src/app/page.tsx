import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="text-center mt-12 mx-auto max-w-4xl">
      <h1 className="text-[#cccccc]">/ˈmæksɪms/ - latvian origin</h1>

      <section className="mt-6">
        <h1 className="text-xl font-semibold mb-6">Projects</h1>

        <div className="flex flex-wrap justify-center gap-4">
          <ProjectCard
            title="maksims.co.uk"
            description="My personal website which is the one you're browsing now."
            link="https://github.com/m2ksims/maksims.co.uk"
          />
        </div>
      </section>


    </main>
  );
}
