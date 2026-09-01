import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center text-white">
      <p className="text-6xl font-thin tracking-tight lg:text-8xl">404</p>
      <h1 className="mt-6 text-2xl font-semibold">Page not found</h1>
      <p className="mt-4 max-w-md text-neutral-400">
        That page does not exist or may have been moved.
      </p>
      <div className="mt-8 flex gap-6">
        <Link to="/" className="border-b border-neutral-600 hover:text-cyan-400 transition">
          Go home
        </Link>
        <Link to="/blog" className="border-b border-neutral-600 hover:text-cyan-400 transition">
          Read the blog
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
