import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Rank2Revenue Website",
    imgSrc: "project-imgs/rank2revenue.png",
    code: "https://github.com/Wasif-ZA/Rank2Revenue",
    projectLink: "https://rank2revenue.com.au",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "RESTful APIs", "Git"],
    description:
      "Developed and optimized the Rank2Revenue website, focusing on a high-conversion, responsive user experience using modern technologies.",
    modalContent: (
      <>
        <p>
          The Rank2Revenue website project involved building a robust platform
          for showcasing services and converting leads. I implemented a
          user-friendly interface with Next.js, ensuring fast load times and
          smooth navigation.
        </p>
        <p>
          Leveraged Supabase for efficient data handling and implemented RESTful
          APIs to streamline backend operations. Tailwind CSS was used to create
          a consistent and responsive design, ensuring accessibility across
          devices.
        </p>
        <p>
          Worked collaboratively to integrate analytics and improve SEO,
          ultimately driving engagement and boosting the site’s performance.
        </p>
      </>
    ),
  },
  {
    title: "Motion Control System",
    imgSrc: "project-imgs/motion-control.png",
    code: "https://github.com/Wasif-ZA/BladeRunner",
    projectLink: "https://github.com/Wasif-ZA/BladeRunner",
    tech: ["Arduino", "C++", "GitHub", "Real-time Systems"],
    description:
      "Developed modular C++ code to manage motion and operational states, collaborating with teams for hardware integration and real-time data exchange.",
    modalContent: (
      <>
        <p>
          The Motion Control System project aimed at creating real-time control
          for a set of carriages. I wrote modular C++ code to handle motion
          commands efficiently, ensuring precise and smooth operation.
        </p>
        <p>
          Collaborated with hardware teams to integrate the software seamlessly
          with sensors and actuators, enabling real-time data exchange and
          effective collision prevention mechanisms.
        </p>
        <p>
          Optimized the system for reliability and low latency, critical for
          maintaining safety and performance in a real-world environment.
        </p>
      </>
    ),
  },
  {
    title: "RFID Inventory Tracker",
    imgSrc: "project-imgs/rfid-tracker.jpg",
    code: "https://github.com/Wasif-ZA/RFIDInventoryTracker",
    projectLink: "https://github.com/Wasif-ZA/RFIDInventoryTracker",
    tech: ["Java", "GitHub", "Agile", "RFID Technology"],
    description:
      "Led the development of an RFID-enabled coffee cup tracking system, managing sprints as Scrum Master and ensuring timely project delivery.",
    modalContent: (
      <>
        <p>
          The RFID Inventory Tracker project focused on building a system to
          track coffee cups using RFID tags. My role involved leading the
          development effort and managing Agile sprints to meet project
          deadlines.
        </p>
        <p>
          Implemented the tracking logic in Java, using RFID readers to update
          inventory in real time. This allowed for efficient stock management
          and reduced losses.
        </p>
        <p>
          Regularly collaborated with stakeholders to refine requirements and
          ensured comprehensive testing to deliver a robust solution.
        </p>
      </>
    ),
  },
  {
    title: "E-commerce Platform on Shopify",
    imgSrc: "project-imgs/e-commerce-platform.png",
    code: "https://github.com/Wasif-ZA/BioPakShopifySystem",
    projectLink: "https://github.com/Wasif-ZA/BioPakShopifySystem",
    tech: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS"],
    description:
      "Built a custom Shopify e-commerce platform, focusing on seamless navigation, dynamic layouts, and performance optimization.",
    modalContent: (
      <>
        <p>
          This project involved designing and developing a Shopify e-commerce
          store using a custom theme. I focused on building intuitive navigation
          and a seamless checkout process.
        </p>
        <p>
          Used Liquid templates to create dynamic, user-friendly layouts, while
          Tailwind CSS was used to ensure the site was visually appealing and
          responsive across all devices.
        </p>
        <p>
          Emphasized SEO and performance optimization, resulting in faster load
          times and a higher conversion rate for the store.
        </p>
      </>
    ),
  },
];

export default Projects;
