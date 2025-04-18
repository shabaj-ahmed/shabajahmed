import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const projectDir = path.join(process.cwd(), 'content', 'projects');
  const files = fs.readdirSync(projectDir);

  const projects = files.map((file) => {
    const content = fs.readFileSync(path.join(projectDir, file), 'utf-8');
    const { data } = matter(content);

    return {
      slug: file.replace(/\.md$/, ''),
      title: data.title,
      summary: data.summary,
      date: data.date,
      image: data.image || '/images/profile.png', // fallback image
    };
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group border rounded-lg overflow-hidden transform transition duration-200 hover:shadow-2xl hover:scale-[1.02]"
            >
            <div className="aspect-[3/2] w-full relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
              <p className="text-sm text-gray-500 mb-1">{project.date}</p>
              <p className="text-sm text-gray-700">{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
