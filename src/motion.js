// Shared framer-motion props so section headings and slide-ins stay in sync.
// MotionConfig in App.jsx already honours prefers-reduced-motion.

export const viewportOnce = { once: true };

export const sectionTitle = {
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -100 },
  transition: { duration: 0.5 },
  viewport: viewportOnce,
};

export const fromLeft = {
  whileInView: { opacity: 1, x: 0 },
  initial: { opacity: 0, x: -100 },
  transition: { duration: 1 },
  viewport: viewportOnce,
};

export const fromRight = {
  whileInView: { opacity: 1, x: 0 },
  initial: { opacity: 0, x: 100 },
  transition: { duration: 1 },
  viewport: viewportOnce,
};

export const fadeUp = {
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 60 },
  transition: { duration: 0.6 },
  viewport: viewportOnce,
};

export const heroEnter = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

export const bob = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
