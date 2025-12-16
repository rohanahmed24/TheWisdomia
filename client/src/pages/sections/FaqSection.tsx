import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    id: "item-1",
    question: "How do I listen to stories?",
    answer:
      "Each article includes an audio player with a professional voice narration. Press play and listen at your own pace. You can pause, rewind, or continue reading while the audio plays in the background.",
  },
  {
    id: "item-2",
    question: "What does premium subscription include?",
    answer:
      "Premium removes all advertisements from your reading experience. You get unlimited access to our complete archive, early access to new stories, and the ability to download articles for offline reading.",
  },
  {
    id: "item-3",
    question: "Can I get notifications for new stories?",
    answer:
      "Yes. Enable notifications in your settings and choose which categories interest you most. We'll alert you when new stories in those categories are published.",
  },
  {
    id: "item-4",
    question: "How much does premium cost?",
    answer:
      "Visit our pricing page to see current subscription options. We offer monthly and annual plans. Payment is secure through Stripe and other trusted gateways.",
  },
  {
    id: "item-5",
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. Cancel anytime from your dashboard with no questions asked. Your access continues until the end of your billing period.",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="flex-col max-w-screen-xl items-center gap-20 flex w-full">
        <header className="flex flex-col max-w-screen-md items-center gap-6 w-full">
          <h2 className="self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#0c0805] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            Questions
          </h2>

          <p className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#0c0805] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            Everything you need to know about reading, listening, and
            subscribing.
          </p>
        </header>

        <Accordion
          type="single"
          collapsible
          className="flex flex-col max-w-screen-md items-start gap-12 w-full"
        >
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="w-full border-none"
            >
              <AccordionTrigger className="text-left font-text-medium-bold font-[number:var(--text-medium-bold-font-weight)] text-[#0c0805] text-[length:var(--text-medium-bold-font-size)] tracking-[var(--text-medium-bold-letter-spacing)] leading-[var(--text-medium-bold-line-height)] [font-style:var(--text-medium-bold-font-style)] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#0c0805] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <footer className="flex flex-col max-w-[560px] items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-4 self-stretch w-full">
            <h3 className="self-stretch font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[#0c0805] text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
              Still have questions?
            </h3>

            <p className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#0c0805] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Reach out to our team for anything we haven't covered here.
            </p>
          </div>

          <div className="inline-flex items-center gap-6">
            <Button
              variant="outline"
              className="h-auto px-3 py-1.5 rounded-md font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#0c0805] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
            >
              Contact
            </Button>
          </div>
        </footer>
      </div>
    </section>
  );
};
