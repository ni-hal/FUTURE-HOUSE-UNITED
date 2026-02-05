"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { heroSlides } from "@/data";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = heroSlides[currentSlide];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background image */}
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0  from-white/90 via-white/7 blur-2xl" />


      <div className="absolute right-[-20%] top-[-10%] w-[70%] h-[120%] rounded-full " />


      <div className="absolute bottom-0 left-0 w-full h-40  from-white to-transparent" />

   
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            {slide.title}
            <span className="block text-[#c9a25d] mt-2">
              {slide.subtitle}
            </span>
          </h1>

          <p className="mt-6 text-gray-700 text-base leading-relaxed">
            {slide.description}
          </p>

          <button className="mt-8 px-8 py-3 border-2 border-black text-sm font-semibold uppercase tracking-wide hover:bg-[#c9a25d] hover:text-white transition">
            GO MORE
          </button>
        </div>
      </div>

      {/* Navigation arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#1f2a44] text-white items-center justify-center hover:bg-[#b8934f]"
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#1f2a44] text-white items-center justify-center hover:bg-[#b8934f]"
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
