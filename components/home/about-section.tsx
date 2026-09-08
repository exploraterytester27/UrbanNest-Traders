import { SectionHeading } from "@/components/home/section-heading";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section id="about" className="bg-surface" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10 lg:py-28">
        <SectionHeading
          id="about-title"
          eyebrow="A little about us"
          title="The everyday, made more considered."
          description={siteConfig.business.description}
        />
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
          <div className="border-l-2 border-primary pl-6">
            <p className="font-heading text-2xl leading-tight text-pine">Thoughtful by design</p>
            <p className="mt-4 text-sm leading-7 text-muted">We bring useful product ideas together with a calm, clear catalogue experience.</p>
          </div>
          <div className="border-l-2 border-[#d8c7b6] pl-6">
            <p className="font-heading text-2xl leading-tight text-pine">Easy to explore</p>
            <p className="mt-4 text-sm leading-7 text-muted">Browse by category, discover a few favourites, and ask for the details you need.</p>
          </div>
          <div className="border-l-2 border-[#d8c7b6] pl-6">
            <p className="font-heading text-2xl leading-tight text-pine">Made for conversations</p>
            <p className="mt-4 text-sm leading-7 text-muted">Every enquiry is a starting point for a more useful product discussion.</p>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <p className="font-heading text-2xl leading-tight text-pine">Personal or business</p>
            <p className="mt-4 text-sm leading-7 text-muted">From a considered gift to a larger requirement, the next step is simply to get in touch.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
