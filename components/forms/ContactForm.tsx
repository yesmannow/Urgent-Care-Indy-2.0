"use client";

import { useState, useCallback } from "react";

const CONTACT_EMAIL = "info@urgentcareindy.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const subject = encodeURIComponent(`Contact from ${name || "Website"}`);
      const body = encodeURIComponent(
        `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    },
    [name, email, message]
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full min-h-[120px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20 resize-y"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="w-full min-h-[48px] rounded-xl bg-primary-blue text-white font-bold shadow-medical hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  );
}
