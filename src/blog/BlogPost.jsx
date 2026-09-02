import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts } from "./posts";
import { formatDate } from "./formatDate";
import { useSeo } from "../seo/useSeo";
import { toExcerpt } from "../seo/excerpt";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../seo/siteMeta";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  const description = post ? toExcerpt(post.content) : "";
  const path = `/blog/${slug}`;

  useSeo({
    title: post ? `${post.title} | ${SITE_NAME}` : `Post not found | ${SITE_NAME}`,
    description: post ? description : "That post does not exist.",
    path,
    type: "article",
    index: Boolean(post),
    jsonLd: post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description,
          datePublished: post.date,
          dateModified: post.date,
          keywords: post.tags?.join(", "),
          image: OG_IMAGE,
          author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
          mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
        }
      : null,
  });

  if (!post) {
    return (
      <div className="text-white text-center mt-20">
        <p>Post not found</p>
        <Link
          to="/blog"
          className="mt-6 inline-block border-b border-neutral-400 hover:text-cyan-400 transition"
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
          <span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true"> · </span>
            {post.readingMinutes} min read
          </span>

          {/* Tags */}
          {post.tags && (
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {post.tags.map((tag) => (
                <li key={tag} className="p-0 m-0">
                  <Link
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="no-underline px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300 transition hover:text-cyan-400"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
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