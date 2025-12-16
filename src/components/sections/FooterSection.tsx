"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerColumns = [
  {
    title: "Explore",
    links: ["Home", "Articles", "Categories", "About us", "Contact"],
  },
  {
    title: "Company",
    links: ["Careers", "Advertise", "Pricing", "Subscribe", "Dashboard"],
  },
  {
    title: "Resources",
    links: [
      "Privacy policy",
      "Terms of service",
      "Cookie settings",
      "Accessibility",
      "Support",
    ],
  },
  {
    title: "Get help",
    links: [
      "Email support",
      "Live chat",
      "Report issue",
      "Feedback",
      "Follow us",
    ],
  },
  {
    title: "Visit Twitter",
    links: [
      "Visit Facebook",
      "Visit Instagram",
      "Visit LinkedIn",
      "Visit YouTube",
      "Legal",
    ],
  },
  {
    title: "Disclaimer",
    links: [
      "Copyright notice",
      "Trademark info",
      "Data protection",
      "Compliance",
      "Sitemap",
    ],
  },
];

export const FooterSection = () => {
  return (
    <footer className="flex flex-col items-center gap-20 px-16 py-20 w-full bg-[#0c0805]">
      <div className="flex-col max-w-screen-xl items-start gap-20 flex w-full">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col max-w-[560px] items-start flex-1">
            <h2 className="self-stretch mt-[-1.00px] font-text-medium-semi-bold font-[number:var(--text-medium-semi-bold-font-weight)] text-white text-[length:var(--text-medium-semi-bold-font-size)] tracking-[var(--text-medium-semi-bold-letter-spacing)] leading-[var(--text-medium-semi-bold-line-height)] [font-style:var(--text-medium-semi-bold-font-style)]">
              Stay in the loop
            </h2>

            <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              Get the latest stories delivered straight to you
            </p>
          </div>

          <div className="flex flex-col w-[400px] items-start gap-3">
            <div className="flex items-start gap-4 w-full">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border-0 border-b border-[#ffffff33] rounded-none px-0 py-2 text-white placeholder:text-[#ffffff99] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
              />

              <Button
                variant="outline"
                className="h-auto px-3 py-1.5 rounded-md border border-[#ffffff33] bg-transparent text-white hover:bg-white/10 hover:text-white font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
              >
                Subscribe
              </Button>
            </div>

            <div className="flex items-start gap-1 w-full">
              <p className="w-fit mt-[-1.00px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-white text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] whitespace-nowrap [font-style:var(--text-tiny-normal-font-style)]">
                By subscribing you agree to our Privacy Policy
              </p>

              <a
                href="#"
                className="w-fit mt-[-1.00px] mr-[-105.00px] font-text-tiny-link font-[number:var(--text-tiny-link-font-weight)] text-white text-[length:var(--text-tiny-link-font-size)] tracking-[var(--text-tiny-link-letter-spacing)] leading-[var(--text-tiny-link-line-height)] underline whitespace-nowrap [font-style:var(--text-tiny-link-font-style)]"
              >
                By subscribing you agree to our Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <Separator className="w-full h-px bg-white/20" />

        <nav className="flex items-start gap-10 w-full">
          {footerColumns.map((column, index) => (
            <div key={index} className="flex flex-col items-start gap-4 flex-1">
              <h3 className="self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-white text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                {column.title}
              </h3>

              <ul className="flex flex-col items-start w-full">
                {column.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="flex items-start px-0 py-2 w-full"
                  >
                    <a
                      href="#"
                      className="flex-1 mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-white text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-8 w-full">
          <Separator className="w-full h-px mt-[-1.00px] bg-white/20" />

          <div className="flex items-center justify-between w-full">
            <div className="w-[84px] h-9 relative">
              <img
                className="absolute w-[83.33%] h-full top-0 left-[7.94%]"
                alt="Logo wide"
                src="/figmaAssets/logo-wide-1.svg"
              />
            </div>

            <p className="mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-white text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
              © 2025 TheWisdomia.com. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
