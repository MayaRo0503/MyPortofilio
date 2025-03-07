import { serviceData } from "../../assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-20 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">Why Hire Me?</h2>
      <p className="text-center max-w-2xl mx-auto my-10 font-Ovo">
        As a Full-Stack Developer with expertise in React, Node.js, and DevOps,
        I bring a combination of technical proficiency and problem-solving
        skills. I thrive in fast-paced environments, love learning new
        technologies, and enjoy collaborating with teams to build efficient and
        scalable software solutions. I'm eager to contribute my skills and grow
        within a dynamic company. Let's work together and create something
        amazing!
      </p>
      <div className="grid grid-cols-auto gap-6 m-10">
        {serviceData.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg px-8 py-12 hover:shadow-black cursor-default hover:bg-lightHover hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text -lg my-4 text-gray-700">{title}</h3>
            <p className="text -sm text-gray-600 leading-5">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
