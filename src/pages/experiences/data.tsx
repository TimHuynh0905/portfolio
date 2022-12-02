// Companies' Logos
import CRUS from "assets/images/companies/cirrus_logic.svg";
import COF from "assets/images/companies/capital_one.png";
// import ADP from "assets/images/companies/advantage_prep.png";
import RP from "assets/images/companies/right_price.png";
import IAI from "assets/images/companies/instra_ai.png";
// import WSU from "assets/images/companies/wayne_state.png";
import AMZN from "assets/images/companies/amazon.png";
import SLAI from "assets/images/companies/slai.svg";

// Interface
import { ExperienceProps } from "configs/interfaces";

const experiences: ExperienceProps[] = [
  {
    startDate: new Date(2023, 5),
    endDate: new Date(2023, 8),
    location: "Austin, TX",
    role: "Intern",
    logo: AMZN,
    skills: [],
  },
  {
    startDate: new Date(2022, 11),
    location: "Boston, MA",
    role: "Part-time",
    logo: SLAI,
    skills: [],
  },
  {
    startDate: new Date(2022, 5),
    endDate: new Date(2022, 7),
    location: "Plano, TX",
    role: "Intern",
    logo: COF,
    skills: [
      "devicon-angularjs-plain colored",
      "devicon-jest-plain colored",
      "devicon-webpack-plain colored",
      "devicon-terraform-plain colored",
      "devicon-amazonwebservices-plain colored",
    ],
  },
  {
    startDate: new Date(2022, 0),
    endDate: new Date(2022, 4),
    location: "Austin, TX",
    role: "Intern",
    logo: CRUS,
    skills: [
      "devicon-python-plain colored",
      "devicon-javascript-plain colored",
      "devicon-react-original colored",
      "devicon-bitbucket-original colored",
    ],
  },
  // {
  //   startDate: new Date(2021, 9),
  //   endDate: new Date(2022, 0),
  //   location: "Evanston, IL",
  //   role: "SWE - Self-employed",
  //   logo: ADP,
  //   skills: [
  //     "devicon-react-original colored",
  //     "devicon-materialui-plain colored",
  //     "devicon-amazonwebservices-plain colored",
  //   ],
  // },
  // {
  //   startDate: new Date(2021, 7),
  //   endDate: new Date(2021, 7),
  //   location: "Remote, US",
  //   role: "SWE Summit (SES)",
  //   logo: COF,
  //   skills: [
  //     "devicon-react-original colored",
  //     "devicon-express-original colored",
  //     "devicon-firebase-plain colored",
  //     "devicon-github-original colored",
  //   ],
  // },
  {
    startDate: new Date(2021, 5),
    endDate: new Date(2021, 7),
    location: "Los Angeles, CA",
    role: "Intern",
    logo: RP,
    skills: [
      "devicon-nextjs-original colored",
      "devicon-bootstrap-plain colored",
      "devicon-django-plain colored",
      "devicon-jira-plain colored",
    ],
  },
  {
    startDate: new Date(2020, 10),
    endDate: new Date(2021, 4),
    location: "Aurora, IL",
    role: "Part-time",
    logo: IAI,
    skills: [
      "devicon-flask-original colored",
      "devicon-react-original colored",
      "devicon-amazonwebservices-plain colored",
      "devicon-postgresql-plain colored",
    ],
  },
  // {
  //   startDate: new Date(2020, 1),
  //   endDate: new Date(2020, 4),
  //   location: "Detroit, MI",
  //   role: "Lab Assistant",
  //   logo: WSU,
  //   skills: ["devicon-python-plain colored"],
  // },
];

export default experiences;
