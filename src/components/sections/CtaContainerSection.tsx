"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const CtaContainerSection = () => {
  return (
    <section className="bg-[#0c0805] flex flex-col items-center gap-20 px-16 py-28 w-full">
      <div className="flex-col max-w-screen-xl items-start gap-20 flex w-full">
        <Card className="bg-[#0c0805] border-[#ffffff33] w-full">
          <CardContent className="flex flex-col items-center justify-center gap-2 p-16">
            <div className="flex flex-col max-w-screen-md items-center gap-8 w-full">
              <div className="flex flex-col items-center gap-6 w-full">
                <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Get stories delivered to your inbox
                </h2>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  New narratives, fresh perspectives, and the tales that matter
                  most.
                </p>
              </div>

              <div className="flex flex-col w-full max-w-[513px] items-start gap-4">
                <div className="flex items-start gap-4 w-full">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border-0 border-b border-[#ffffff33] rounded-none px-0 py-2 text-white placeholder:text-[#ffffff99] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />

                  <Button className="bg-white text-[#0c0805] hover:bg-white/90 px-3 py-1.5 h-auto font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                    Subscribe
                  </Button>
                </div>

                <p className="w-full font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-white text-[length:var(--text-tiny-normal-font-size)] text-center tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] [font-style:var(--text-tiny-normal-font-style)]">
                  By clicking Subscribe you&apos;re confirming that you agree
                  with our Terms and Conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
