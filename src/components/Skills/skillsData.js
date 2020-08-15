import mern from "../../Assets/mern.png";
import figma from "../../Assets/figma.png";
import django_react from "../../Assets/django_react.png";
import desgining_logo from "../../Assets/desgining_logo.svg";
import development_icon from "../../Assets/development_icon.svg";

const skillsData = [
  {
    id: 1,
    name: "full-stack web development",
    logo: development_icon,
    images: [mern, django_react],
    content:
      "gained my interest in web developement 2 years ago.. never stopped learing from that point",
  },
  {
    id: 2,
    name: "web designing",
    logo: desgining_logo,
    images: [figma],
    content:
      "recently gained interest in web designing... this portfolio is my first ever designing project and also i do not plan to stop",
  },
];

export default skillsData;
