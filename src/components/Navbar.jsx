
import {FaLinkedin } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";
import {FaTwitterSquare } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6"> 
     <div className="flex flex-shrink-0  items-center">

       <span className="ml-2 text-3xl font-bold text-white">Jf</span> 
        </div> 

        <div className="text-white m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaTwitterSquare />
        </div>
        </nav>

   
  )
}

export default Navbar
