import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I'm Wasif Zaman, a software engineer from Sydney, currently
              pursuing my Bachelor's in Software Engineering at Macquarie
              University. I bring a blend of technical knowledge and hands-on
              experience across a range of modern development technologies.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              My expertise lies in developing efficient backend systems using
              Java, Python, and Node.js. On the frontend, I enjoy building
              engaging user interfaces with React and Next.js, ensuring seamless
              user experiences and responsive designs.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I also have a strong foundation in cloud computing and database
              management, utilizing platforms like AWS and Supabase to build
              scalable, secure applications. My skills in version control with
              Git, along with Agile and Scrum practices, make me a proactive and
              collaborative team member.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Outside of coding, I’m passionate about continuous learning and
              refining my problem-solving abilities. I enjoy tackling
              real-world challenges and contributing to impactful projects. If
              you're interested in collaborating, feel free to reach out!
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
