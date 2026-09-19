"use client";

import { useState, type FormEvent } from "react";
import type { Product } from "@/types/catalog";

interface ProductEnquiryFormProps {
  product?: Product;
  whatsAppNumber: string;
}

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  quantity: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues | "contact", string>>;

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  quantity: "",
  message: "",
};

export function ProductEnquiryForm({ product, whatsAppNumber }: ProductEnquiryFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [deliveryError, setDeliveryError] = useState<string | null>(null);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined, contact: undefined }));
    setDeliveryError(null);
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const email = values.email.trim();
    const phone = values.phone.trim();
    const quantity = Number(values.quantity);

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!email && !phone) {
      nextErrors.contact = "Please provide an email address or phone/WhatsApp number.";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.quantity.trim() || !Number.isInteger(quantity) || quantity < 1) {
      nextErrors.quantity = "Please enter a whole quantity of at least 1.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setDeliveryError(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const phoneNumber = whatsAppNumber.replace(/\D/g, "");

    if (phoneNumber.length < 8) {
      setDeliveryError("WhatsApp delivery is not configured yet. A verified business WhatsApp number is required before an enquiry can be sent.");
      return;
    }

    const enquiryMessage = [
      "Mallusha Enterprises Product Enquiry",
      "",
      `Product: ${product?.name ?? "General product enquiry"}`,
      `Customer: ${values.name.trim()}`,
      values.company.trim() ? `Company: ${values.company.trim()}` : null,
      values.email.trim() ? `Email: ${values.email.trim()}` : null,
      values.phone.trim() ? `Phone/WhatsApp: ${values.phone.trim()}` : null,
      `Quantity: ${values.quantity.trim()}`,
      values.message.trim() ? `Requirements: ${values.message.trim()}` : null,
    ].filter((line): line is string => line !== null).join("\n");

    const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(enquiryMessage)}`;
    const whatsAppWindow = window.open(whatsAppUrl, "_blank", "noopener,noreferrer");

    if (!whatsAppWindow) {
      window.location.assign(whatsAppUrl);
    }
  };

  const fieldClassName = (field: keyof FormValues) =>
    `mt-2 block min-h-12 w-full rounded-md border bg-background px-4 py-3 text-base text-text outline-none transition-colors placeholder:text-muted/70 focus:border-primary ${
      errors[field] ? "border-error" : "border-border"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="border-b border-border pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Product enquiry</p>
        <h2 className="mt-3 text-3xl text-pine">Tell us what you need.</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Share a few details and the Mallusha Enterprises team can review your enquiry.
        </p>
      </div>

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor="enquiry-product" className="text-sm font-semibold text-text">Product</label>
          <div id="enquiry-product" className="mt-2 rounded-md border border-border bg-background px-4 py-3 text-base text-pine">
            {product?.name ?? "General product enquiry"}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="enquiry-name" className="text-sm font-semibold text-text">Name <span aria-hidden="true">*</span></label>
            <input id="enquiry-name" name="name" type="text" autoComplete="name" value={values.name} onChange={(event) => updateValue("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "enquiry-name-error" : undefined} className={fieldClassName("name")} />
            {errors.name ? <p id="enquiry-name-error" className="mt-2 text-sm text-error" role="alert">{errors.name}</p> : null}
          </div>

          <div>
            <label htmlFor="enquiry-company" className="text-sm font-semibold text-text">Company name <span className="font-normal text-muted">(optional)</span></label>
            <input id="enquiry-company" name="company" type="text" autoComplete="organization" value={values.company} onChange={(event) => updateValue("company", event.target.value)} className={fieldClassName("company")} />
          </div>
        </div>

        <div>
          <label htmlFor="enquiry-quantity" className="text-sm font-semibold text-text">Approximate quantity <span aria-hidden="true">*</span></label>
          <input id="enquiry-quantity" name="quantity" type="number" min="1" step="1" inputMode="numeric" value={values.quantity} onChange={(event) => updateValue("quantity", event.target.value)} aria-invalid={Boolean(errors.quantity)} aria-describedby={errors.quantity ? "enquiry-quantity-error" : undefined} className={fieldClassName("quantity")} />
          {errors.quantity ? <p id="enquiry-quantity-error" className="mt-2 text-sm text-error" role="alert">{errors.quantity}</p> : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="enquiry-email" className="text-sm font-semibold text-text">Email <span className="font-normal text-muted">(optional if phone is provided)</span></label>
            <input id="enquiry-email" name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "enquiry-email-error" : errors.contact ? "enquiry-contact-error" : undefined} className={fieldClassName("email")} />
            {errors.email ? <p id="enquiry-email-error" className="mt-2 text-sm text-error" role="alert">{errors.email}</p> : null}
          </div>

          <div>
            <label htmlFor="enquiry-phone" className="text-sm font-semibold text-text">Phone / WhatsApp <span className="font-normal text-muted">(optional if email is provided)</span></label>
            <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(event) => updateValue("phone", event.target.value)} aria-invalid={Boolean(errors.contact)} aria-describedby={errors.contact ? "enquiry-contact-error" : undefined} className={fieldClassName("phone")} />
          </div>
        </div>
        {errors.contact ? <p id="enquiry-contact-error" className="-mt-2 text-sm text-error" role="alert">{errors.contact}</p> : null}

        <div>
          <label htmlFor="enquiry-message" className="text-sm font-semibold text-text">Message / requirements <span className="font-normal text-muted">(optional)</span></label>
          <textarea id="enquiry-message" name="message" rows={5} value={values.message} onChange={(event) => updateValue("message", event.target.value)} className={`${fieldClassName("message")} resize-y`} />
        </div>
      </div>

      <div className="mt-7 flex flex-col items-start gap-4">
        <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover focus-visible:outline-primary sm:w-auto">
          Send Enquiry on WhatsApp
        </button>
        <p className="text-sm leading-6 text-muted">WhatsApp will open with your enquiry ready to review and send. It is not stored by this website.</p>
        {deliveryError ? <p className="text-sm text-error" role="alert">{deliveryError}</p> : null}
      </div>
    </form>
  );
}
