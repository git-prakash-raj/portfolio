let current = 1;
document.querySelector("#mode").addEventListener("click", () => {
  let root = document.querySelector(":root");
  let rootValue = getComputedStyle(root);

  const theme = [
    rootValue.getPropertyValue("--light"),
    rootValue.getPropertyValue("--dark"),
  ];

  const font = [
    rootValue.getPropertyValue("--whiteFont"),
    rootValue.getPropertyValue("--blackFont"),
  ];
  current = (current + 1) % 2;
  root.style.setProperty("--theme", theme[current]);
  root.style.setProperty("--primaryFont", font[current]);
});
