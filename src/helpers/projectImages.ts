export const projectImages = Object.values(
  import.meta.glob("@assets/projects/*.{png,jpg,jpeg}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);
