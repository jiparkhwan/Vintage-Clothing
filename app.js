const navSlide = () => {
  const pizza = document.querySelector(".pizza");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  pizza.addEventListener("click", () => {
    //toggling the nav bar
    nav.classList.toggle("nav-active");

    /*
!animating the links
!can easily animate each link from here
      !looping so that it animates the delay even
        !when you click the burger bar multiple times
      */
    navLinks.forEach((link, index) => {
      if (link.style.animation == true) {
        link.style.animations = "";
      } else {
        link.style.animation =
          "navLinkFade 0.5s ease fowards ${index / 7 + 1.5}s";
      }
    });

    //Burger animation
    pizza.classList.toggle("toggle");
  });
};
navSlide();
