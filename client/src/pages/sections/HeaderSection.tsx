import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-20 w-full bg-[#0c0805]">
      <div className="flex-col max-w-screen-xl items-start justify-center gap-20 flex w-full">
        <Card className="bg-[#0c0805] overflow-hidden border border-solid border-[#ffffff33] w-full rounded-lg">
          <CardContent className="p-0 flex items-stretch">
            <div className="flex flex-col items-start justify-center gap-8 p-12 flex-1">
              <div className="flex flex-col items-start gap-6 w-full">
                <h1 className="mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                  Where every tale comes alive
                </h1>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Discover real stories that matter. From history&#39;s shadows
                  to today&#39;s headlines, we bring you the narratives that
                  shaped our world.
                </p>
              </div>

              <div className="inline-flex items-start gap-4">
                <Button className="h-auto px-3 py-1.5 bg-white text-[#0c0805] rounded-md border border-solid hover:bg-white/90 font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Explore
                </Button>

                <Button
                  variant="outline"
                  className="h-auto px-3 py-1.5 bg-transparent text-white rounded-md border border-solid border-[#ffffff33] hover:bg-white/10 font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
                >
                  Listen
                </Button>
              </div>
            </div>

            <img
              className="flex-1 h-[640px] object-cover"
              alt="Placeholder image"
              src="/figmaAssets/placeholder-image.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
