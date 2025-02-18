document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
  
    // Function to handle scroll event
    function handleScroll() {
      if (window.scrollY > 200) {
        navbar.classList.add("scrolled"); // Add 'scrolled' class when scrolled down
      } else {
        navbar.classList.remove("scrolled"); // Remove 'scrolled' class when at the top
      }
    }
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Call the function once to set the initial state
    handleScroll();
  });