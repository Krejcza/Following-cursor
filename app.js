const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
  "#3d005e",
  "#48005f",
  "#60005f",
  "#680060",
  "#7c0060",
  "#830060",
  "#950f5f",
  "#9c155f",
  "#ac265e",
  "#b22c5e",
  "#c03b5d",
  "#c5415d",
  "#d1525c",
  "#d5585c"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    //třeba mám 10 kruhů - index / 10//
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    //do proměnný se uloží - ten circle[] v závorkách inkrementovaný číslo indexu. Pokud se to vyplní jako true a ten index to najde tak se provede. Pokud false nebo null tak se provede operátor OR ||  a nastaví se to na 0. Zajišťuje že animace kruhů plynule přechází z jednoho na druhej.
    x += (nextCircle.x - x) * 0.5;
    y += (nextCircle.y - y) * 0.5;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();