"use client";

import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[var(--geist-background)] border border-[var(--accents-2)] rounded-lg shadow-2xl p-8 animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--accents-5)] hover:text-[var(--geist-foreground)]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 text-[var(--geist-foreground)]">Contact Me</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--geist-foreground)] mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 rounded-md bg-[var(--accents-1)] border border-[var(--accents-2)] text-[var(--geist-foreground)] focus:ring-2 focus:ring-[var(--geist-success)] focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--geist-foreground)] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 rounded-md bg-[var(--accents-1)] border border-[var(--accents-2)] text-[var(--geist-foreground)] focus:ring-2 focus:ring-[var(--geist-success)] focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--geist-foreground)] mb-1">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 rounded-md bg-[var(--accents-1)] border border-[var(--accents-2)] text-[var(--geist-foreground)] focus:ring-2 focus:ring-[var(--geist-success)] focus:border-transparent outline-none transition-all resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className={`w-full py-2 px-4 rounded-md font-medium text-white transition-all ${
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
  );
}
