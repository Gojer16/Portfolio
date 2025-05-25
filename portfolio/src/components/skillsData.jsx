import { FaNodeJs,} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiCodeBlock } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";


export const skills = [
  {
    name: "Back-End Development	",
    icon: <FaNodeJs className="text-[#F5B0CB] text-3xl" />,
    level: 70,
  },
  {
    name: "API Design",
    icon: <BiCodeBlock className="text-[#DC6ACF] text-3xl" />,
    level: 50,
  },
  {
    name: "Front-End Development",
    icon: <SiNextdotjs className="text-[#BEA7E5] text-3xl" />,
    level: 55,
  },
  {
    name: "DevOps & Tools",
    icon: <FaGithubAlt className="text-[#208AAE] text-3xl" />,
    level: 30,
  },
  {
    name: "System Design",
    icon: <GiCircuitry className="text-[#4DCCBD] text-3xl" />,
    level: 20,
  },
  {
    name: "Database Systems	",
    icon: <SiMysql className="text-[#FF5666] text-3xl" />,
    level: 45,
  },
];
