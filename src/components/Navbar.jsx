import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SOCIAL_LINKS } from "../constants/socials";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "technologies", label: "Technologies" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const sectionClass = (isActive) =>
  `text-sm transition hover:text-teal-800 ${
    isActive ? "font-medium text-teal-800" : "text-slate-700"
  }`;

const Navbar = () => {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav aria-label="Primary" className="py-4">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          onClick={close}
          className="shrink-0 text-2xl font-bold tracking-tight text-slate-900"
        >
          JF
        </Link>

        <ul className="hidden flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:flex">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={`/#${id}`}
                className={sectionClass(pathname === "/" && hash === `#${id}`)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => sectionClass(isActive)}
            >
              Blog
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-3 text-xl text-slate-700">
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

          <button
            type="button"
            className="rounded border border-slate-400 px-3 py-1 text-sm text-slate-900 lg:hidden"
            aria-expanded={open}
            aria-controls="primary-nav-menu"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <ul
          id="primary-nav-menu"
          className="mt-4 flex flex-col gap-3 border-t border-stone-200/80 pt-4 lg:hidden"
        >
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={`/#${id}`}
                onClick={close}
                className={sectionClass(pathname === "/" && hash === `#${id}`)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <NavLink
              to="/blog"
              onClick={close}
              className={({ isActive }) => sectionClass(isActive)}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
