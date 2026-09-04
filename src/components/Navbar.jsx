import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SOCIAL_LINKS } from "../constants/socials";

const PRIMARY = [
  { to: "/", label: "Home", match: "home" },
  { to: "/#projects", label: "Projects", match: "projects" },
  { to: "/blog", label: "Blog", match: "blog" },
  { to: "/#contact", label: "Contact Me", match: "contact" },
];

const MORE = [
  { id: "about", label: "About" },
  { id: "technologies", label: "Technologies" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const linkClass = (isActive) =>
  `text-sm transition hover:text-teal-800 ${
    isActive ? "font-medium text-teal-800" : "text-slate-700"
  }`;

const isPrimaryActive = (match, pathname, hash) => {
  if (match === "blog") {
    return pathname.startsWith("/blog");
  }
  if (match === "home") {
    return pathname === "/" && (hash === "" || hash === "#home");
  }
  return pathname === "/" && hash === `#${match}`;
};

const Navbar = () => {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav aria-label="Primary" className="py-4">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link
          to="/"
          onClick={close}
          className="justify-self-start text-2xl font-bold tracking-tight text-slate-900"
        >
          JF
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {PRIMARY.map(({ to, label, match }) => (
            <li key={match}>
              {match === "blog" ? (
                <NavLink
                  to={to}
                  onClick={close}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {label}
                </NavLink>
              ) : (
                <Link
                  to={to}
                  onClick={close}
                  className={linkClass(isPrimaryActive(match, pathname, hash))}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
          <li className="relative" ref={menuRef}>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded p-1.5 text-slate-900 transition hover:text-teal-800"
              aria-expanded={open}
              aria-controls="primary-nav-menu"
              aria-label={open ? "Close menu" : "More sections"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <FaTimes aria-hidden="true" focusable="false" />
              ) : (
                <FaBars aria-hidden="true" focusable="false" />
              )}
            </button>

            {open && (
              <ul
                id="primary-nav-menu"
                className="absolute left-1/2 z-50 mt-2 min-w-48 -translate-x-1/2 rounded-lg border border-stone-200/80 bg-[#f6f4f0] p-3 shadow-md"
              >
                {MORE.map(({ id, label }) => (
                  <li key={id}>
                    <Link
                      to={`/#${id}`}
                      onClick={close}
                      className={`block rounded px-2 py-1.5 ${linkClass(
                        pathname === "/" && hash === `#${id}`
                      )}`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <ul className="flex items-center justify-self-end gap-3 text-xl text-slate-700">
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
      </div>
    </nav>
  );
};

export default Navbar;
