import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const bg = () => {
  const els = document.querySelectorAll(".color-section");

  els.forEach((el) => {
    let color = el.dataset.color;

    gsap.to("body", {
      backgroundColor: color,

      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "bottom center",
        toggleActions: "play pause resume reset",
        markers: true,
      },
    });
  });
};
