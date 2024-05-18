'use strict';

const sheepImg1 = document.getElementById('sheepImg1');
const audio1 = new Audio('./audio/Sheep_Sound_1.mp3');

const sheepImg2 = document.getElementById('sheepImg2');
const audio2 = new Audio('./audio/Sheep_Sound_2.mp3');

sheepImg1.addEventListener('click', () => {
  audio1.play();
});

sheepImg2.addEventListener('click', () => {
  audio2.play();
});
