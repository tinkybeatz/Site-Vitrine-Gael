import { TweenMax, Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const vertFadeInPres = (item: any, duration: number, delay: number) => {
  TweenMax.fromTo(
    item,
    duration,
    {
      opacity: 0,
      y: -40,
    },
    {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
    }
  ).delay(delay);
};

export const vertFadeInScroll = (item: any, translateXStart: number) => {
  gsap.fromTo(
    item,
    {
      opacity: 0,
      translateX: translateXStart,
    },
    {
      opacity: 1,
      translateX: 0,
      duration: 3,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: item,
        once: true,
      },
    }
  );
};

export const vertFadeInDeploy = (content, heightHere) => {
  // Vérifie si la div de contenu est déjà visible ou cachée
  const isVisible = content.current.style.display === "block";
  console.log(heightHere);

  if (!isVisible) {
    // Animation d'ouverture de la div de contenu avec GSAP
    gsap.to(content.current, {
      height: "auto",
      marginTop: "14px",
      opacity: 1,
      duration: 0.5,
      ease: Power3.easeIn,
      display: "block",
    });
  } else {
    // Animation de fermeture de la div de contenu avec GSAP
    gsap.to(content.current, {
      height: 0,
      marginTop: "0px",
      opacity: 0,
      duration: 0.5,
      ease: Power3.easeOut,
      display: "none",
    });
  }
};
