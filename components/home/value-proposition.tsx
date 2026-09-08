import { SectionHeading } from "@/components/home/section-heading";

const values = [
  {
    number: "01",
    title: "A clear starting point",
    description: "A focused catalogue helps you move from a broad idea to a useful shortlist.",
  },
  {
    number: "02",
    title: "Useful product context",
    description: "Each concept is presented with the everyday moments and gifting conversations it may suit.",
  },
  {
    number: "03",
    title: "A human next step",
    description: "When you are ready, send an enquiry and continue the conversation around your requirement.",
  },
] as const;

export function ValueProposition() {
  return (
    <section className="bg-pine text-background" aria-labelledby="value-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:px-10 lg:py-28">
        <SectionHeading
          id="value-title"
          tone="inverse"
          eyebrow="Why UrbanNest"
          title="A calmer way to find the right thing."
          description="The catalogue is designed to make product discovery feel straightforward, useful, and open to conversation."
        />
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {values.map((value) => (
            <div key={value.number} className="border-t border-background/25 pt-5">
              <span className="font-heading text-3xl text-[#e6b08f]">{value.number}</span>
              <h3 className="mt-8 text-2xl text-background">{value.title}</h3>
              <p className="mt-4 text-sm leading-7 text-background/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
