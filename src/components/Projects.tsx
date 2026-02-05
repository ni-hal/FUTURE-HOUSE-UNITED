import Image from "next/image";
import { projects } from "@/data";

export default function Projects() {
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
            className="w-7 h-7 flex items-center justify-center bg-[#c9a25d] text-white text-sm hover:bg-[#b8934f] transition-colors"
            aria-label="Previous projects"
          >
            ‹
          </button>
          <button
            className="w-7 h-7 flex items-center justify-center bg-[#c9a25d] text-white text-sm hover:bg-[#b8934f] transition-colors"
            aria-label="Next projects"
          >
            ›
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="">
              <div className="">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={260}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-gray-700 mt-3">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}