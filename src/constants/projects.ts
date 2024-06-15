import { projectImages } from "../helpers/projectImages";

interface Project {
  image_url: string;
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
    image_url: projectImages[20] as string,
    description: "Perfect Storm",
    css: {
      width: "244px",
      height: "372px",
      left: "804px",
      top: "723px",
    },
  },
  {
    image_url: projectImages[8] as string,
    description: "Café con Borges",
    css: {
      width: "260px",
      height: "223px",
      left: "1011px",
      top: "537px",
    },
  },
  {
    image_url: projectImages[18] as string,
    description: "Orvay",
    css: {
      width: "314px",
      height: "449px",
      left: "1715px",
      top: "987px",
    },
  },
  {
    image_url: projectImages[22] as string,
    description: "Perfect Storm",
    css: {
      width: "262px",
      height: "300px",
      left: "1985px",
      top: "1208px",
    },
  },
  {
    image_url: projectImages[0] as string,
    description: "Buque",
    css: {
      width: "294px",
      height: "449px",
      right: "1344px",
      top: "908px",
    },
  },
  {
    image_url: projectImages[23] as string,
    description: "Perfect Storm",
    css: {
      width: "114px",
      height: "175px",
      right: "1212px",
      top: "1045px",
    },
  },
  {
    image_url: projectImages[1] as string,
    description: "Buque",
    css: {
      width: "601px",
      height: "458px",
      right: "1612px",
      top: "302px",
    },
  },
  {
    image_url: projectImages[21] as string,
    description: "Perfect Storm",
    css: {
      width: "147px",
      height: "225px",
      left: "1264px",
      top: "1020px",
    },
  },

  {
    image_url: projectImages[24] as string,
    description: "Perfect Storm",
    css: {
      width: "105px",
      height: "159px",
      left: "1164px",
      top: "1422px",
    },
  },
  {
    image_url: projectImages[25] as string,
    description: "Perfect Storm",
    css: {
      width: "195px",
      height: "298px",
      left: "1237px",
      top: "1557px",
    },
  },
  {
    image_url: projectImages[26] as string,
    description: "Perfect Storm",
    css: {
      width: "104px",
      height: "158px",
      right: "849px",
      top: "713px",
    },
  },
  {
    image_url: projectImages[2] as string,
    description: "Café con Borges",
    css: {
      width: "95px",
      height: "135px",
      right: "890px",
      top: "287px",
    },
  },
  {
    image_url: projectImages[3] as string,
    description: "Café con Borges",
    css: {
      width: "376px",
      height: "538px",
      right: "261px",
      top: "187px",
    },
  },
  {
    image_url: projectImages[4] as string,
    description: "Café con Borges",
    css: {
      width: "212px",
      height: "304px",
      left: "486px",
      top: "203px",
    },
  },
  {
    image_url: projectImages[5] as string,
    description: "Café con Borges",
    css: {
      width: "377px",
      height: "538px",
      left: "183px",
      top: "441px",
    },
  },
  {
    image_url: projectImages[6] as string,
    description: "Café con Borges",
    css: {
      width: "184px",
      height: "263px",
      right: "828px",
      top: "1063px",
    },
  },
  {
    image_url: projectImages[7] as string,
    description: "Café con Borges",
    css: {
      width: "262px",
      height: "375px",
      left: "1432px",
      top: "1094px",
    },
  },

  {
    image_url: projectImages[9] as string,
    description: "Café con Borges",
    css: {
      width: "309px",
      height: "265px",
      right: "929px",
      top: "612px",
    },
  },
  {
    image_url: projectImages[10] as string,
    description: "Haums im Wald",
    css: {
      width: "284px",
      height: "406px",
      right: "338px",
      top: "1063px",
    },
  },
  {
    image_url: projectImages[11] as string,
    description: "Haums im Wald",
    css: {
      width: "626px",
      height: "421px",
      left: "385px",
      top: "1670px",
    },
  },
  {
    image_url: projectImages[12] as string,
    description: "Haums im Wald",
    css: {
      width: "89px",
      height: "134px",
      left: "1246px",
      top: "732px",
    },
  },
  {
    image_url: projectImages[13] as string,
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
    image_url: projectImages[14] as string,
    description: "Orvay",
    css: {
      width: "601px",
      height: "516px",
      right: "149px",
      top: "1670px",
    },
  },
  {
    image_url: projectImages[15] as string,
    description: "Orvay",
    css: {
      width: "275px",
      height: "379px",
      right: "703px",
      top: "1842px",
    },
  },
  {
    image_url: projectImages[16] as string,
    description: "Orvay",
    css: {
      width: "164px",
      height: "234px",
      right: "930px",
      top: "1670px",
    },
  },
  {
    image_url: projectImages[17] as string,
    description: "Orvay",
    css: {
      width: "333px",
      height: "381px",
      right: "1535px",
      top: "1690px",
    },
  },

  {
    image_url: projectImages[19] as string,
    description: "Orvay",
    css: {
      width: "99px",
      height: "141px",
      right: "1471px",
      top: "1581px",
    },
  },
];
