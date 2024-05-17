"use strict";

const sheepImg1 = document.getElementById("sheepImg1");

const audio = new Audio("./audio/ Sheep Sound 1.mp3");

sheepImg1.addEventListener("click", () => {
  audio.play();
});
