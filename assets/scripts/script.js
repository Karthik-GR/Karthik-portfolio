document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
  
    function handleScroll() {
      if (window.scrollY > 200) {
        navbar.classList.add("scrolled"); 
      } else {
        navbar.classList.remove("scrolled"); 
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  
    handleScroll();
  });