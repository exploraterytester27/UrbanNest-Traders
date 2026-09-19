import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/home/section-heading";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="bg-background" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Let’s talk"
          title="The useful details are worth a conversation."
          description="Reach out with a product question, a gifting idea, or a broader requirement."
        />
        <div className="rounded-2xl border border-border bg-surface p-7 sm:p-9">
          <h3 id="contact-title" className="text-2xl text-pine">Contact information</h3>
          <address className="mt-7 grid gap-6 not-italic sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Phone</p>
              <p className="mt-2 text-base text-text">{contact.phone}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">WhatsApp</p>
              <p className="mt-2 text-base text-text">{contact.whatsAppNumber}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Email</p>
              <p className="mt-2 text-base text-text">{contact.email}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Location</p>
              <p className="mt-2 text-base text-text">{contact.location}</p>
            </div>
          </address>
          <Link href="/#contact" className="mt-8 inline-flex text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 focus-visible:outline-primary">
            Visit the contact page <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
