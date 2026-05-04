import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="ml-2 text-3xl font-bold text-white">JF</span>
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-6 text-white">
        <Link
          to="/"
          className="hover:text-cyan-400 transition"
        >
          Home
        </Link>

        <Link
          to="/blog"
          className="hover:text-cyan-400 transition"
        >
          Blog
        </Link>
      </div>

      {/* Social icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;