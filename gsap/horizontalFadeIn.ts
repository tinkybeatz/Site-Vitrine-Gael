import { TweenMax, Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const horFadeInPres = (item: any, duration: number, delay: number) => {
  TweenMax.fromTo(
    item,
    duration,
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      ease: Power3.easeOut,
    }
  ).delay(delay);
};

export const horFadeInScroll = (item: any, translateYStart: number) => {
  gsap.fromTo(
    item,
    {
      opacity: 0,
      translateY: translateYStart,
    },
    {
      opacity: 1,
      translateY: 0,
      duration: 1,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: item,
        once: true,
      },
    }
  );
};
