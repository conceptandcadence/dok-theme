import { gsap } from 'gsap';

const text = document.querySelector('.text .text-inner');
const track = document.querySelector('.track');
const shape = document.querySelector('.shape .rotate');

const tl = gsap.timeline({ paused: true });

tl.to(shape, {
  duration: 1,
  scale: 30,
  rotate: 240,
  ease: 'Expo.easeIn',
}).to(
  text,
  {
    duration: 1,
    translateX: 0,
    ease: 'Power2.easeIn',
  },
  0,
);

window.addEventListener(
  'scroll',
  () => {
    const progress =
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight);

    tl.progress(progress);

    document.body.style.setProperty('--scroll', progress);
  },
  false,
);
