import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="flex-col max-w-screen-xl items-center gap-20 flex w-full">
        <div className="flex flex-col max-w-screen-md items-center gap-8 w-full">
          <div className="items-center self-stretch w-full flex flex-col gap-4">
            <div className="inline-flex items-center">
              <div className="w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#0c0805] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                Premium
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 self-stretch w-full">
              <h2 className="self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#0c0805] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] mt-[-1.00px] [font-style:var(--heading-h2-font-style)]">
                Read without interruption
              </h2>

              <p className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#0c0805] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Remove ads and unlock unlimited access to our complete archive.
                Support independent storytelling and get the full experience.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-6">
            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2 px-3 py-1.5 mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-md border border-solid border-[#0c080526] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#0c0805] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
            >
              Subscribe
            </Button>

            <Button
              variant="ghost"
              className="h-auto inline-flex items-center justify-center gap-2 rounded-md font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#0c0805] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] p-0 hover:bg-transparent"
            >
              Learn
              <ChevronRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <img
          className="self-stretch w-full h-[738px] rounded-lg object-cover"
          alt="Placeholder image"
          src="/figmaAssets/placeholder-image-5.png"
        />
      </div>
    </section>
  );
};
