import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), 'content', 'projects', `${params.slug}.md`);
  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const htmlString = processedContent.toString();

  return (
    <div className="prose prose-lg max-w-4xl mx-auto p-6">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'Projects'));
  const slugs = files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
  return slugs;
}
