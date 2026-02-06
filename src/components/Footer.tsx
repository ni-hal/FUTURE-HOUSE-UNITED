import Image from "next/image";
import { quickLinks, departmentLinks, socialIcons } from "@/data";

export default function Footer() {
  return (
    <footer className="w-full">
      <section className="relative h-75 flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/getintouch.png"
          alt="Get in touch background"
          fill
          className="object-cover"
          priority
        />

        
        <div className="absolute inset-0 " />

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Get in touch
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-700 mb-8">
            <a
              href="tel:+96567081116"
              className="flex items-center gap-2 hover:text-[#c9a25d] transition-colors"
            >
              📞 +965 67081116
            </a>
            <a
              href="mailto:info@futurehouseunited.com"
              className="flex items-center gap-2 hover:text-[#c9a25d] transition-colors"
            >
              ✉ info@futurehouseunited.com
            </a>
          </div>

          <button className="px-8 py-3 border-2 border-gray-800 text-sm font-semibold text-gray-800 hover:bg-[#c9a25d] hover:text-white transition-colors uppercase tracking-wide">
            CONTACT US
          </button>
        </div>
      </section>


      <section className="relative bg-[#1f2a44] text-gray-300 py-16 ">
        <Image
          src="/footer.png"
          alt="Footer background"
          fill
          className="object-cover "
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1f2a44] font-bold text-sm">
                FH
              </div>
              <h3 className="text-sm font-bold text-white leading-tight">
                FUTURE HOUSE UNITED GENERAL<br />TRADING & CONTRACTING CO.
              </h3>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since 1500s.
            </p>

            <button className="text-xs uppercase text-[#FFF] hover:text-[#b8934f] transition-colors font-semibold tracking-wide">
              READ MORE
            </button>

            <div className="flex gap-3 mt-6">
              {socialIcons.map((icon) => (
                <button
                  key={icon}
                  className="w-8 h-8 border border-gray-400 flex items-center justify-center text-xs hover:border-[#c9a25d] hover:text-[#c9a25d] transition-colors"
                  aria-label={`Social media ${icon}`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6">
              Quick Link
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#c9a25d] transition-colors">
                    • {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6">
              Departments
            </h4>
            <ul className="space-y-3 text-sm">
              {departmentLinks.map((dept) => (
                <li key={dept}>
                  <a href="#" className="hover:text-[#c9a25d] transition-colors">
                    • {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6">
              Contact Us
            </h4>
            <address className="text-sm leading-relaxed not-italic mb-4">
              Future House United General Trading & Contracting Co.<br />
              Al-Salem Tower – 19th Floor – Fahad Al-Salem Street, Kuwait<br />
              Kuwait City – Kuwait
            </address>

            <div className="text-sm space-y-2">
              <p>Phone: <a href="tel:+96567081116" className="hover:text-[#c9a25d] transition-colors">+965 67081116</a></p>
              <p>Fax: +965 67081116</p>
              <p>Email: <a href="mailto:info@futurehouseunited.com" className="hover:text-[#c9a25d] transition-colors">info@futurehouseunited.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#182035] text-gray-400 text-xs py-4">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#c9a25d]">Future House United Co.</span> © 2019 All Rights Reserved | Powered by Uniweb IT Solutions
        </div>
      </div>
    </footer>
  );
}