"use client";

import { useState } from "react";

export function SaveYourSpotForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-8 text-center">
        <p className="text-lg font-bold text-slate-900 mb-2">
          Thanks! We&apos;ll expect you.
        </p>
        <p className="text-slate-600 text-sm mb-4">
          For same-day arrival, we recommend calling to confirm we have your
          spot.
        </p>
        <a
          href="tel:+13179566288"
          className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-teal-600 text-white font-bold hover:bg-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Call (317) 956-6288
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-labelledby="save-spot-form-heading"
    >
      <h2 id="save-spot-form-heading" className="text-xl font-bold text-slate-900 mb-4">
        Save Your Spot
      </h2>
      <div>
        <label htmlFor="save-spot-name" className="block text-sm font-medium text-slate-700 mb-1">
          Name
        </label>
        <input
          id="save-spot-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="save-spot-phone" className="block text-sm font-medium text-slate-700 mb-1">
          Phone
        </label>
        <input
          id="save-spot-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          placeholder="(317) 555-1234"
        />
      </div>
      <div>
        <label htmlFor="save-spot-reason" className="block text-sm font-medium text-slate-700 mb-1">
          Reason for Visit
        </label>
        <input
          id="save-spot-reason"
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          placeholder="e.g. flu shot, sick visit, physical"
        />
      </div>
      <button
        type="submit"
        className="w-full min-h-[48px] px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
}
