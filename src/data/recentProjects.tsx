import { TProject } from "../templates/templateParts/projectDetails/ProjectDetailsTemplate";
import { recommendations } from "./recommendations";

export const recentProjects: TProject[] = [
  {
    id: "9227d13b-cddf-443c-8440-64060dc5cd78",
    title: "Lead Frontend Developer",
    subtitle: "Conduction, Amsterdam",
    logoSrc: "/images/projects/conduction/logo-conduction.svg",
    cardImageSrc: "/images/projects/conduction/card-image-conduction.png",
    duration: "24 months",
    location: "Remote",
    years: "2022 — 2023",
    details: {
      title: (
        <>
          In collaboration with Conduction, I've worked on{" "}
          <strong>numerous React and TypeScript web applications</strong>.
        </>
      ),
      headerImageSrc: "/images/projects/conduction/header-image-conduction.png",
      skills: [
        "TypeScript",
        "React",
        "React Query",
        "React Form",
        "Axios",
        "PHP",
        "CSS",
        "HTML",
        "Git",
        "GitHub Workflows",
        "REST APIs",
        "Sketch",
        "Figma",
        "Docker",
        "GatsbyJS",
        "WordPress",
        "Vue",
        "Agile",
        "JSON",
        "ElasticSearch",
      ],
      recommendation: recommendations.find(
        (recommendation) => recommendation.id === "0d134cf6-64ab-4516-b489-9a800d70f9ce",
      ),
      responsibilities: [
        <>Lead frontend developer in a multidisciplinair team</>,
        <>
          React (function components, custom hooks, react-query and more), Typescript, HTML5, CSS Modules, REST API’s
          and much more
        </>,
        <>Coaching frontend developers and reviewing their code on a daily basis</>,
        <>Code management using Git</>,
        <>CI/CD management using GitHub Workflows (automatic deployment, build tests and governance)</>,
        <>
          Implementing, building and managing (custom) component libraries and implementing NL Design System within
          them.
        </>,
        <>
          Municipalities (and clients) worked for and with: Rotterdam, Utrecht, Noordwijk, Tubbergen, Leiden, Epe,
          Common Ground, Noaberkracht, and more
        </>,
      ],
    },
  },
  {
    id: "b0391551-2f29-460b-888a-246069c5c547",
    title: "Frontend Developer",
    subtitle: "Kaliber Interactive, Utrecht",
    logoSrc: "/images/projects/kaliber/logo-kaliber.svg",
    cardImageSrc: "/images/projects/kaliber/card-image-kaliber.png",
    duration: "7 months",
    location: "Remote",
    years: "2021",
    details: {
      title: (
        <>
          In collaboration with Kaliber Interactive, I worked on the complete redesign of{" "}
          <strong>Bol.com's recruitment platform</strong>.
        </>
      ),
      headerImageSrc: "/images/projects/kaliber/header-image-kaliber.png",
      skills: [
        "JavaScript",
        "React",
        "React Spring",
        "PHP",
        "CSS",
        "HTML",
        "Git",
        "REST APIs",
        "Sketch",
        "Figma",
        "WordPress",
        "Agile",
        "JSON",
        "ElasticSearch",
        "MySQL",
      ],
      recommendation: recommendations.find(
        (recommendation) => recommendation.id === "b4a61897-14c1-42fe-b697-2a51c62e0848",
      ),
      responsibilities: [
        <>Frontend development in a multidisciplinair team</>,
        <>Daily SCRUM-meetings with all stakeholders, including daily sessions with the UI & UX team</>,
        <>
          Building (micro-) animations within reusable components, using CSS Animations, Transitions and React Spring
        </>,
        <>Creating ready-to-use WordPress (ACF) components, with a React frontend</>,
        <>Code management and pull requests using GitHub</>,
      ],
    },
  },
  {
    id: "3ae33c4a-b7b6-4cbf-978d-96199339acc8",
    title: "Frontend Developer",
    subtitle: "Level.works, Rotterdam",
    logoSrc: "/images/projects/level-works/logo-level-works.svg",
    cardImageSrc: "/images/projects/level-works/card-image-level-works.png",
    duration: "3 months",
    location: "Remote",
    years: "2022",
    details: {
      title: (
        <>
          In collaboration with Q42 and Morrow, I worked on the green field project of the{" "}
          <strong>Level.works app</strong>.
        </>
      ),
      headerImageSrc: "/images/projects/level-works/header-image-level-works.png",
      skills: [
        "TypeScript",
        "React",
        "React Query",
        "React Form",
        "Axios",
        "CSS",
        "HTML",
        "Git",
        "GitHub Workflows",
        "REST APIs",
        "Sketch",
        "Agile",
        "JSON",
        "NodeJS",
        "ElasticSearch",
      ],
      responsibilities: [
        <>Frontend development in a multidisciplinair team (in collaboration with Q42 and Morrow)</>,
        <>Creating a web application to manage their back office system, form handling using React Hook Form</>,
        <>Allowing all REST requests to be client-side cached using React Query</>,
        <>
          Building (micro-) animations within reusable components, using CSS Animations, Transitions and React Spring
        </>,
        <>Code management and pull requests using GitHub</>,
      ],
    },
  },
  {
    id: "2dfe54f3-ef9d-4c6e-a3cc-13a9109c7dba",
    title: "Lead Frontend Developer",
    subtitle: "Koopwebsite, Remote",
    logoSrc: "/images/projects/koopwebsite/logo-koopwebsite.svg",
    cardImageSrc: "/images/projects/koopwebsite/card-image-koopwebsite.png",
    duration: "3 months",
    location: "Remote",
    years: "2022",
    details: {
      title: (
        <>
          Koopwebsite is the place to have robust, affordable and <strong>beautiful websites</strong> made.
        </>
      ),
      headerImageSrc: "/images/projects/koopwebsite/header-image-koopwebsite.png",
      skills: [
        "TypeScript",
        "React",
        "React Query",
        "React Spring",
        "React Form",
        "Axios",
        "PHP",
        "CSS",
        "HTML",
        "Git",
        "GitHub Workflows",
        "REST APIs",
        "Sketch",
        "WordPress",
        "Agile",
        "JSON",
        "MySQL",
      ],
      responsibilities: [
        <>Lead Frontend Development for this web application</>,
        <>Allowing all REST requests to be client-side cached using React Query</>,
        <>Code management and pull requests using GitHub</>,
        <>Managing all content (backend) with WordPress, handling the frontend with React</>,
        <>
          Building (micro-) animations within reusable components, using CSS Animations, Transitions and React Spring
        </>,
        <>CI/CD management using GitHub Workflows (automatic deployment, build tests and governance)</>,
      ],
    },
  },
];
