import { ISkils } from "@/components/skills/Skils";
import icon from "../../public/image 14.png";
import twoIcon from "../../public/image 15.png";
import threeIcon from "../../public/image 16.png";
export const frontendSkilsData: ISkils = {
  id: "front",
  title: "Front-end skils",
  firstArray: [
    {
      title: "UI / UX Design",
      content:
        "Exploring UI/UX design involves navigating through the intricate balance of user interface and user experience. Its about creating visually appealing, intuitive interfaces that seamlessly guide users through a digital journey. Good UI focuses on aesthetics and layout, while UX ensures a positive, meaningful interaction.",
      icon: icon.src,
    },
    {
      title: "HTML, CSS(Scss), JavaScript, TypeScript",
      content:
        "HTML, CSS (Scss), JavaScript, and TypeScript are the foundational elements of web development. HTML structures content, CSS (Scss) styles presentation, and JavaScript/TypeScript adds dynamic behavior. HTML provides the framework, CSS (Scss) enhances aesthetics, and JavaScript/TypeScript introduces interactivity. ",
      icon: twoIcon.src,
    },
    {
      title: "React, Redux, Next",
      content:
        "React, Redux, and Next.js form a powerful trio for building scalable web applications. React provides an efficient JavaScript library for building user interfaces, while Redux manages global state. Next.js, a React framework, simplifies server-side rendering and aids in creating robust, production-ready applications. Together, they create a cohesive stack for modern, dynamic web experiences with efficient state management.",
      icon: threeIcon.src,
    },
  ],
  secondArray: [
    { title: "HTML", procent: 99 },
    { title: "CSS and Scss", procent: 99 },
    { title: "JavaScript and TypeScript", procent: 80 },
    { title: "React", procent: 78 },
    { title: "Redux", procent: 76 },
    { title: "Next", procent: 66 },
  ],
};

export const backendSkilsData: ISkils = {
  id: "back",
  title: "Back-end skils",
  firstArray: [
    {
      title: "API",
      content:
        "API development with Express and Nest.js offers a robust foundation for building scalable and efficient server-side applications. Express.js, a minimalist web application framework for Node.js, simplifies the creation of APIs with its flexible routing and middleware system. Nest.js, built on top of Express, provides a modular and structured approach to building backend applications with TypeScript support",
      icon: icon.src,
    },
    {
      title: "Database",
      content:
        "Database management with MongoDB and PostgreSQL is a dynamic combination for handling diverse data storage needs. MongoDB, a NoSQL database, excels at handling unstructured data, providing flexibility and scalability. Its document-oriented structure allows for easy adaptation to evolving data models. On the other hand, PostgreSQL, a powerful relational database, is known for its robustness and ability to manage structured data efficiently. With support for complex queries and transactions, PostgreSQL is ideal for applications with intricate relational requirements. ",
      icon: twoIcon.src,
    },
  ],
  secondArray: [
    { title: "Express", procent: 81 },
    { title: "Nest", procent: 70 },
    { title: "Bcrpyt and Jwt", procent: 100 },
    { title: "MongoDb", procent: 75 },
    { title: "Postgres", procent: 69 },
    { title: "Sequzeli", procent: 66 },
  ],
};

frontendSkilsData.secondArray = frontendSkilsData.secondArray.sort(
  (a, b) => b.procent - a.procent
);

backendSkilsData.secondArray = backendSkilsData.secondArray.sort(
  (a, b) => b.procent - a.procent
);
