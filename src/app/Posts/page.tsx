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
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ul className="space-y-6">
        <li>
          <h2 className="text-xl font-semibold">Test Posts</h2>
          <p className="text-sm text-gray-500">2023-10-01</p>
          <p className="text-sm text-gray-700">I write about various topics including technology, programming, and personal development.</p>
        </li>
        {/* <li key="test-post" className="group border-b pb-4">
          <Link href={`/posts/${post.slug}`} className="block hover:bg-gray-50 hover:scale-[1.02] rounded transition p-2 -m-2">
            <h2 className="text-xl font-semibold group-hover:text-blue-600">{post.title}</h2>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-sm text-gray-700 mt-1">{post.summary}</p>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
