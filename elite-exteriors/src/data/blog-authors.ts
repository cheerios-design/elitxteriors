import { BlogAuthor } from "@/types/blog";

export const blogAuthors: BlogAuthor[] = [
  {
    id: "gaby-nobrega",
    name: "Gaby Nobrega",
    role: "Co-Founder & Operations Director",
    bio: "Co-founder of Elite Exteriors with extensive experience in exterior cleaning services. Gaby oversees operations and ensures quality service delivery across Hampton Roads.",
    avatar: "/assets/team/gaby-nobrega.jpg",
    social: {
      email: "info@elitexteriorsva.com",
      linkedin:
        "https://www.linkedin.com/company/elite-exteriors-pressure-washing-services",
    },
  },
  {
    id: "matt-seymen",
    name: "Matt Seymen",
    role: "Founder & CEO",
    bio: "Founder and CEO of Elite Exteriors, bringing innovation and expertise to the pressure washing industry in Hampton Roads. Passionate about helping homeowners maintain beautiful, clean properties.",
    avatar: "/assets/team/matt-seymen.jpg",
    social: {
      email: "info@elitexteriorsva.com",
    },
  },
];

export const getAuthorById = (id: string): BlogAuthor | undefined => {
  return blogAuthors.find((author) => author.id === id);
};

export const getAuthorByName = (name: string): BlogAuthor | undefined => {
  return blogAuthors.find((author) => author.name === name);
};
