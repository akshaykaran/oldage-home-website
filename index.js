// ==================NAVBAR LINKS ACTIVE STATE===============================
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// ======================NAV HAMBURGER MENU OPEN STATE=======================

function toggleMenu() {
  const nav = document.querySelector("nav ul");
  const hamburger = document.querySelector(".hamburger");
  nav.classList.toggle("active");
  hamburger.classList.toggle("menu-open");
}

// ===================FORM VALIDATION ======================================

const form = document.getElementById("contactForm");
const inputs = form.querySelectorAll("input, select");

function validateInput(input) {
  const parent = input.closest(".form-group") || input.parentNode;
  // const parent = input.parentNode;
  // const parent = input.closest(".form-group");
  const existingTooltip = parent.querySelector(".tooltip");
  if (existingTooltip) existingTooltip.remove();

  if (!input.value.trim()) {
    input.style.border = "2px solid #ff6b6b";

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerHTML =
      "<div class='tooltip-arrow'></div>This field can’t be empty.<br>Please fill it in.";
    parent.appendChild(tooltip);
  } else {
    input.style.border = "1px solid #fff";
  }
}

inputs.forEach((input) => {
  input.addEventListener("blur", () => validateInput(input));
});

form.addEventListener("submit", function (e) {
  let valid = true;
  document.querySelectorAll(".tooltip").forEach((tip) => tip.remove());

  inputs.forEach((input) => {
    validateInput(input);
    if (!input.value.trim()) valid = false;
  });

  if (!valid) {
    e.preventDefault();
  }
});

// =================TESTIMONIAL SLIDER=====================================

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

function changeSlide(step) {
  currentSlide += step;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
}

// ==========================VIDEO PLAYER=================================

document.getElementById("playBtn").addEventListener("click", function () {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("width", "900");
  iframe.setAttribute("height", "600");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/oRDRfikj2z8?autoplay=1"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  iframe.setAttribute("allowfullscreen", true);

  document.getElementById("videoWrapper").innerHTML = "";
  document.getElementById("videoWrapper").appendChild(iframe);
});
