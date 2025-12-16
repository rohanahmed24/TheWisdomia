"use client";

import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BlogSection } from "@/components/sections/BlogSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { CtaContainerSection } from "@/components/sections/CtaContainerSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { LayoutSection } from "@/components/sections/LayoutSection";
import { MainContentSection } from "@/components/sections/MainContentSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";

const navigationItems = [{ label: "Articles" }, { label: "Categories" }];

const moreMenuItems = [
  { label: "About" },
  { label: "Contact" },
  { label: "Careers" },
];

const logoData = [
  {
    src: "/figmaAssets/logo-1.svg",
    width: "w-[135px]",
    height: "h-[22px]",
    top: "top-[calc(50.00%_-_11px)]",
    left: "left-[calc(50.00%_-_68px)]",
  },
  {
    src: "/figmaAssets/logo.svg",
    width: "w-[133px]",
    height: "h-9",
    top: "top-[calc(50.00%_-_17px)]",
    left: "left-[calc(50.00%_-_66px)]",
  },
  {
    src: "/figmaAssets/logo-1.svg",
    width: "w-[135px]",
    height: "h-[22px]",
    top: "top-[calc(50.00%_-_11px)]",
    left: "left-[calc(50.00%_-_68px)]",
  },
  {
    src: "/figmaAssets/logo.svg",
    width: "w-[133px]",
    height: "h-9",
    top: "top-[calc(50.00%_-_17px)]",
    left: "left-[calc(50.00%_-_66px)]",
  },
  {
    src: "/figmaAssets/logo-1.svg",
    width: "w-[135px]",
    height: "h-[22px]",
    top: "top-[calc(50.00%_-_11px)]",
    left: "left-[calc(50.00%_-_68px)]",
  },
  {
    src: "/figmaAssets/logo.svg",
    width: "w-[133px]",
    height: "h-9",
    top: "top-[calc(50.00%_-_17px)]",
    left: "left-[calc(50.00%_-_66px)]",
  },
  {
    src: "/figmaAssets/logo-1.svg",
    width: "w-[135px]",
    height: "h-[22px]",
    top: "top-[calc(50.00%_-_11px)]",
    left: "left-[calc(50.00%_-_68px)]",
  },
  {
    src: "/figmaAssets/logo.svg",
    width: "w-[133px]",
    height: "h-9",
    top: "top-[calc(50.00%_-_17px)]",
    left: "left-[calc(50.00%_-_66px)]",
  },
  {
    src: "/figmaAssets/logo-1.svg",
    width: "w-[135px]",
    height: "h-[22px]",
    top: "top-[calc(50.00%_-_11px)]",
    left: "left-[calc(50.00%_-_68px)]",
  },
  {
    src: "/figmaAssets/logo.svg",
    width: "w-[133px]",
    height: "h-9",
    top: "top-[calc(50.00%_-_17px)]",
    left: "left-[calc(50.00%_-_66px)]",
  },
  {
    src: "/figmaAssets/logo-1.svg",
    width: "w-[135px]",
    height: "h-[22px]",
    top: "top-[calc(50.00%_-_11px)]",
    left: "left-[calc(50.00%_-_68px)]",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-[1440px] items-start relative mx-auto">
      <nav className="flex flex-col h-[72px] items-center justify-center px-16 py-0 relative self-stretch w-full bg-[#0c0805]">
        <div className="items-center justify-center gap-8 self-stretch flex relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative flex-1 grow">
            <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto] cursor-pointer bg-transparent border-none"
                >
                  <span className="relative w-fit mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                    {item.label}
                  </span>
                </button>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center justify-center gap-1 relative cursor-pointer bg-transparent border-none">
                    <span className="relative w-fit mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                      More
                    </span>
                    <ChevronDownIcon className="w-6 h-6 text-white" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0c0805] border-[#ffffff33]">
                  {moreMenuItems.map((item, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] cursor-pointer"
                    >
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="relative w-[84px] h-9">
              <img
                className="absolute w-[83.33%] h-full top-0 left-[7.94%]"
                alt="Logo wide"
                src="/figmaAssets/logo-wide-1.svg"
              />
            </div>
          </div>

          <div className="flex flex-col items-end justify-center relative flex-1 grow">
            <Button
              variant="outline"
              className="h-auto px-2.5 py-1 bg-white border-solid text-[#0c0805] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
            >
              Menu
            </Button>
          </div>
        </div>
      </nav>

      <HeaderSection />
      <LayoutSection />
      <MainContentSection />

      <section className="flex flex-col items-center gap-6 px-16 py-20 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="flex-col max-w-screen-xl items-center gap-6 flex relative w-full flex-[0_0_auto]">
          <h2 className="font-text-medium-bold font-[number:var(--text-medium-bold-font-weight)] text-[#0c0805] text-[length:var(--text-medium-bold-font-size)] text-center tracking-[var(--text-medium-bold-letter-spacing)] leading-[var(--text-medium-bold-line-height)] relative mt-[-1.00px] [font-style:var(--text-medium-bold-font-style)]">
            Trusted by curious minds across the globe
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-[16px_32px] px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
            {logoData.map((logo, index) => (
              <div key={index} className="relative w-[140px] h-14">
                <img
                  className={`absolute ${logo.top} ${logo.left} ${logo.width} ${logo.height}`}
                  alt="Logo"
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlogSection />
      <TestimonialSection />
      <FaqSection />
      <CallToActionSection />
      <CtaContainerSection />
      <FooterSection />
    </div>
  );
}
