import { SOCIAL_LINKS } from "../constants/socials";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-800 py-10 text-sm text-neutral-400">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Justin Fair</p>

        {/* Emitted at build time by the rss plugin in vite.config.js, so it is
            a real file rather than a client route. */}
        <a href="/rss.xml" className="rounded transition hover:text-cyan-400">
          RSS feed
        </a>

        <ul className="flex items-center gap-5 text-xl">
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
      </div>
    </footer>
  );
};

export default Footer;
