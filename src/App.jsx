



import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.7,
      x: "-50%",
      bottom: "0%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 0.9,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", { x: `${xMove * 0.4}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 1.7 });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">Rockstar</h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-1 left-1/2 translate-x-1/1 scale-[0.8] rotate-[-10deg]">
                <h1 className="text-[9rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[9rem] leading-none ml-20">theft</h1>
                <h1 className="text-[9rem] leading-none -ml-40">auto</h1>
              </div>
              <img
               className="absolute character top-1 left-1/2 -translate-x-1/2 bottom-0 scale-[0.7] rotate-[-5deg]"
               src="./girlbg.png"
               alt=""
               /> 

            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-4 items-center">
                  <i className="text-2xl ri-arrow-down-line"></i>
                  <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll Down</h3>
                </div>
                <div className="flex gap-5 items-center">
                  <img src="./ps5.png" className="h-[35px]" alt="ps5" />
                  <img src="./xbox.png" className="h-[35px]" alt="xbox" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-black pt-20 pb-32">
            <div className="cntnr flex flex-col md:flex-row justify-center items-center text-white gap-12 w-full max-w-7xl mx-auto">
              <div className="limg relative w-full md:w-1/2 h-full flex justify-center items-center">
                <img
                  className="scale-[1.0]"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-full md:w-[40%] py-10">
                <h1 className="text-4xl md:text-6xl leading-tight">Still Running,</h1>
                <h1 className="text-4xl md:text-6xl leading-tight">Not Hunting</h1>
                <p className="mt-6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus, asperiores nam, omnis inventore nesciunt a architecto eveniet saepe, ducimus necessitatibus at voluptate.</p>
                <p className="mt-4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius illum fugit eligendi nesciunt quia similique velit excepturi soluta tenetur illo repellat consectetur laborum eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum autem sapiente.</p>
                <button className="bg-yellow-500 px-6 py-4 text-black mt-8 text-xl">Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;