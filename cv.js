//EFFET PAILLETE
document.addEventListener("DOMContentLoaded", function () {
  const glitterLayer = document.querySelector(".glitterLayer");
  const numDots = 150; // Nombre de paillettes

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement("div");
    dot.classList.add("glitterDot");

    // Position aléatoire
    dot.style.top = Math.random() * 100 + "%";
    dot.style.left = Math.random() * 100 + "%";

    // Délai d'animation aléatoire
    dot.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";

    dot.style.width = dot.style.height = (Math.random() * 2 + 1) + "px";


    glitterLayer.appendChild(dot);
  }
});

