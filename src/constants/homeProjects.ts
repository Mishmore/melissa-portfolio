import { homeProjectsList } from "../helpers/homeProjectsList";

interface Project {
  image_url: string;
  description: string;
  css: {
    width: string | number;
    height?: string | number;
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
  };
}

export const projects: Project[] = [
  {
    image_url: homeProjectsList[20] as string,
    description: "Perfect Storm",
    css: {
      width: "14.12vw",
      left: "46.528vw",
      top: "34vw",
    },
  },
  {
    image_url: homeProjectsList[8] as string,
    description: "Café con Borges",
    css: {
      width: "15.046vw",
      left: "58.507vw",
      top: "22vw",
    },
  },
  {
    image_url: homeProjectsList[18] as string,
    description: "Orvay",
    css: {
      width: "16.171vw",
      left: "99.248vw",
      top: "50vw",
    },
  },
  {
    image_url: homeProjectsList[22] as string,
    description: "Perfect Storm",
    css: {
      width: "15.162vw",
      left: "114.873vw",
      top: "65vw",
    },
  },
  {
    image_url: homeProjectsList[0] as string,
    description: "Buque",
    css: {
      width: "14vw",
      right: "79vw",
      top: "52vw",
    },
  },
  {
    image_url: homeProjectsList[23] as string,
    description: "Perfect Storm",
    css: {
      width: "6.597vw",
      right: "70.139vw",
      top: "58vw",
    },
  },
  {
    image_url: homeProjectsList[1] as string,
    description: "Buque",
    css: {
      width: "30vw",
      right: "93.287vw",
      top: "15vw",
    },
  },
  {
    image_url: homeProjectsList[21] as string,
    description: "Perfect Storm",
    css: {
      width: "8.507vw",
      left: "73.148vw",
      top: "57vw",
    },
  },

  {
    image_url: homeProjectsList[15] as string,
    description: "Haums im Wald",
    css: {
      width: "6.076vw",
      left: "60.5vw",
      top: "80vw",
    },
  },
  {
    image_url: homeProjectsList[25] as string,
    description: "Perfect Storm",
    css: {
      width: "11.285vw",
      left: "66vw",
      top: "88vw",
    },
  },
  {
    image_url: homeProjectsList[26] as string,
    description: "Perfect Storm",
    css: {
      width: "5vw",
      right: "49.132vw",
      top: "39vw",
    },
  },
  {
    image_url: homeProjectsList[2] as string,
    description: "Café con Borges",
    css: {
      width: "5.498vw",
      right: "51.505vw",
      top: "14vw",
    },
  },
  {
    image_url: homeProjectsList[3] as string,
    description: "Café con Borges",
    css: {
      width: "21vw",
      right: "19vw",
      top: "6vw",
    },
  },
  {
    image_url: homeProjectsList[4] as string,
    description: "Café con Borges",
    css: {
      width: "12.269vw",
      left: "28.125vw",
      top: "9vw",
    },
  },
  {
    image_url: homeProjectsList[5] as string,
    description: "Café con Borges",
    css: {
      width: "20vw",
      left: "8.59vw",
      top: "25.521vw",
    },
  },
  {
    image_url: homeProjectsList[6] as string,
    description: "Café con Borges",
    css: {
      width: "10.648vw",
      right: "47.917vw",
      top: "61.516vw",
    },
  },
  {
    image_url: homeProjectsList[7] as string,
    description: "Café con Borges",
    css: {
      width: "14vw",
      left: "82.87vw",
      top: "60vw",
    },
  },

  {
    image_url: homeProjectsList[14] as string,
    description: "Orvay",
    css: {
      width: "15vw",
      right: "59vw",
      top: "25vw",
    },
  },
  {
    image_url: homeProjectsList[10] as string,
    description: "Haums im Wald",
    css: {
      width: "16.435vw",
      right: "7.56vw",
      top: "45.516vw",
    },
  },
  {
    image_url: homeProjectsList[9] as string,
    description: "Café con Borges",
    css: {
      width: "33vw",
      left: "7vw",
      top: "91.644vw",
    },
  },
  {
    image_url: homeProjectsList[19] as string,
    description: "Orvay",
    css: {
      width: "5.15vw",
      height: "7.755vw",
      left: "64vw",
      top: "42.361vw",
    },
  },
  {
    image_url: homeProjectsList[13] as string,
    description: "Haums im Wald",
    css: {
      width: "16vw",
      left: "27.565vw",
      top: "64vw",
    },
  },
  // Orvay
  {
    image_url: homeProjectsList[24] as string,
    description: "Perfect Storm",
    css: {
      width: "31vw",
      right: "1.2vw",
      top: "91vw",
    },
  },
  {
    image_url: homeProjectsList[16] as string,
    description: "Orvay",
    css: {
      width: "11.914vw",
      right: "31vw",
      top: "84vw",
    },
  },
  {
    image_url: homeProjectsList[11] as string,
    description: "Haums im Wald",
    css: {
      width: "9.491vw",
      right: "38.819vw",
      top: "97.644vw",
    },
  },
  {
    image_url: homeProjectsList[17] as string,
    description: "Orvay",
    css: {
      width: "19.271vw",
      right: "88.831vw",
      top: "97.801vw",
    },
  },

  {
    image_url: homeProjectsList[12] as string,
    description: "Haums im Wald",
    css: {
      width: "5.729vw",
      right: "85.127vw",
      top: "91.493vw",
    },
  },
];
