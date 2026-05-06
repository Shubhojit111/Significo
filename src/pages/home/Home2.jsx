import React from "react";
import Card from "../../components/Card";
import CylinderButton from "../../components/CylinderButton";

const Home2 = () => {
  return (
    <div className="home2 h-screen bg-[#AEDEE0] text-black   w-full flex gap-10 px-12 py-24   relative ">
      <div className="left w-1/2  flex flex-col items-start gap-3.5">
        <p className="w-[80%] text-[2.5vh] leading-7 font-semibold">
          Significo is a leading health software creator founded on the belief
          that technology can transform healthcare to put people first. Whether
          they are employees, members, customers, or clients, we never forget
          the real people we’re designing for.
        </p>

        <h1 className="font-[flight] text-[8vh] leading-18">
          We Craft Human-Centric Health Software
        </h1>
        <button className="border-2 px-8 py-4 font-semibold text-[18px]">
          <CylinderButton text="OUR SOLUTIONS" />
        </button>
      </div>

      <div className="cards h-fit pb-20 w-[65vh] flex flex-col gap-8 -translate-y-150 ">
        <Card
          heading={"Driven by Purpose"}
          text={
            "We believe technology can dramatically improve the experience of managing health, and when crafted with empathy, intention, and expertise, impact lives at scale."
          }
        />
        <Card
          heading={"Driven by Purpose"}
          text={
            "We believe technology can dramatically improve the experience of managing health, and when crafted with empathy, intention, and expertise, impact lives at scale."
          }
        />
        <Card
          heading={"Driven by Purpose"}
          text={
            "We believe technology can dramatically improve the experience of managing health, and when crafted with empathy, intention, and expertise, impact lives at scale."
          }
        />
        <Card
          heading={"Driven by Purpose"}
          text={
            "We believe technology can dramatically improve the experience of managing health, and when crafted with empathy, intention, and expertise, impact lives at scale."
          }
        />
        {/* <Card heading={"Custom Products"} text={"We see a need and we develop a solution. Our proprietary technology is available to integrate with your systems, to license, or to customize to meet your needs."}/>
               <Card heading={"Partnerships"} text={"We partner with like-minded benefits providers, insurance, and health companies to create custom solutions and technology."}/>
               <Card heading={"Security & Compliance"} text={"Not just technology experts. Health experts. We are able to navigate both stringent regulatory environments and the complexities of technology and data."}/> */}
      </div>
    </div>
  );
};

export default Home2;
