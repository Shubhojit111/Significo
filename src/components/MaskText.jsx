import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MaskText = ({ lines }) => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".hero-text-line", {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      opacity: 0,
    }, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".home",
        start: "top -60%", // Starts later (after scrolling down 25% of the viewport)
        end: "top -90%",
        scrub: 1,
      }
    });
  }, { scope: container });

  return (
    <h1 ref={container} className="text-center text-[3vh] p-4 flex flex-col">
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <span 
            className="hero-text-line inline-block" 
          >
            {line}
          </span>
        </div>
      ))}
    </h1>
  );
};

export default MaskText;