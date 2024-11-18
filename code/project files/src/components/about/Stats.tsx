import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Java</Chip>
            <Chip>Python</Chip>
            <Chip>JavaScript</Chip>
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>RESTful APIs</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>SQL</Chip>
            <Chip>Supabase</Chip>
            <Chip>Git</Chip>
            <Chip>GitHub</Chip>
            <Chip>Agile/Scrum</Chip>
            <Chip>Cloud Computing</Chip>
            <Chip>GraphQL</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Arduino</Chip>
            <Chip>Rust</Chip>
            <Chip>React Native</Chip>
            <Chip>Markdown</Chip>
            <Chip>Figma</Chip>
            <Chip>Three.js</Chip>
            <Chip>Spline.js</Chip>
            <Chip>Framer Motion</Chip>
            <Chip>Node.js</Chip>
            <Chip>C++</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
