import { BlogAuthor } from "@/types/blog";

export const blogAuthors: BlogAuthor[] = [
  {
    id: "sam-mc",
    name: "Sam MC",
    role: "Content Manager",
    bio: "Specializing in home exterior maintenance and pressure washing techniques. Sam brings years of industry experience to help homeowners understand the best practices for maintaining their properties.",
    avatar: "/assets/team/sam-mc.jpg",
    social: {
      email: "info@elitxteriors.com",
    },
  },
  {
    id: "gaby-nobrega",
    name: "Gaby Nobrega",
    role: "Co-Founder & Operations Director",
    bio: "Co-founder of Elite Exteriors with extensive experience in exterior cleaning services. Gaby oversees operations and ensures quality service delivery across Hampton Roads.",
    avatar: "/assets/team/gaby-nobrega.jpg",
    social: {
      email: "info@elitxteriors.com",
      linkedin:
        "https://www.linkedin.com/company/elite-exteriors-pressure-washing-services",
    },
  },
  {
    id: "ahmet-nobrega",
    name: "Ahmet Nobrega",
    role: "Founder & CEO",
    bio: "Founder and CEO of Elite Exteriors, bringing innovation and expertise to the pressure washing industry in Hampton Roads. Passionate about helping homeowners maintain beautiful, clean properties.",
    avatar: "/assets/team/ahmet-nobrega.jpg",
    social: {
      email: "info@elitxteriors.com",
    },
  },
];

export const getAuthorById = (id: string): BlogAuthor | undefined => {
  return blogAuthors.find((author) => author.id === id);
};

export const getAuthorByName = (name: string): BlogAuthor | undefined => {
  return blogAuthors.find((author) => author.name === name);
};
