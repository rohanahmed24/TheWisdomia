"use client";

import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stories = [
  {
    image: "/figmaAssets/placeholder-image-1.png",
    title: "The lost kingdom",
    description:
      "A forgotten empire rises from the dust of centuries. Archaeologists uncover secrets that rewrite what we thought we knew about ancient civilizations.",
  },
  {
    image: "/figmaAssets/placeholder-image-2.png",
    title: "Crime's shadow",
    description:
      "True crime stories that grip you like nothing else. Real cases, real consequences, real people caught in extraordinary circumstances.",
  },
  {
    image: "/figmaAssets/placeholder-image-3.png",
    title: "Political turns",
    description:
      "Power shifts and backroom deals that changed nations. Follow the threads of politics through decades of decisive moments.",
  },
  {
    image: "/figmaAssets/placeholder-image-4.png",
    title: "Voices unheard",
    description:
      "Stories from those history forgot. We amplify the narratives that deserve to be told and remembered by everyone.",
  },
];

export const LayoutSection = () => {
  return (
    <section className="flex flex-col items-center w-full bg-[#24201e]">
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col items-end justify-center gap-8 pl-16 pr-20 py-0 min-h-[900px]">
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="inline-flex items-center">
                <h3 className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-white text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  Stories
                </h3>
              </div>

              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Featured tales worth your time
                </h2>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Each story is told with care. Read, listen, and discover the
                  voices behind history&apos;s most compelling moments.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-6">
              <Button
                variant="outline"
                className="h-auto px-3 py-1.5 rounded-md border-[#ffffff33] bg-transparent hover:bg-[#ffffff1a]"
              >
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Read
                </span>
              </Button>

              <Button
                variant="ghost"
                className="h-auto px-0 py-0 rounded-md bg-transparent hover:bg-transparent"
              >
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Play
                </span>
                <ChevronRightIcon className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-4 p-10 min-h-[900px] bg-[#24201e] border-b border-[#ffffff33]">
          <Card className="max-w-[560px] w-full bg-transparent border-0">
            <CardContent className="flex flex-col items-start gap-8 p-0">
              <img
                className="w-full h-[315px] rounded-lg object-cover"
                alt="Placeholder image"
                src={stories[0].image}
              />

              <div className="flex flex-col items-start gap-4 w-full">
                <h4 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                  {stories[0].title}
                </h4>

                <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  {stories[0].description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {stories.slice(1).map((story, index) => (
        <div key={index} className="grid grid-cols-2 w-full">
          <div className="min-h-[900px]" />

          <div className="flex flex-col items-start justify-center gap-4 p-10 min-h-[900px] bg-[#24201e] border-b border-[#ffffff33]">
            <Card className="max-w-[560px] w-full bg-transparent border-0">
              <CardContent className="flex flex-col items-start gap-8 p-0">
                <img
                  className="w-full h-[315px] rounded-lg object-cover"
                  alt="Placeholder image"
                  src={story.image}
                />

                <div className="flex flex-col items-start gap-4 w-full">
                  <h4 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {story.title}
                  </h4>

                  <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {story.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </section>
  );
};
