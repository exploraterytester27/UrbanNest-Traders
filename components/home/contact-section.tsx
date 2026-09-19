import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/home/section-heading";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="bg-pale-gold" aria-labelledby="contact-title">
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
              <p className="mt-2 text-base text-text"><a href="tel:+917338782287" className="hover:text-primary focus-visible:outline-primary">{contact.phone}</a></p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">WhatsApp</p>
              <p className="mt-2 text-base text-text"><a href={`https://wa.me/${contact.whatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary focus-visible:outline-primary">{contact.whatsAppDisplay}</a></p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Email</p>
              <p className="mt-2 text-base text-text"><a href={`mailto:${contact.email}`} className="hover:text-primary focus-visible:outline-primary">{contact.email}</a></p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Location</p>
              <p className="mt-2 whitespace-pre-line text-base text-text">{contact.location}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Instagram</p>
              <p className="mt-2 text-base text-text"><a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary focus-visible:outline-primary">@mallusha19</a></p>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
