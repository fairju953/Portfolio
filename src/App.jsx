
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatGPTComponent from './components/ChatGPTComponent';

const App = () => {
  return (
    <div className='overflow-x-hidden text neutral-300 antialiased selection:text-cyan-900'>
      <div className= "fixed top-0 -z-10 h-full w-full"> <div className="relative h-full w-full bg-neutral-900"><div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div></div>
<div className="container mx-auto px-8"></div>
</div>
  <Navbar />
  <Hero />
  <About />
  <Technologies />
  <Experience />
  <Projects />
  <ChatGPTComponent />
  <Contact />

    </div>
  )
}

export default App

