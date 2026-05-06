import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Home1 from "./Home1";
import CylinderButton from "../../components/CylinderButton";
import ScrollToTopBtn from "../../components/ScrollToTopBtn";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 100px
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    var tl = gsap.timeline();

    const home1animation = () => {
      tl.to(".video", {
        scrollTrigger: {
          trigger: ".home",
          // markers:true,
          start: "top top",
          scrub: true,
          pin: true,
        },
        "--clip": "1.5%",
        // duration: 3,
      });

      tl.to(".video", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".video",
          // markers:true,
          start: "95% 2.5%",
          end: "95.5% 2.5%",
          scrub: true,
        },
        ease: "none",
      });

      tl.from(".lines", {
        scrollTrigger: {
          trigger: ".video",
          scrub: true,
        },
        power: "none",
        scale: 30,
      });

      // tl.from(".line1", {
      //  scrollTrigger: {
      //     trigger: "body",
      //     // markers:true,
      //     start:"50% 57%",
      //     scrub: 2,
      //   },
      //   x: 1000,
      //   // duration:0.5,
      //   power: "none" ,
      // })

      // tl.from(".line2", {
      //  scrollTrigger: {
      //     trigger: ".line2",
      //     markers:true,
      //     start:"top 10%",
      //     // end:"top top",
      //     scrub: 2,
      //   },
      //   x: -1000,
      //   power: "none",
      // })

      // gsap.from(".home .top",{
      //   duration:2,
      //   opacity:0,
      //   repeat:-1
      // })
    };

    const home2animation = () => {
      tl.from(".left ", {
        y: 80,
        scrollTrigger: {
          trigger: ".home2",
          // markers:true,
          pin: true,
          scrub: 2,
        },
        ease: "power3",
      });

      tl.from(".cards", {
        duration: 1,
        delay: 0.5,
        // repeat:5,
        y: 630,
        scrollTrigger: {
          // markers:true,
          trigger: ".cards",
          // start:"top 95%",
          end: "90% bottom",
          scrub: 2,
        },
        ease: "none",
      });

      const card = document.querySelectorAll(".card");

      card.forEach((elem) => {
        tl.to(
          elem,
          {
            scrollTrigger: {
              trigger: elem,
              // scroller:body,
              // markers: true,
              scrub: 2,
              start: "top 80%",
              end: "top 80%",
            },
            scaleX: 1.05,
            gap: "20px",
            backgroundColor: "#111",
            color: "#AEDEE0",
          },
          ["s"],
        );
      });
    };

    const home3animation = () => {
      tl.to(".home3", {
        scrollTrigger: {
          trigger: ".home3",
          // markers:true,
          scrub: 2,
          pin: true,
        },

        x: -4560,
      });
    };

    const home4animation = () => {
      const left = document.querySelector(".leftpara4");
      let leftwords = "";
      left.textContent.split(" ").forEach((e) => {
        if (e === " ") {
          leftwords = leftwords + `<span class="">&nbsp;</span>`;
        } else {
          leftwords = leftwords + `<span class="inline-block mr-2">${e}</span>`;
        }
      });

      left.innerHTML = leftwords;
      console.log(left);

      gsap.from(".leftpara4 span", {
        opacity: 0.2,
        // duration:1,
        stagger: 0.05,
        color: "#2544EE",
        scrollTrigger: {
          trigger: ".leftpara4 span",
          scrub: 2,
          // markers:true,
          start: "top 75%",
          end: "top top",
        },
      });

      const right = document.querySelector(".rightpara4");
      let rightwords = "";
      right.textContent.split(" ").forEach((e) => {
        if (e === " ") {
          rightwords = rightwords + `<span class="">&nbsp;</span>`;
        } else {
          rightwords =
            rightwords + `<span class="inline-block mr-2">${e}</span>`;
        }
      });

      right.innerHTML = rightwords;
      console.log(right);

      gsap.from(".rightpara4 span", {
        opacity: 0.2,
        // duration:1,
        stagger: 0.05,
        color: "#704B98",
        scrollTrigger: {
          trigger: ".rightpara4 span",
          scrub: 2,
          // markers:true,
          start: "top 75%",
          end: "top top",
        },
      });
    };

    const home5animation = () => {
      const member = document.querySelectorAll(".member");

      member.forEach((e) => {
        const img = e.querySelector("img");

        e.addEventListener("mouseover", () => {
          gsap.to(
            img,
            {
              scale: 1.2,
              opacity: 1,
              ease: "power3",
              // duration:0.5,
            },
            "a",
          );

          gsap.to(
            e,
            {
              scale: 1.05,

              backgroundColor: "#4e65d8",
              color: "#fff",
            },
            "a",
          );
        });

        e.addEventListener("mouseleave", () => {
          gsap.to(img, {
            // scale:1.2,
            opacity: 0,
            // duration:0.5,
          });

          gsap.to(
            e,
            {
              scale: 1,

              backgroundColor: "#fff",
              color: "#111",
            },
            "a",
          );
        });
      });
    };

    home1animation();
    home2animation();
    home3animation();
    home4animation();
    home5animation();
  });

  return (
    <div className="overflow-hidden relative">
      <div
        className={`fixed bottom-5 right-5 z-50 transition-all duration-500 transform ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <ScrollToTopBtn onClick={scrollToTop} />
      </div>
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
    </div>
  );
};

export default Home;
