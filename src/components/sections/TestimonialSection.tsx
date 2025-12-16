"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const leftColumnTestimonials = [
  {
    stars: "/figmaAssets/stars.svg",
    text: '"TheWisdomia brings stories to life in a way that makes you feel like you were there."',
    avatar: "/figmaAssets/avatar-image.png",
    name: "Sarah Mitchell",
    position: "History teacher, London",
  },
  {
    stars: "/figmaAssets/stars.svg",
    text: '"The audio narration is exceptional. I listen during my commute and never miss a story."',
    avatar: "/figmaAssets/avatar-image-1.png",
    name: "James Chen",
    position: "Journalist, Singapore",
  },
  {
    stars: "/figmaAssets/stars.svg",
    text: '"Finally, a platform that treats storytelling with the respect it deserves."',
    avatar: "/figmaAssets/avatar-image-2.png",
    name: "Amara Okonkwo",
    position: "Author, Lagos",
  },
  {
    stars: "/figmaAssets/stars.svg",
    text: '"The research behind each article is thorough. You can tell they care about getting it right. Worth every penny of the subscription."',
    avatar: "/figmaAssets/avatar-image-3.png",
    name: "Marcus Webb",
    position: "Retired professor, Melbourne",
  },
  {
    stars: "/figmaAssets/stars.svg",
    text: '"I\'ve discovered stories I never would have found elsewhere. This is real journalism done right. The premium subscription removed all distractions."',
    avatar: "/figmaAssets/avatar-image-4.png",
    name: "Elena Rossi",
    position: "Researcher, Rome",
  },
  {
    stars: "/figmaAssets/stars.svg",
    text: '"The voice covers add something special that reading alone cannot match."',
    avatar: "/figmaAssets/avatar-image-5.png",
    name: "David Patel",
    position: "Entrepreneur, Mumbai",
  },
];

const rightColumnTestimonials = [
  {
    stars: "/figmaAssets/stars.svg",
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
    avatar: "/figmaAssets/avatar-image-8.png",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    stars: "/figmaAssets/stars.svg",
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
    avatar: "/figmaAssets/avatar-image-8.png",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    stars: "/figmaAssets/stars.svg",
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    avatar: "/figmaAssets/avatar-image-8.png",
    name: "Name Surname",
    position: "Position, Company name",
  },
];

export const TestimonialSection = () => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="flex-col max-w-screen-xl items-center gap-20 flex w-full">
        <header className="flex flex-col max-w-screen-md items-center gap-6 w-full">
          <h2 className="w-[560px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#0c0805] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            What readers say
          </h2>

          <p className="w-[560px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#0c0805] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            Curious minds from around the world share their experience.
          </p>
        </header>

        <div className="flex items-start gap-8 w-full">
          <div className="flex flex-col items-start gap-8 flex-1">
            {leftColumnTestimonials.map((testimonial, index) => (
              <Card
                key={`left-${index}`}
                className="w-full bg-white rounded-lg border border-solid border-[#0c080526]"
              >
                <CardContent className="flex flex-col items-start gap-6 p-8">
                  <div className="flex flex-col items-start gap-6 w-full">
                    <img
                      className="flex-[0_0_auto]"
                      alt="Stars"
                      src={testimonial.stars}
                    />

                    <p className="w-full font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#0c0805] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 w-full">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt="Avatar image"
                        className="object-cover"
                      />
                    </Avatar>

                    <div className="flex flex-col items-start flex-1">
                      <div className="w-full font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#0c0805] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                        {testimonial.name}
                      </div>

                      <div className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#0c0805] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-start gap-8 flex-1">
            {rightColumnTestimonials.map((testimonial, index) => (
              <Card
                key={`right-${index}`}
                className="w-full bg-white rounded-lg border border-solid border-[#0c080526]"
              >
                <CardContent className="flex flex-col items-start gap-6 p-8">
                  <div className="flex flex-col items-start gap-6 w-full">
                    <img
                      className="flex-[0_0_auto]"
                      alt="Stars"
                      src={testimonial.stars}
                    />

                    <p className="w-full font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#0c0805] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 w-full">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt="Avatar image"
                        className="object-cover"
                      />
                    </Avatar>

                    <div className="flex flex-col items-start flex-1">
                      <div className="w-full font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#0c0805] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                        {testimonial.name}
                      </div>

                      <div className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#0c0805] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
