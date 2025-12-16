"use client";

import { ChevronRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    category: "History",
    readTime: "8 min read",
    title: "The lost kingdom beneath the sand",
    description: "Archaeologists uncover secrets that rewrite ancient history.",
    image: "/figmaAssets/placeholder-image-6.png",
  },
  {
    id: 2,
    category: "Crime",
    readTime: "12 min read",
    title: "When justice moved slower than the guilty",
    description: "Real cases that grip you like nothing else matters.",
    image: "/figmaAssets/placeholder-image-7.png",
  },
  {
    id: 3,
    category: "Politics",
    readTime: "10 min read",
    title: "Power and the men who wielded it",
    description: "Follow the threads of politics through decades of change.",
    image: "/figmaAssets/placeholder-image-8.png",
  },
  {
    id: 4,
    category: "Culture",
    readTime: "6 min read",
    title: "Voices history forgot to remember",
    description: "We amplify the narratives that deserve to be told.",
    image: "/figmaAssets/placeholder-image-9.png",
  },
];

export const BlogSection = () => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="flex-col max-w-screen-xl items-start gap-20 flex w-full">
        <header className="flex items-end justify-between w-full">
          <div className="max-w-screen-md items-start flex-1 grow flex flex-col gap-4">
            <div className="inline-flex items-center self-stretch">
              <h2 className="w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#0c0805] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                Blog
              </h2>
            </div>

            <div className="flex flex-col items-center gap-6 w-full">
              <h3 className="self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#0c0805] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] mt-[-1.00px] [font-style:var(--heading-h2-font-style)]">
                Short heading goes here
              </h3>

              <p className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#0c0805] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="h-auto inline-flex items-center justify-center gap-2 px-3 py-1.5 mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-md border border-solid border-[#0c080526]"
          >
            <span className="w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#0c0805] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
              View all
            </span>
          </Button>
        </header>

        <div className="flex flex-col items-start gap-12 w-full">
          <div className="grid grid-cols-2 gap-16 w-full">
            {blogPosts.slice(0, 2).map((post) => (
              <article key={post.id} className="flex items-center gap-8">
                <img
                  className="flex-1 h-72 rounded-lg object-cover"
                  alt={post.title}
                  src={post.image}
                />

                <div className="flex flex-col items-start gap-6 flex-1">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <div className="inline-flex items-center gap-4">
                      <Badge
                        variant="outline"
                        className="h-auto inline-flex items-start px-2.5 py-1 rounded border border-solid border-[#0c080526]"
                      >
                        <span className="w-fit mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#0c0805] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]">
                          {post.category}
                        </span>
                      </Badge>

                      <span className="w-fit font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#0c0805] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]">
                        {post.readTime}
                      </span>
                    </div>

                    <div className="flex flex-col items-start gap-2 w-full">
                      <h4 className="self-stretch font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#0c0805] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] mt-[-1.00px] [font-style:var(--heading-h5-font-style)]">
                        {post.title}
                      </h4>

                      <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#0c0805] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="h-auto inline-flex items-center justify-center gap-2 p-0 rounded-md hover:bg-transparent"
                  >
                    <span className="w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#0c0805] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                      Read more
                    </span>
                    <ChevronRightIcon className="w-6 h-6" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-16 w-full">
            {blogPosts.slice(2, 4).map((post) => (
              <article key={post.id} className="flex items-center gap-8">
                <img
                  className="flex-1 h-72 rounded-lg object-cover"
                  alt={post.title}
                  src={post.image}
                />

                <div className="flex flex-col items-start gap-6 flex-1">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <div className="inline-flex items-center gap-4">
                      <Badge
                        variant="outline"
                        className="h-auto inline-flex items-start px-2.5 py-1 rounded border border-solid border-[#0c080526]"
                      >
                        <span className="w-fit mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#0c0805] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]">
                          {post.category}
                        </span>
                      </Badge>

                      <span className="w-fit font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#0c0805] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]">
                        {post.readTime}
                      </span>
                    </div>

                    <div className="flex flex-col items-start gap-2 w-full">
                      <h4 className="self-stretch font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#0c0805] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] mt-[-1.00px] [font-style:var(--heading-h5-font-style)]">
                        {post.title}
                      </h4>

                      <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#0c0805] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="h-auto inline-flex items-center justify-center gap-2 p-0 rounded-md hover:bg-transparent"
                  >
                    <span className="w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#0c0805] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                      Read more
                    </span>
                    <ChevronRightIcon className="w-6 h-6" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
