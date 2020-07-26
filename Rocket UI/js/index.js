/**
 * Generates the stars element
 * giving random size, animation duration and height
 */
function animateStars() {
  const count = 130;
  const scene = document.querySelector(".scene");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let duration = Math.random() * 1;
    let height = Math.random() * 100;
    let left = Math.floor(Math.random() * window.innerWidth);

    star.style.left = left + "px";
    star.style.width = 1 + "px";
    star.style.height = 50 + height + "px";
    star.style.animationDuration = duration + "s";

    scene.appendChild(star);
    i++;
  }
}
animateStars();
