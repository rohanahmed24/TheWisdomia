"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CallToActionSection = () => {
  return (
    <section className="bg-[#041e38] flex flex-col items-center gap-20 px-16 py-28 w-full">
      <div className="flex-col max-w-screen-xl items-start gap-20 flex w-full">
        <Card className="overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(/figmaAssets/card.png)_50%_50%_/_cover] border-0 rounded-lg w-full">
          <CardContent className="flex justify-center p-16">
            <div className="flex flex-col max-w-screen-md items-center gap-8 flex-1">
              <div className="flex flex-col items-center gap-6 w-full">
                <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Join thousands reading without ads
                </h2>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Premium subscribers enjoy uninterrupted stories and support
                  independent storytelling.
                </p>
              </div>

              <div className="inline-flex items-start gap-4">
                <Button className="h-auto bg-white text-[#0c0805] hover:bg-white/90 px-3 py-1.5 rounded-md font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Subscribe
                </Button>

                <Button
                  variant="outline"
                  className="h-auto bg-transparent text-white hover:bg-white/10 border-[#ffffff33] px-3 py-1.5 rounded-md font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
