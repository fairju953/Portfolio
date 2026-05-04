import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { posts } from "./posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-white text-center mt-20">Post not found</p>;
  }

  return (
    <div className="flex justify-center px-4 py-12">
      <article className="prose prose-invert max-w-3xl w-full">
        
        {/* Title */}
        <h1 className="mb-2">{post.title}</h1>

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
        <ReactMarkdown className="leading-relaxed">
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPost;