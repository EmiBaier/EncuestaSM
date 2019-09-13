var preguntas = {};

const contenedor = document.getElementById("contenedor");
const form = document.getElementsByTagName("form")[0];

const intro = document.getElementById("inicio");
intro.style.display = "block";

const next = document.getElementById("siguiente");
next.addEventListener("click", () => {
  intro.style.display = "none";
  if(!preguntas.hasOwnProperty("respondidas")){
    preguntas.respondidas = 0;
    next.textContent = "SIGUIENTE";
    form.style.display = "block";
    form.querySelector("article").style.display = "block";
    contenedor.classList.add("encuesta");
  } else {
    form.querySelectorAll("article")[preguntas.respondidas++].style.display = "none";
    form.querySelectorAll("article")[preguntas.respondidas].style.display = "block";
  }
});
