import { li } from "framer-motion/client";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full web stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, Next.js, Html, CSS, Javascript as well as back-end technologies like Node.js, MySQL, Php, C#, Java, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const education = [
  {
    degree: "Software Engineering (Plymouth University)",
    school: "NSBM University",
    year: "2022 - 2025",
    description: "Focused on Software and Web Development With Java, C#, PHP, MySQL, MongoDB, React, Next.js, Node.js, TailwindCss, Html, CSS, JavaScript and TypeScript experience."
  },
  {
    degree: "G.C.E. Advanced Level",
    school: "Ds Senanayake College",
    year: "2019",
    description: "Advanced Level in Art Science Stream Passed with 2Bs, S passes and C pass for English."
  },
  {
    degree: "G.C.E. Ordinary Level",
    school: "Ds Senanayake College",
    year: "2016",
    description: "Ordinary Level Passed with 3As, 4BS passes and C pass."
  },
];

export const experience = [
  {
    role: "IT Trainee",
    company: "Sri Lanka Inventors Commission",
    year: "2021 - 2021",
    description: "Designed UI/UX for the company's website. Designed some certificates and Logos for the company events."
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website React",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "TailwindCss", "javascript", "React", "Node.js",  "MongoDB"],
    link: "https://github.com/hirushasanjula/mern-ecommerce.git"
  },
  {
    title: "E-Commerce Website Next.js",
    image: project2,
    description:
      "An e-commerce website built with Next.js, featuring server-side rendering and optimized performance, shopping cart, checkout page, online payment With Admin dashboard, role based authentication,",
    technologies: ["HTML", "TailwindCss", "TypeScript", "Next.js", "Neon", "Uploadthing"],
    link: "https://github.com/hirushasanjula/MagaMart.git"
  },
  {
    title: "Phone Back-Cover Customize  Website",
    image: project3,
    description:
      "A website that allows users to customize phone back covers with text, images, and colors",
    technologies: ["HTML", "TailwindCss", "TypeScript", "Next.js", "Neon", "Uploadthing"],
    link: "https://github.com/hirushasanjula/casecobra.git"
  },
];

export const CONTACT = {
  address: "##############################",
  phoneNo: "+94 70 433 1506 ",
  email: "hsanjula33@gmail.com",
};
