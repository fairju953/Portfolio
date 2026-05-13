import { Link } from "react-router-dom";
import { posts } from "./posts";

const Blog = () => {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <ul className="space-y-6">
        {sortedPosts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="text-cyan-400 hover:underline text-xl"
            >
              {post.title}
            </Link>
            <p className="text-sm text-neutral-400">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;