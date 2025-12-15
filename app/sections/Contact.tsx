"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 px-6 bg-[var(--accents-1)]">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[var(--geist-foreground)]">Contact Me</h2>
        <div className="bg-[var(--geist-background)] p-8 rounded-lg border border-[var(--accents-2)] shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--geist-foreground)] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-[var(--accents-1)] border border-[var(--accents-2)] text-[var(--geist-foreground)] focus:ring-2 focus:ring-[var(--geist-success)] focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--geist-foreground)] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-[var(--accents-1)] border border-[var(--accents-2)] text-[var(--geist-foreground)] focus:ring-2 focus:ring-[var(--geist-success)] focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--geist-foreground)] mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-[var(--accents-1)] border border-[var(--accents-2)] text-[var(--geist-foreground)] focus:ring-2 focus:ring-[var(--geist-success)] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className={`w-full py-3 px-6 rounded-md font-medium text-white transition-all ${
                status === "success"
                  ? "bg-[var(--geist-success)] hover:bg-[var(--geist-success)]"
                  : "bg-[var(--geist-foreground)] hover:bg-[var(--accents-7)]"
              }`}
            >
              {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
