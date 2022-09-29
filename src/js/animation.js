import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {
  gsap.to("#area01 .col", {
    rotation: 360, // 180度回転する
    duration: 5, // 3秒間アニメーションする
    opacity: 1,
    scrollTrigger: {
      trigger: "#area01",
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers: true,
    },
  });

  gsap.fromTo(
    "#area02 .col",
    {
      y: 100, // x軸方向に500px移動する
      opacity: 0,
    },
    {
      y: 0,
      duration: 2, // 3秒間アニメーションする
      opacity: 1,
      scrollTrigger: {
        trigger: "#area02",
        start: "top center",
        end: "bottom center",
        markers: true,
      },

      stagger: {
        from: "start", //左側から
        amount: 0.5, // 0.8秒おきに
      },
    }
  );

  gsap.fromTo(
    "#area03 .col",
    {
      x: 100, // x軸方向に500px移動する
      opacity: 0,
    },
    {
      x: 0,
      duration: 3, // 3秒間アニメーションする
      opacity: 1,
      scrollTrigger: {
        trigger: "#area03",
        start: "top center",
        end: "bottom center",
        markers: true,
      },
    }
  );
};
