"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/data";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

 
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth >= 768) setItemsPerView(4); 
      else if (window.innerWidth >= 640) setItemsPerView(2); 
      else setItemsPerView(1); 
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(projects.length - itemsPerView, 0);

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
     
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest text-[#c9a25d] uppercase">
            Our Works
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 mt-2">
            Our <span className="text-[#c9a25d]">Projects</span>
          </h2>
          <div className="w-10 h-0.5 bg-[#c9a25d] mx-auto mt-4" />
        </div>

        <div className="flex justify-end mb-6 gap-2">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-7 h-7 bg-[#c9a25d] text-white disabled:opacity-40"
          >
            ‹
          </button>
          <button
            onClick={next}
            disabled={index === maxIndex}
            className="w-7 h-7 bg-[#c9a25d] text-white disabled:opacity-40"
          >
            ›
          </button>
        </div>

   
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / itemsPerView)}%)`,
            }}
          >
            {projects.map((project, i) => (
              <div
                key={i}
                className="min-w-full sm:min-w-[50%] md:min-w-[25%]"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={260}
                  className="w-full h-40 object-cover"
                />
                <p className="text-xs text-gray-700 mt-3">
                  {project.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
