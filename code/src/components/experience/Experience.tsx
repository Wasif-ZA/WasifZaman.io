import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Woolworths Group",
    position: "Sales Assistant",
    time: "Feb 2023 - Present",
    location: "Sydney",
    description:
      "Enhanced customer satisfaction by resolving issues efficiently, boosting repeat business by 15% through personalized recommendations, and increasing sales by 10% through effective product matching.",
    tech: ["Customer Service", "POS Systems", "Sales Strategies"],
  },
  {
    title: "Rank2Revenue",
    position: "Software Engineer",
    time: "Sep 2024 - Present",
    location: "Remote",
    description:
      "Responsible for designing and developing the company's website. Focused on creating a responsive and high-conversion user experience, implementing backend integrations, and optimizing for performance.",
    tech: ["Next.js", "React", "Tailwind CSS", "RESTful APIs", "Supabase", "Git"],
  },
  {
    title: "UTSBDSOC",
    position: "IT Director",
    time: "Sep 2024 - Present",
    location: "Sydney",
    description:
      "Oversaw the management and maintenance of the society's website. Ensured the website remained up-to-date, user-friendly, and secure, while coordinating with teams to implement new features and improvements.",
    tech: [
      "Web Management",
      "JavaScript",
      "React",
      "GitHub",
      "Website Maintenance",
      "Agile/Scrum",
    ],
  },
];

