import { SectionHeading } from "@/components/home/section-heading";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section id="about" className="bg-surface" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10 lg:py-28">
        <SectionHeading
          id="about-title"
          eyebrow="About Mallusha Enterprises"
          title={siteConfig.about.heading}
          description={siteConfig.about.paragraphs[0]}
        />
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
          <div className="border-l-2 border-accent pl-6">
            <p className="font-heading text-2xl leading-tight text-pine">Personal celebrations</p>
            <p className="mt-4 text-base leading-7 text-muted">{siteConfig.about.paragraphs[1]}</p>
          </div>
          <div className="border-l-2 border-[#d8c7b6] pl-6">
            <p className="font-heading text-2xl leading-tight text-pine">A considered range</p>
            <p className="mt-4 text-base leading-7 text-muted">{siteConfig.about.paragraphs[2]}</p>
          </div>
          <div className="border-l-2 border-[#d8c7b6] pl-6">
            <p className="font-heading text-2xl leading-tight text-pine">Corporate gifting</p>
            <p className="mt-4 text-base leading-7 text-muted">{siteConfig.about.paragraphs[3]}</p>
          </div>
          <div className="border-l-2 border-accent pl-6">
            <p className="font-heading text-2xl leading-tight text-pine">Practical and personalized</p>
            <p className="mt-4 text-base leading-7 text-muted">{siteConfig.about.paragraphs[4]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
