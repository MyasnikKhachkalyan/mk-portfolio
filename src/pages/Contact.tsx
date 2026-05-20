import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL } from "@/data/personal";
import type { ContactFormData } from "@/types";

const CONTACT_LINKS = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Myasnik Khachkalyan",
    href: PERSONAL.linkedin,
  },
  {
    icon: <FaPhone />,
    label: "Phone (UK)",
    value: PERSONAL.phone[0],
    href: `tel:${PERSONAL.phone[0]}`,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: PERSONAL.location,
  },
] as const;

export function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO: integrate Formspree or EmailJS
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  }

  return (
    <section className="mx-auto min-h-screen max-w-4xl px-6 py-20">
      <SectionHeading
        title="Contact"
        subtitle="Have a project in mind or just want to connect? Reach out."
      />

      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {CONTACT_LINKS.map((link) => (
            <div key={link.label} className="flex items-start gap-4">
              <span className="mt-1 text-accent">{link.icon}</span>
              <div>
                <p className="font-mono text-sm uppercase tracking-wider text-text-muted">
                  {link.label}
                </p>
                {"href" in link && link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-text-primary transition-colors hover:text-accent"
                  >
                    {link.value}
                  </a>
                ) : (
                  <p className="text-text-primary">{link.value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1 block font-mono text-sm uppercase tracking-wider text-text-muted"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-bg-card px-4 py-3 text-base text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block font-mono text-sm uppercase tracking-wider text-text-muted"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-border bg-bg-card px-4 py-3 text-base text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block font-mono text-sm uppercase tracking-wider text-text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-border bg-bg-card px-4 py-3 text-base text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent"
              placeholder="Tell me about your project or say hello..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full rounded-lg border border-accent bg-accent/10 px-6 py-3 font-mono text-base text-accent transition-all hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "idle" && "Send message"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Message sent!"}
            {status === "error" && "Failed — try again"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
