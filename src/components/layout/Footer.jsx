import Image from "next/image";
import Link from "next/link";
import { footLinks } from "@/data/navLinks";

const socialIcons = [
  { id: 1, label: "Facebook", href: "#", icon: "/images/facebook.png" },
  { id: 2, label: "Twitter", href: "#", icon: "/images/twitter.png" },
  { id: 3, label: "LinkedIn", href: "#", icon: "/images/linkedin.png" },
  { id: 4, label: "Instagram", href: "#", icon: "/images/instagram.png" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + Description + Social */}
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Interno Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-[family-name:var(--font-jost)] max-w-[200px]">
              We are the leading architect and interior design firm in the world.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  aria-label={s.label}
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src={s.icon}
                    alt={s.label}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Pages, Explore, Contact */}
          {footLinks.map((col, index) => (
            <div
              key={col.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={(index + 1) * 100}
            >
              <h4 className="font-['DM_Serif_Display'] text-gray-900 text-lg mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url || "#"}
                      className="text-gray-500 hover:text-[#c19a6b] text-sm transition-colors font-[family-name:var(--font-jost)] leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="mt-12 pt-6 border-t border-gray-100 text-center"
        >
          <p className="text-gray-400 text-sm font-[family-name:var(--font-jost)]">
            © {new Date().getFullYear()} Interno. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}