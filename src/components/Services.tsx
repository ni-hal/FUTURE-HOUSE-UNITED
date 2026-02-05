import Image from "next/image";
import { departments } from "@/data/index";

export default function Departments() {
  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-[#c9a25d] uppercase mb-2">
            Our Offer
          </p>
          <h2 className="text-3xl font-semibold text-gray-900">
            OUR <span className="text-[#c9a25d]">DEPARTMENTS</span>
          </h2>
          <div className="w-10 h-0.5 bg-[#c9a25d] mx-auto mt-4" />
        </div>

        {/* Department Items */}
        <div className="space-y-0">
          {departments.map((dept, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div
                className={`relative h-70 md:h-80 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={dept.img}
                  alt={dept.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div
                className={`bg-white p-8 md:p-12 flex flex-col justify-center text-center ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 flex items-center text-center justify-center bg-[#1f2a44] rounded-full mx-auto mb-4">
                    <Image src={dept.icon} alt={dept.title} width={64} height={64} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {dept.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {dept.description}
                </p>

                {/* Know More Link */}
                <a
                  href="#"
                  className="text-xs tracking-widest text-gray-800 hover:text-[#c9a25d] transition-colors uppercase font-medium inline-flex items-center gap-2 text-center justify-center"
                >
                  KNOW MORE
                  <span className="text-[#c9a25d]">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}