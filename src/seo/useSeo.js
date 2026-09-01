import { useEffect } from "react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "./siteMeta";

const JSON_LD_ID = "route-json-ld";

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

/**
 * Keeps per-route metadata in sync for users (tab titles, bookmarks, history)
 * and for crawlers that execute JavaScript.
 *
 * Note that the social networks do NOT execute JavaScript, so link previews
 * always come from the static tags in index.html. Per-post preview cards would
 * require prerendering the routes at build time.
 */
export function useSeo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  index = true,
  jsonLd = null,
} = {}) {
  const serializedJsonLd = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", index ? "index, follow" : "noindex, follow");
    upsertCanonical(url);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:image", OG_IMAGE);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", OG_IMAGE);

    document.getElementById(JSON_LD_ID)?.remove();

    if (serializedJsonLd) {
      const script = document.createElement("script");
      script.id = JSON_LD_ID;
      script.type = "application/ld+json";
      script.textContent = serializedJsonLd;
      document.head.appendChild(script);
    }

    return () => document.getElementById(JSON_LD_ID)?.remove();
  }, [title, description, path, type, index, serializedJsonLd]);
}
