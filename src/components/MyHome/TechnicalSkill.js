import { Html5, Php, Database } from "@vicons/fa";
import {
  Javascript16Filled,
  Database20Filled,
  DesignIdeas16Regular,
} from "@vicons/fluent";

const mySkills = [
  {
    id: 1,
    icon: Html5,
    tech: "HTML/CSS",
    yearStarted: "2019",
    des: "I write semantic markup with accessibility in mind. I keep my CSS manageable and also slowly following BEM conventions/rules.",
    tools: [
      {
        icon: "html",
        title: "HTML5",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
      {
        icon: "css",
        title: "CSS",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
      {
        icon: "sass",
        title: "SCSS",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
      {
        icon: "tailwind",
        title: "tailwindcss",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
      {
        icon: "bootstrap",
        title: "BootStrap",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
    ],
  },

  {
    id: 2,
    icon: Javascript16Filled,
    tech: "JavaScript",
    yearStarted: "2019",
    des: "It is my main language and I know most of it. I focus on building single-page apps with attention to code quality and best practices.",
    tools: [
      {
        icon: "js",
        title: "JavaScript",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
      {
        icon: "jquery",
        title: "jQuery",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
      {
        icon: "vue",
        title: "VueJS",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
    ],
  },
  {
    id: 3,
    tech: "PHP",
    icon: Php,
    yearStarted: "2020",
    des: "Technology I used for Backend Development. PHP is the first ever language I learned for building backend functionalities. After that I started focusing on using PHP frameworks to build faster server-side rendering websites and API calls.",
    tools: [
      {
        icon: "php",
        title: "PHP",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
      {
        icon: "laravel",
        title: "Laravel",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
    ],
  },
  {
    id: 4,
    tech: "Database",
    icon: Database20Filled,
    yearStarted: "2021",
    des: "Ruby on Rails is a ruby framework for Web Development that also followed the MVC structure like Laravel and any other frameworks. I Just Started learning Ruby, and I only know little of it.",
    tools: [
      {
        icon: "mysql",
        title: "MySQL",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },

      {
        icon: "sqlserver",
        title: "Microsoft SQL Server",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
      {
        icon: "mongodb",
        title: "mongoDB",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
    ],
  },
  {
    id: 5,
    tech: "Tools/Design",
    icon: DesignIdeas16Regular,
    yearStarted: "2021",
    des: "Ruby on Rails is a ruby framework for Web Development that also followed the MVC structure like Laravel and any other frameworks. I Just Started learning Ruby, and I only know little of it.",
    tools: [
      {
        icon: "vs",
        title: "Visual Studio Code",
        docs: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
      },
    ],
  },
];

export default mySkills;
