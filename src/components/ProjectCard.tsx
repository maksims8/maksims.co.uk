import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/3 p-4 border border-[#3b3b3b] rounded-lg transition bg-neutral-900">
        <Link href={link}>
            <h1 className="text-lg font-semibold mb-1 underline flex items-center justify-center mr-3">
              <Image className="mr-2 mt-1" src={"/external.svg"} alt={""} height={22} width={22}/>
              {title}
            </h1>
        </Link>
        <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
