
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showannimation");
      observer.unobserve(entry.target); // Cesse d'observer cet élément
    } else {
      entry.target.classList.remove("showannimation");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));







 






