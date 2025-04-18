import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
};

export default function PostsPage() {
  const postDir = path.join(process.cwd(), 'content', 'posts');
  const files = fs.readdirSync(postDir);

  const posts: PostMeta[] = files.map((file) => {
    const content = fs.readFileSync(path.join(postDir, file), 'utf-8');
    const { data } = matter(content);

    return {
      slug: file.replace(/\.md$/, ''),
      title: data.title,
      summary: data.summary,
      date: data.date,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="group border-b pb-4">
            <Link href={`/posts/${post.slug}`} className="block hover:bg-gray-50 hover:scale-[1.02] rounded transition p-2 -m-2">
              <h2 className="text-xl font-semibold group-hover:text-blue-600">{post.title}</h2>
              <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-sm text-gray-700 mt-1">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
