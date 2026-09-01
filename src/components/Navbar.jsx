import { NavLink } from "react-router-dom";
import { SOCIAL_LINKS } from "../constants/socials";

const navLinkClass = ({ isActive }) =>
  `transition hover:text-cyan-400 ${isActive ? "text-cyan-400" : ""}`;

const Navbar = () => {
  return (
    <header>
      <nav
        aria-label="Primary"
        className="mb-20 flex items-center justify-between py-6"
      >
        <div className="flex flex-shrink-0 items-center">
          <span className="ml-2 text-3xl font-bold text-white">JF</span>
        </div>

        {/* NavLink applies aria-current="page" on the active link itself. */}
        <div className="flex items-center gap-6 text-white">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>
        </div>

        {/* Social icons */}
        <ul className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                className="inline-block rounded transition hover:text-cyan-400"
              >
                <Icon aria-hidden="true" focusable="false" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
