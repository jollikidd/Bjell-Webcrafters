"use strict";

const sheepImg1 = document.getElementById("sheepImg1");
const sheepImg2 = document.getElementById("sheepImg2");

const audio = new Audio("./audio/Sheep Sound 1.mp3");
const audio2 = new Audio("./audio/deep_sheep.mp3");
sheepImg1.addEventListener("click", () => {
  audio.play();
});

sheepImg2.addEventListener("click", () => {
  audio2.play();
});
