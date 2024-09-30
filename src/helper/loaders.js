const showSmallLoader = () => {
  const loader = document.getElementById("sm-loader");
  loader.style.visibility = "visible";
  loader.style.opacity = 1;
};

const hideSmallLoader = () => {
  const loader = document.getElementById("sm-loader");
  loader.style.visibility = "hidden";
  loader.style.opacity = 0;
};

export { showSmallLoader, hideSmallLoader };
