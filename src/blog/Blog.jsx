import { Link, useSearchParams } from "react-router-dom";
import { allTags, posts } from "./posts";
import { formatDate } from "./formatDate";
import { useSeo } from "../seo/useSeo";
import { SITE_NAME } from "../seo/siteMeta";

const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const Blog = () => {
  // The filter lives in the URL so a tag view can be linked and shared. The
  // canonical stays on /blog, so the filtered views are not indexed separately.
  const [searchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");

  const visiblePosts = activeTag
    ? sortedPosts.filter((post) => post.tags?.includes(activeTag))
    : sortedPosts;

  useSeo({
    title: `Blog | ${SITE_NAME}`,
    description:
      "Write-ups from my home lab: Active Directory, Wazuh detection rules, Sysmon telemetry, osTicket, and the troubleshooting behind each of them.",
    path: "/blog",
  });

  return (
    <div className="text-slate-900">
      <h1 className="mb-4 text-4xl font-bold">Blog</h1>
      <p className="mb-8 max-w-2xl text-slate-600">
        Notes from the home lab, including the parts that did not work the first
        time.
      </p>

      <nav aria-label="Filter posts by tag" className="mb-10">
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link
              to="/blog"
              aria-current={activeTag ? undefined : "true"}
              className={`inline-block rounded-full px-3 py-1 text-sm transition ${
                activeTag
                  ? "bg-slate-100 text-slate-700 hover:text-teal-800"
                  : "bg-teal-800 font-medium text-white"
              }`}
            >
              All {sortedPosts.length}
            </Link>
          </li>
          {allTags.map(({ tag, count }) => (
            <li key={tag}>
              <Link
                to={`/blog?tag=${encodeURIComponent(tag)}`}
                aria-current={activeTag === tag ? "true" : undefined}
                className={`inline-block rounded-full px-3 py-1 text-sm transition ${
                  activeTag === tag
                    ? "bg-teal-800 font-medium text-white"
                    : "bg-slate-100 text-slate-700 hover:text-teal-800"
                }`}
              >
                {tag} {count}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {visiblePosts.length === 0 ? (
        <p className="text-slate-600">
          No posts tagged &ldquo;{activeTag}&rdquo;.{" "}
          <Link to="/blog" className="text-teal-800 hover:underline">
            Show all posts
          </Link>
          .
        </p>
      ) : (
        <ul className="space-y-8">
          {visiblePosts.map((post) => (
            <li
              key={post.slug}
              className="border-b border-stone-200/80 pb-8 last:border-b-0"
            >
              <h2 className="mb-2 text-xl font-semibold">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-teal-800 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mb-3 text-sm text-slate-600">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true"> · </span>
                {post.readingMinutes} min read
              </p>

              <p className="max-w-2xl text-slate-700">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;
