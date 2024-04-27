"use client";

import { services } from "@/data/services";
import Service from "./Service";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  return (
    <section
      ref={ref}
      id="services"
      className="flex flex-col gap-16 items-center"
    >
      <h3 className="text-3xl font-medium">Our Services</h3>
      <div className="flex gap-8 justify-center">
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
