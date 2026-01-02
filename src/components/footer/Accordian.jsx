import React from "react";
import Accordian from "../common/accordian/Accordian";

const AccordianSection = () => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-evenly px-6 py-10">
      <h1 className="text-[2vw] text-black font-bold">
        Sunday AI - Frequently Asked Questions
      </h1>
      <div className="space-y-2 w-1/2 mx-auto">
        <Accordian
          title="What are the basic features?"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          similique, quae hic dicta quo facere facilis praesentium a sunt, est
          quia pariatur nam, modi aut minus iste odio consectetur molestias
          iusto cupiditate ullam laborum veniam quos officia. Quos, temporibus
          perspiciatis!"
        />

        <Accordian
          title="How do I get started?"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          similique, quae hic dicta quo facere facilis praesentium a sunt, est
          quia pariatur nam, modi aut minus iste odio consectetur molestias
          iusto cupiditate ullam laborum veniam quos officia. Quos, temporibus
          perspiciatis!"
        />

        <Accordian
          title="What support options are available?"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          similique, quae hic dicta quo facere facilis praesentium a sunt, est
          quia pariatur nam, modi aut minus iste odio consectetur molestias
          iusto cupiditate ullam laborum veniam quos officia. Quos, temporibus
          perspiciatis!"
        />

        <Accordian
          title="How do I get started?"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          similique, quae hic dicta quo facere facilis praesentium a sunt, est
          quia pariatur nam, modi aut minus iste odio consectetur molestias
          iusto cupiditate ullam laborum veniam quos officia. Quos, temporibus
          perspiciatis!"
        />
      </div>
    </div>
  );
};

export default AccordianSection;
