import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sections (Home)
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { useSeo } from "./seo/useSeo";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "./seo/siteMeta";

// Split out so the markdown renderer and every post body stay out of the
// initial bundle for visitors who only ever look at the home page.
const Blog = lazy(() => import("./blog/Blog"));
const BlogPost = lazy(() => import("./blog/BlogPost"));

// The Person JSON-LD for this route is served statically from index.html.
const Home = () => {
  useSeo({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" });
  const { hash } = useLocation();

  // Hash links from /blog (and a refresh on /#projects) need an explicit
  // scroll; the browser will not always do it after the route renders.
  // #home and a bare / should be the document top — scrollIntoView on the
  // hero can land on About after the portrait loads and the section grows.
  useEffect(() => {
    if (!hash || hash === "#home") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }
    const id = hash.slice(1);
    const node = document.getElementById(id);
    if (node) {
      node.scrollIntoView();
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* "user" defers to the prefers-reduced-motion setting. */}
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-teal-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>

        <div className="page-bg fixed inset-0 -z-10" />

        <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#f6f4f0]/75 backdrop-blur-md">
          <div className="container mx-auto px-8">
            <Navbar />
          </div>
        </header>

        <div className="relative container mx-auto px-8 py-10 text-slate-700">
          <main id="main">
            <ErrorBoundary>
              <Suspense
                fallback={
                  <p className="py-20 text-center text-slate-600" role="status">
                    Loading...
                  </p>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>

          <Footer />
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
};

export default App;
