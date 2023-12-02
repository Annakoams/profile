const navbar = document.getElementById("navbarSite");
const scrollTopButton = document.getElementById("scroll-top-button");
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
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 3; i++) {
        spots.push(new Particle());
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

animate();











// annimation dapparition des ellements da la dom

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("showannimation");
      } else {
        entry.target.classList.remove("showannimation");
      }
    });
  });


const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el))





// navbar animaton

window.onscroll = function() {
    if (window.pageYOffset > 200) {
        navbar.classList.remove("bg-transparent", "navbar-dark");
        navbar.classList.add("bg-dark", "navbar-dark");
        scrollTopButton.classList.add("show");
        const links = document.querySelectorAll(".navbar-nav .nav-link");
        links.forEach(link => {
            link.style.color = "#c7d6e58c";
        });
    } else {
        navbar.classList.add("bg-transparent", "navbar-dark");
        navbar.classList.remove("bg-light", "navbar-light");
        scrollTopButton.classList.remove("show");
        const links = document.querySelectorAll(".navbar-nav .nav-link");
        links.forEach(link => {
            link.style.color = "";
        });
    }
}

// navbar animaton

window.onscroll = function() {
    console.log("window scrolled");
    const scrollPosition = window.scrollY;
  
    links.forEach((link, index) => {
        const section = sections[index];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
  
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
  }
  // Ajoutez un écouteur d'événements pour chaque lien de navigation
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Empêcher le comportement de lien par défaut
  
      // Obtenez l'ID de la section associée à ce lien
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      // Faites défiler la page vers la section
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });


 var r = document.querySelector('body');


 function changeColor(color, colorhover) { 
   r.style.setProperty('--color-accent', color);
  r.style.setProperty('--color-accent-hover', colorhover);
 }  
 function ChangeColorFromPicker(){
    let color = document.getElementById("colorAccent");
    let colorHover = document.getElementById("colorHover");

    changeColor(color.value, colorHover.value);
}


function ShowPanelColor(){
    let panel = document.getElementById("color-setter");
    if(panel.style.left == "0px"){
        panel.style.left = "-100px";
    }
    else{
        panel.style.left = "0px";
    }
}

var map = L.map('map').setView([43.212601, 2.355970], 5);{
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([43.212601, 2.355970]).addTo(map)
        .bindPopup('Je suis pas loin !')
        .openPopup();  
}



function expandTextarea(id) {
        document.getElementById(id).addEventListener('keyup', function() {
            this.style.overflow = 'hidden';
            this.style.height = 0;
            this.style.height = this.scrollHeight + 'px';
        }, false);
 }
    
expandTextarea('exampleFormControlTextarea1');       