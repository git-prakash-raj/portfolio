let current = 1;
document.querySelector("#mode").addEventListener("click", () => {
  let root = document.querySelector(":root");
  let rootValue = getComputedStyle(root);

  const theme = [
    rootValue.getPropertyValue("--light"),
    rootValue.getPropertyValue("--dark"),
  ];

  const font = [
    rootValue.getPropertyValue("--blackFont"),
    rootValue.getPropertyValue("--whiteFont"),
  ];

  const trans = [
    rootValue.getPropertyValue("--darkTransparent"),
    rootValue.getPropertyValue("--lightTransparent"),
  ];
  const git = [
    "./images/icons/github-mark.svg",
    "./images/icons/github-mark-white.svg",
  ];
  const linked = [
    "./images/icons/linkedin-light-com.svg",
    "./images/icons/linkedin-dark-com.svg",
  ];
  const modeIcon = ["./images/icons/moonImg.svg", "./images/icons/sunImg.svg"];
  current = (current + 1) % 2;
  root.style.setProperty("--theme", theme[current]);
  root.style.setProperty("--primaryFont", font[current]);
  root.style.setProperty("--transparentBackground", trans[current]);
  document.querySelector("#git-hub").src = git[current];
  document.querySelector("#linked-in").src = linked[current];
  document.querySelector("#toggle").src = modeIcon[current];
  console.log(document.querySelector("#toggle").src);
});
