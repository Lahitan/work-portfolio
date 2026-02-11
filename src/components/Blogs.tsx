import { blogs } from '@/data/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogsPreview() {
  return (
    <section id="blogs" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-heading font-bold text-center mb-10 text-foreground">
        Writing on Frontend & Accessibility
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {blogs.slice(0, 2).map((post) => (
          <div
            key={post.id}
            className="p-6 border-gray-300 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
          >
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
                width={500}
                height={800}
              />
            )}
            <h3 className="text-2xl font-sans font-semibold mb-2 text-foreground">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              📅 {post.date} • ⏱ {post.readTime}
            </p>
            <p className="text-foreground/80 font-sans mb-4">{post.excerpt}</p>
            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E85C5C] font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/blogs"
          className="px-6 py-3 rounded-xl bg-[#E85C5C] text-white font-sans font-medium shadow-md hover:shadow-lg transition"
        >
          See More Blogs
        </Link>
      </div>
    </section>
  );
}
