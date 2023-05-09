import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
const htmlIcon = <AiFillHtml5 />;
const cssIcon = <DiCss3 />;
const jsIcon = <DiJavascript1 />;
const reactIcon = <DiReact />;
const figmaIcon = <FiFigma />;

const skillData = [
  {
    skillName: "Html",
    skillRange: 90,
    skillIcon: htmlIcon,
  },
  {
    skillName: "Css",
    skillRange: 87,
    skillIcon: cssIcon,
  },
  {
    skillName: "JavaScript",
    skillRange: 80,
    skillIcon: jsIcon,
  },
  {
    skillName: "Figma",
    skillRange: 50,
    skillIcon: figmaIcon,
  },

  {
    skillName: "React",
    skillRange: 78,
    skillIcon: reactIcon,
  },
];
export default skillData;
