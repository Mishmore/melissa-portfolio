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
  width: "17.4rem",
  height: "23.1rem",
};

const horizontalM = {
  width: "28.4rem",
  height: "37.8rem",
};

const horizontalS = {
  width: "39.8rem",
  height: "53rem",
};

export const projects: Project[] = [
  {
    image_url: "https://picsum.photos/seed/picsum/750/1000",
    description: "Proyecto 1",
    css: {
      ...verticalL,
      left: "0.1rem",
      top: "29.7rem",
    },
  },
  {
    image_url: "https://picsum.photos/seed/picsum/1000/1000",
    description: "Proyecto 2",
    css: {
      ...square,
      left: "35rem",
      top: "10.7rem",
    },
  },
  {
    image_url: "https://picsum.photos/seed/picsum/750/1000",
    description: "Proyecto 3",
    css: { ...horizontalM, left: "116rem", top: "58.5rem" },
  },
  {
    image_url: "https://picsum.photos/seed/picsum/750/1000",
    description: "Proyecto 4",
    css: {
      ...verticalS,
      left: "95.6rem",
      top: "105.8rem",
    },
  },
  {
    image_url: "https://picsum.photos/seed/picsum/750/1000",
    description: "Proyecto 5",
    css: {
      ...verticalS,
      left: "141.9rem",
      top: "45.5rem",
    },
  },
  {
    image_url: "https://picsum.photos/seed/picsum/750/1000",
    description: "Proyecto 6",
    css: {
      ...verticalL,
      left: "138.9rem",
      top: "86.9rem",
    },
  },
  {
    image_url: "https://picsum.photos/seed/picsum/750/1000",
    description: "Proyecto 7",
    css: {
      ...horizontalM,
      left: "171.9rem",
      top: "122.7rem",
    },
  },
  {
    image_url: "https://picsum.photos/seed/picsum/750/1000",
    description: "Proyecto 8",
    css: {
      ...verticalL,
      left: "169.9rem",
      top: "105.8rem",
    },
  },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/200/300",
  //   description: "Proyecto 9",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/200/300",
  //   description: "Proyecto 10",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/750/1000",
  //   description: "Proyecto 21",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/750/1000",
  //   description: "Proyecto 22",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/1024/768",
  //   description: "Proyecto 23",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/1024/768",
  //   description: "Proyecto 24",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/1024/768",
  //   description: "Proyecto 25",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/300/300",
  //   description: "Proyecto 26",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/300/300",
  //   description: "Proyecto 27",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/200/300",
  //   description: "Proyecto 28",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/200/300",
  //   description: "Proyecto 29",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/200/300",
  //   description: "Proyecto 20",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/750/1000",
  //   description: "Proyecto 11",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/750/1000",
  //   description: "Proyecto 12",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/1024/768",
  //   description: "Proyecto 13",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/1024/768",
  //   description: "Proyecto 14",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/1024/768",
  //   description: "Proyecto 15",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/300/300",
  //   description: "Proyecto 16",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/300/300",
  //   description: "Proyecto 17",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/200/300",
  //   description: "Proyecto 18",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/200/300",
  //   description: "Proyecto 19",
  // },
  // {
  //   image_url: "https://picsum.photos/seed/picsum/200/300",
  //   description: "Proyecto 30",
  // },
];
