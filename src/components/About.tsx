import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-full h-full bg-[#1f2a44] z-0" />
            <div className="relative z-10">
              <Image
                src="/about.png"
                alt="Construction workers with hard hats"
                width={500}
                height={350}
                className="object-cover w-full"
              />
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest text-[#c9a25d] uppercase mb-4">
              WHO WE ARE
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Future House United<br />
              General Trading & Contracting Co.
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>

            <button className="text-xs font-bold uppercase tracking-widest text-gray-800 hover:text-[#c9a25d] transition-colors">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}