import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts } from "./posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-white text-center mt-20">
        <p>Post not found</p>
        <Link
          to="/blog"
          className="mt-6 inline-block border-b border-neutral-600 hover:text-cyan-400 transition"
        >
          Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center px-4 py-12">
      <article className="prose prose-invert max-w-3xl w-full">

        <Link
          to="/blog"
          className="no-underline text-sm text-neutral-400 hover:text-cyan-400 transition"
        >
          &larr; Back to all posts
        </Link>

        {/* Title */}
        <h1 className="mb-2 mt-6">{post.title}</h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 mb-6">
          <span>{post.date}</span>

          {/* Tags */}
          {post.tags && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <hr className="border-neutral-800 mb-8" />

        {/* Content */}
        <div className="leading-relaxed">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

      </article>
    </div>
  );
};

export default BlogPost;