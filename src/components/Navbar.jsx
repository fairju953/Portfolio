import { NavLink } from "react-router-dom";
import { SOCIAL_LINKS } from "../constants/socials";

const navLinkClass = ({ isActive }) =>
  `transition hover:text-teal-800 ${isActive ? "font-medium text-teal-800" : "text-slate-700"}`;

const Navbar = () => {
  return (
    <nav
      aria-label="Primary"
      className="flex items-center justify-between py-5"
    >
      <div className="flex flex-shrink-0 items-center">
        <span className="text-2xl font-bold tracking-tight text-slate-900">
          JF
        </span>
      </div>

      {/* NavLink applies aria-current="page" on the active link itself. */}
      <div className="flex items-center gap-8 text-sm">
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/blog" className={navLinkClass}>
          Blog
        </NavLink>
      </div>

      <ul className="flex items-center justify-center gap-4 text-xl text-slate-700">
        {SOCIAL_LINKS.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              className="inline-block rounded transition hover:text-teal-800"
            >
              <Icon aria-hidden="true" focusable="false" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
