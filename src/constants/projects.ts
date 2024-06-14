import { projectImages } from "../helpers/projectImages";

interface Project {
  image_url: string;
  description: string;
  css: {
    width: string | number;
    height: string | number;
    top: string | number;
    left: string | number;
  };
}

const verticalXL = {
  width: "39rem",
  height: "51.9rem",
};

const verticalL = {
  width: "28.4rem",
  height: "37.8rem",
};

const verticalM = {
  width: "19.3rem",
  height: "25.7rem",
};

const verticalS = {
  width: "11.9rem",
  height: "15.8rem",
};

const square = {
  width: "23rem",
  height: "23rem",
};

const horizontalL = {
  width: "52rem",
  height: "39rem",
};

const horizontalM = {
  width: "28.4rem",
  height: "37.8rem",
};

const horizontalS = {
  width: "23rem",
  height: "19rem",
};

export const projects: Project[] = [
  // Buque
  {
    image_url: projectImages[0],
    description: "Buque",
    css: {
      ...verticalL,
      left: "204rem",
      top: "86rem",
    },
  },
  {
    image_url: projectImages[1],
    description: "Buque",
    css: {
      ...horizontalL,
      left: "206rem",
      top: "153rem",
    },
  },
  // Cafe con Borges
  {
    image_url: projectImages[2],
    description: "Café con Borges",
    css: { ...verticalS, left: "272rem", top: "105rem" },
  },
  {
    image_url: projectImages[3],
    description: "Café con Borges",
    css: {
      ...verticalM,
      left: "114rem",
      top: "153rem",
    },
  },
  {
    image_url: projectImages[4],
    description: "Café con Borges",
    css: {
      ...verticalS,
      left: "53rem",
      top: "14rem",
    },
  },
  {
    image_url: projectImages[5],
    description: "Café con Borges",
    css: {
      ...verticalL,
      left: "19rem",
      top: "33rem",
    },
  },
  {
    image_url: projectImages[6],
    description: "Café con Borges",
    css: {
      ...horizontalM,
      left: "176rem",
      top: "15rem",
    },
  },
  {
    image_url: projectImages[7],
    description: "Café con Borges",
    css: {
      ...verticalS,
      left: "132rem",
      top: "38rem",
    },
  },
  {
    image_url: projectImages[8],
    description: "Café con Borges",
    css: {
      ...horizontalS,
      left: "183rem",
      top: "88rem",
    },
  },
  {
    image_url: projectImages[9],
    description: "Café con Borges",
    css: {
      ...horizontalS,
      left: "148rem",
      top: "122rem",
    },
  },
  // Haums im Wald
  {
    image_url: projectImages[10],
    description: "Haums im Wald",
    css: {
      ...verticalL,
      left: "138rem",
      top: "84rem",
    },
  },
  {
    image_url: projectImages[11],
    description: "Haums im Wald",
    css: {
      ...horizontalM,
      left: "86rem",
      top: "48rem",
    },
  },
  {
    image_url: projectImages[12],
    description: "Haums im Wald",
    css: {
      ...verticalS,
      left: "92rem",
      top: "95rem",
    },
  },
  {
    image_url: projectImages[13],
    description: "Haums im Wald",
    css: {
      ...square,
      left: "57rem",
      top: "103rem",
    },
  },
  // Orvay
  {
    image_url: projectImages[14],
    description: "Orvay",
    css: {
      ...horizontalM,
      left: "280rem",
      top: "117rem",
    },
  },
  {
    image_url: projectImages[15],
    description: "Orvay",
    css: {
      ...horizontalM,
      left: "284rem",
      top: "49rem",
    },
  },
  {
    image_url: projectImages[16],
    description: "Orvay",
    css: {
      ...verticalL,
      left: "250rem",
      top: "22rem",
    },
  },
  {
    image_url: projectImages[17],
    description: "Orvay",
    css: {
      ...square,
      left: "234rem",
      top: "24rem",
    },
  },
  {
    image_url: projectImages[18],
    description: "Orvay",
    css: {
      ...verticalL,
      left: "315rem",
      top: "139rem",
    },
  },
  {
    image_url: projectImages[19],
    description: "Orvay",
    css: {
      ...verticalM,
      left: "326rem",
      top: "17rem",
    },
  },
  // Perfect storm
  {
    image_url: projectImages[20],
    description: "Perfect Storm",
    css: {
      ...verticalS,
      left: "342rem",
      top: "43rem",
    },
  },
  {
    image_url: projectImages[21],
    description: "Perfect Storm",
    css: {
      ...verticalL,
      left: "191rem",
      top: "187rem",
    },
  },
  {
    image_url: projectImages[22],
    description: "Perfect Storm",
    css: {
      ...square,
      left: "169rem",
      top: "105.8rem",
    },
  },
  {
    image_url: projectImages[23],
    description: "Perfect Storm",
    css: {
      ...verticalS,
      left: "90rem",
      top: "169rem",
    },
  },
  {
    image_url: projectImages[24],
    description: "Perfect Storm",
    css: {
      ...verticalM,
      left: "290rem",
      top: "157rem",
    },
  },
  {
    image_url: projectImages[25],
    description: "Perfect Storm",
    css: {
      ...verticalM,
      left: "98rem",
      top: "181rem",
    },
  },
  {
    image_url: projectImages[26],
    description: "Perfect Storm",
    css: {
      ...horizontalS,
      left: "27rem",
      top: "161rem",
    },
  },
];
