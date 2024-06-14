import { projectImages } from "../helpers/projectImages";

interface Project {
  image_url: unknown;
  description: string;
  css: {
    width: string | number;
    height: string | number;
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
  };
}

export const projects: Project[] = [
  {
    image_url: projectImages[20],
    description: "Perfect Storm",
    css: {
      width: "244px",
      height: "372px",
      left: "846px",
      top: "792px",
    },
  },
  {
    image_url: projectImages[8],
    description: "Café con Borges",
    css: {
      width: "175px",
      height: "150px",
      left: "1130px",
      top: "357px",
    },
  },
  {
    image_url: projectImages[18],
    description: "Orvay",
    css: {
      width: "314px",
      height: "449px",
      left: "1715px",
      top: "987px",
    },
  },
  {
    image_url: projectImages[22],
    description: "Perfect Storm",
    css: {
      width: "262px",
      height: "300px",
      right: "1666px",
      top: "1095px",
    },
  },
  {
    image_url: projectImages[0],
    description: "Buque",
    css: {
      width: "294px",
      height: "449px",
      right: "1407px",
      top: "1020px",
    },
  },
  {
    image_url: projectImages[23],
    description: "Perfect Storm",
    css: {
      width: "114px",
      height: "175px",
      right: "1328px",
      top: "1124px",
    },
  },
  {
    image_url: projectImages[1],
    description: "Buque",
    css: {
      width: "601px",
      height: "458px",
      right: "1526px",
      top: "255px",
    },
  },
  {
    image_url: projectImages[21],
    description: "Perfect Storm",
    css: {
      width: "147px",
      height: "225px",
      left: "1376px",
      top: "1118px",
    },
  },

  {
    image_url: projectImages[24],
    description: "Perfect Storm",
    css: {
      width: "139px",
      height: "211px",
      left: "698px",
      top: "1337px",
    },
  },
  {
    image_url: projectImages[25],
    description: "Perfect Storm",
    css: {
      width: "195px",
      height: "298px",
      left: "1376px",
      top: "1732px",
    },
  },
  {
    image_url: projectImages[26],
    description: "Perfect Storm",
    css: {
      width: "104px",
      height: "158px",
      right: "849px",
      top: "713px",
    },
  },
  {
    image_url: projectImages[2],
    description: "Café con Borges",
    css: {
      width: "95px",
      height: "135px",

      right: "890px",
      top: "287px",
    },
  },
  {
    image_url: projectImages[3],
    description: "Café con Borges",
    css: {
      width: "376px",
      height: "538px",
      right: "261px",
      top: "187px",
    },
  },
  {
    image_url: projectImages[4],
    description: "Café con Borges",
    css: {
      width: "212px",
      height: "304px",
      left: "486px",
      top: "203px",
    },
  },
  {
    image_url: projectImages[5],
    description: "Café con Borges",
    css: {
      width: "377px",
      height: "538px",
      left: "183px",
      top: "441px",
    },
  },
  {
    image_url: projectImages[6],
    description: "Café con Borges",
    css: {
      width: "184px",
      height: "263px",
      right: "828px",
      top: "1063px",
    },
  },
  {
    image_url: projectImages[7],
    description: "Café con Borges",
    css: {
      width: "262px",
      height: "375px",
      left: "1488px",
      top: "1095px",
    },
  },

  {
    image_url: projectImages[9],
    description: "Café con Borges",
    css: {
      width: "175px",
      height: "150px",
      right: "1075px",
      top: "588px",
    },
  },
  {
    image_url: projectImages[10],
    description: "Haums im Wald",
    css: {
      width: "284px",
      height: "406px",
      right: "338px",
      top: "1063px",
    },
  },
  {
    image_url: projectImages[11],
    description: "Haums im Wald",
    css: {
      width: "626px",
      height: "421px",
      left: "385px",
      top: "1670px",
    },
  },
  {
    image_url: projectImages[12],
    description: "Haums im Wald",
    css: {
      width: "89px",
      height: "134px",
      left: "1331px",
      top: "710px",
    },
  },
  {
    image_url: projectImages[13],
    description: "Haums im Wald",
    css: {
      width: "299px",
      height: "380px",
      left: "148px",
      top: "1358px",
    },
  },
  // Orvay
  {
    image_url: projectImages[14],
    description: "Orvay",
    css: {
      width: "601px",
      height: "516px",
      right: "149px",
      top: "1670px",
    },
  },
  {
    image_url: projectImages[15],
    description: "Orvay",
    css: {
      width: "275px",
      height: "379px",
      right: "703px",
      top: "1842px",
    },
  },
  {
    image_url: projectImages[16],
    description: "Orvay",
    css: {
      width: "164px",
      height: "234px",
      right: "930px",
      top: "1670px",
    },
  },
  {
    image_url: projectImages[17],
    description: "Orvay",
    css: {
      width: "333px",
      height: "381px",
      right: "1717px",
      top: "1787px",
    },
  },

  {
    image_url: projectImages[19],
    description: "Orvay",
    css: {
      width: "99px",
      height: "141px",
      right: "1358px",
      top: "1740px",
    },
  },
];
