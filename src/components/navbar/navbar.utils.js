const changeBackground = (setNavbarColor) => {
  const section = document.getElementById("target-section");

  if (window.scrollY > section.offsetTop) {
    setNavbarColor(true);
    return;
  }

  setNavbarColor(false);
};

export default changeBackground;
