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
  const shadow = [
    rootValue.getPropertyValue("--darkShadow"),
    rootValue.getPropertyValue("--lightShadow"),
  ];
  const modeIcon = ["./images/icons/moonImg.svg", "./images/icons/sunImg.svg"];
  current = (current + 1) % 2;
  root.style.setProperty("--theme", theme[current]);
  root.style.setProperty("--primaryFont", font[current]);
  root.style.setProperty("--transparentBackground", trans[current]);
  root.style.setProperty("--shadow", shadow[current]);
  document.querySelector("#git-hub").src = git[current];
  document.querySelector("#linked-in").src = linked[current];
  setTimeout(() => {
    const imgElement = document.querySelector("#toggle");
    imgElement.classList.remove("rotate");

    void imgElement.offsetWidth;
    imgElement.src = modeIcon[current];
    imgElement.classList.add("rotate");
  }),
    500;
});
