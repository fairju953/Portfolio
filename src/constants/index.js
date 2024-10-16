import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an enthusiastic full stack developer with a talent for building reliable and scalable web applications. With 1 year of practical experience, I’ve refined my expertise in front-end technologies like React and Tailwind CSS, alongside back-end technologies like Node.js, MySQL, Java, and PHP. My aim is to apply my skills to develop innovative solutions that foster business growth and enhance user experiences.`;

export const ABOUT_TEXT = `I am a motivated and adaptable full stack developer with a strong passion for creating seamless and user-friendly web applications. With 1 year of industry experience, I have worked with a broad range of technologies, including React, Tailwind CSS, Node.js, MySQL, Java, and PHP. My journey in web development began with a genuine curiosity about technology, evolving into a profession where I continually seek new knowledge and enjoy tackling challenges. I thrive in team-oriented environments and take pleasure in solving intricate problems to deliver top-tier solutions. Beyond coding, I enjoy staying active, exploring emerging tech, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2020 - Present",
    role: "Worker's Compensation Adjuster",
    company: "NJPLIGA",
    description: `Evaluate and process WC claims, with investigation, evidence gathering and review of medical records to determine claim validity. 
	Calculate and determine appropriate benefits based on injury severity, medical evidence, and NJ WC State Laws.
	Negotiate fair settlement of claims, considering medical treatments, disability ratings, rehabilitation, and compensation. 
.`,
    technologies: ["Word", "Excel", "Claim Center", "DMS"],
  },
  {
    year: "2016 - 2019",
    role: "Claims Service Representative",
    company: "NJPLIGA",
    description: `Provided support services including bulk letters, data entry, and initial claims processing. 
	Spearheaded a project to create the value and belief statement of the operations department. 
	Assisted in the Development of a new filing system and integration to a paperless system for W9’s
Provided excellent customer service over the phone to claimants and medical providers.`,
    technologies: ["Word", "Excel", "PowerPoint"],
  },
  {
    year: "2015 - 2016",
    role: "Administrative Clerk",
   company: "Kelly Services",
   description: `Demonstrated ability to support ICM Document Solutions project with Honeywell. 
Scanned and processed Honeywell's confidential documents into electronic format. 
Carried out all assigned administrative duties that aligned to the production schedule. 
`,
    technologies: [],
   },
 // {
 //   year: "2020 - 2021",
  //  role: "Software Engineer",
 //   company: "Paypal",
 //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
 //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//  },
];

export const PROJECTS = [
  {
    title: "Project Management",
    image: project1,
    description:
      "Collaborated with a team to develop a fully functioning company. Assisted in project building a Coffee Shop.",
    technologies: ["SageKick", "Excel", "HTML", "CSS"],
  },
  {
    title: "Developing Java Application",
    image: project2,
    description:
      "Developed robust Java applications,everaging the power of object-oriented programming to create scalable, maintainable, and high-performance solutions.",
    technologies: ["Java", "Eclipse"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Webpage",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "WordPress"],
  },
];

export const CONTACT = {
  address: "1000 Morris Ave, Union, NJ 07083",
  phoneNo: "908-555-7777 ",
  email: "fairju@kean.edu",
  website: "",
  Linkedin: "www.linkedin.com/in/justin-fair-503b56b4",
};
