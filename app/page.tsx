import Link from "next/link";
import external_link from "./external-link.svg"

export default function Home() {
  const calculateAge = () => {
    const birthday = new Date(2009, 2, 30); // March is represented by index 2
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <main className="p-4 sm:p-6 md:p-8">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-4xl text-center">hey, i'm maksims.</h1>
      <p className="mt-2 sm:mt-4 md:mt-4 text-[#b6b6b6] max-w-2xl mx-auto">
        I'm a {calculateAge()} year old backend engineer based in the United Kingdom. I try to create solutions to real-world problems using a number of programming languages and
        frameworks including
        <a href="https://www.python.org/" className="text-blue-500 hover:text-blue-700" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"> Python</a>,
        <a href="https://golang.org/" className="text-blue-500 hover:text-blue-700" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"> Go</a>,
        <a href="https://www.typescriptlang.org/" className="text-blue-500 hover:text-blue-700" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"> TypeScript</a>,
        and libraries like
        <a href="https://www.djangoproject.com/" className="text-blue-500 hover:text-blue-700" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"> Django</a>,
        <a href="https://gofiber.io/" className="text-blue-500 hover:text-blue-700" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"> Fiber</a>,
        <a href="https://nextjs.org/" className="text-blue-500 hover:text-blue-700" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"> Next.js</a>.
      </p>

      <div className="mt-4 mr-2 text-[#b6b6b6]">
        <h3>
          <Link className="mr-4" href="/github">Github</Link>
          <Link href="/twitter">Twitter</Link>
        </h3>
      </div>
    </main>
  );
}
