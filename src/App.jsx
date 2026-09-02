import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { useSeo } from "./seo/useSeo";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "./seo/siteMeta";

// Split out so the markdown renderer and every post body stay out of the
// initial bundle for visitors who only ever look at the home page.
const Blog = lazy(() => import("./blog/Blog"));
const BlogPost = lazy(() => import("./blog/BlogPost"));


// The Person JSON-LD for this route is served statically from index.html.
const Home = () => {
  useSeo({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" });

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
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-neutral-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>

        {/* Background */}
        <div className="fixed inset-0 -z-10 bg-neutral-900">
          <div className="absolute inset-0 bg-fuchsia-400 opacity-20 blur-[120px]" />
        </div>

        {/* App Content */}
        <div className="relative container mx-auto px-8 py-10 text-neutral-300">
          <Navbar />

          <main id="main">
            <Suspense
              fallback={
                <p className="py-20 text-center text-neutral-400" role="status">
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
          </main>

          <Footer />
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
};

export default App;