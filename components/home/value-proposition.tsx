import { SectionHeading } from "@/components/home/section-heading";

const values = [
  {
    number: "01",
    title: "Return gifts",
    description: "For weddings, birthdays, betrothals and other special occasions.",
  },
  {
    number: "02",
    title: "Corporate gifting",
    description: "Customized gift options suitable for employees, clients or special occasions.",
  },
  {
    number: "03",
    title: "Practical and personalized",
    description: "Helping customers choose practical, presentable and personalized gifts.",
  },
] as const;

export function ValueProposition() {
  return (
    <section className="bg-pine text-background" aria-labelledby="value-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:px-10 lg:py-28">
        <SectionHeading
          id="value-title"
          tone="inverse"
          eyebrow="Mallusha Enterprises"
          title="Gifts for the moments that matter."
          description="Explore gifting options for personal celebrations and corporate needs, then start an enquiry when you are ready."
        />
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {values.map((value) => (
            <div key={value.number} className="border-t border-background/25 pt-5">
              <span className="font-heading text-3xl text-accent-light">{value.number}</span>
              <h3 className="mt-8 text-2xl text-background">{value.title}</h3>
              <p className="mt-4 text-base leading-7 text-background/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
