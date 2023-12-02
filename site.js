const navbar = document.getElementById("navbarSite");
const scrollTopButton= document.getElementById('scroll-top-button');
const links = document.querySelectorAll(".navbar-nav .nav-link");
const sections = document.querySelectorAll("section");





// navbar animation
window.onscroll = function() {
  if (window.pageYOffset > 200) {
      navbar.classList.remove("bg-transparent", "navbar-dark");
      navbar.classList.add("bg-dark", "navbar-dark");
      scrollTopButton.classList.add("show");
      links.forEach(link => {
          link.style.color = "#c7d6e58c";
      });
  } else {
      navbar.classList.add("bg-transparent", "navbar-dark");
      navbar.classList.remove("bg-light", "navbar-light");
      scrollTopButton.classList.remove("show");
      links.forEach(link => {
          link.style.color = "";
      });
  }
};

// bouton de retour en haut de la page
scrollTopButton.addEventListener('click', () => {
  // Faites défiler la page vers le haut
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// mouse effect
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let spots = [];
let hue = 0;

const mouse = {
    x: undefined,
    y: undefined,
};

canvas.addEventListener("mousemove", function (event) {
    if (event.target === canvas) {
        mouse.x = event.x;
        mouse.y = event.y;
        for (let i = 0; i < 3; i++) {
            spots.push(new Particle());
        }
    }
});

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 0.25 + 0.25;
        this.speedX = Math.random() * 0.5 - 0.5;
        this.speedY = Math.random() * 0.5 - 0.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.01;
    }
    draw() {
        ctx.globalAlpha = 0.1; // Opacité réduite
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.globalAlpha = 1; // Réinitialiser l'opacité
    }
}

function handleParticle() {
    for (let i = 0; i < spots.length; i++) {
        spots[i].draw();
        spots[i].update();
        for (let j = 0; j < spots.length; j++) {
            const dx = spots[i].x - spots[j].x;
            const dy = spots[i].y - spots[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 90) {
                ctx.beginPath();
                ctx.strokeStyle = spots[i].color;
                ctx.lineWidth = spots[i].size / 10;
                ctx.moveTo(spots[i].x, spots[i].y);
                ctx.lineTo(spots[j].x, spots[j].y);
                ctx.stroke();
            }
        }
        if (spots[i].size <= 0.3) {
            spots.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticle();
    hue++;
    requestAnimationFrame(animate);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

window.addEventListener("mouseout", function () {
    mouse.x = undefined;
    mouse.y = undefined;
});
canvas.addEventListener("click", function (event) {
    // event.preventDefault(); // Empêche le comportement par défaut
    // Votre code de gestion du clic ici (si nécessaire)
});

animate();  


// annimation d'apparition des ellements da la dom

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add("showannimation");
      } else {
        entry.target.classList.remove("showannimation");
      }
    });
  });


const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el))




// animation phrases

  document.addEventListener("DOMContentLoaded", function() {
    const phrases = document.querySelectorAll(".phrase");

     // Initialise la première phrase avec la classe "visible"
    phrases[0].classList.add("visible");



    window.addEventListener("scroll", function() {
      
      let visibleIndex = -1;
  
      phrases.forEach(function(phrase, index) {
        const position = phrase.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        if (index === 0 || (position.top < windowHeight * 0.50 && position.bottom >= windowHeight * 0.30)) {
          phrase.classList.add("visible");
          visibleIndex = index;
        } else {
          phrase.classList.remove("visible");
        }
  
        // Ajoutez cette condition pour gérer le bas de la fenêtre
        if (position.top > 0 && position.bottom <= windowHeight * 0.40 && position.bottom >= windowHeight) {
          phrase.classList.remove("visible");
        }
      });
  
    
    // Cachez toutes les phrases sauf celle visible
    phrases.forEach(function(phrase, index) {
      if (index !== visibleIndex) {
        phrase.classList.remove("visible");
      }
    });
    });
  });











 






