import portfolio from "../assets/portfolio.png";
import news from "../assets/news.png";
import weather from "../assets/weather.png";
import wolf from "../assets/wolf.png";
import vue from "../assets/vue.png";
import cv from "../assets/cv.png";
import stock from "../assets/stock.png";
import criver from "../assets/criver.png";

export const projects = [
  {
    title: "MoreNews",
    category: "Development",
    tags: ["JavaScript", "Web Development"],
    description:
      "Reimagining Hacker News as a news aggregation platform with a focus on user experience and accessibility.",
    image: news,
    url: "https://morenews.vercel.app/",
  },
  {
    title: "My City Weather",
    category: "Development",
    tags: ["JavaScript", "Weather API", ".NET"],
    description:
      "A weather dashboard designed to help users explore local weather conditions.",
    image: weather,
    url: "https://mycityweatherapp.vercel.app/",
  },
  {
    title: "Wolf Digital",
    category: "Development",
    tags: ["Web Design", "Frontend"],
    description:
      "A modern digital website focused on a polished visual identity and user experience.",
    image: wolf,
    url: "https://wolf-digital.vercel.app/",
  },
  {
    title: "Vue Gift Ideas",
    category: "Development",
    tags: ["Vue.js", "JavaScript"],
    description:
      "A gift inspiration application designed to make discovering gift ideas easier.",
    image: vue,
    url: "https://vue-gift-ideas.vercel.app/",
  },
  {
    title: "Stock Smart",
    category: "Development",
    tags: ["JavaScript", "Data"],
    description:
      "A stock-focused application exploring how financial information can be presented through a web interface.",
    image: stock,
    url: "https://stock-smart-gamma.vercel.app/",
  },
  {
    title: "SM Dev Design",
    category: "Development",
    tags: ["React", "Web Design"],
    description:
      "My personal portfolio showcasing my work, development skills, and creative approach to digital experiences.",
    image: cv,
    url: "https://www.smdevdesign.com/",
  },
  {
    title: "criver.com",
    category: "Development",
    tags: ["React", "TypeScript", "Next.js", "Application Development"],
    description:
      "Main website for Criver, a company that provides medical and healthcare solutions, showcasing their services and expertise.",
    image: criver,
    url: "https://criver.com/",
  },
  {
    title: "Portfolio Website",
    category: "Development",
    tags: ["React", "TypeScript", "Web Design"],
    description:
      "My personal portfolio website, built with React and TypeScript to showcase my work and skills.",
    image: portfolio,
    url: "https://sophiamcg-portfolio.vercel.app/",
  },
];
