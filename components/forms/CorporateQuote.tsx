"use client";

import { useState, useCallback } from "react";

type FormData = {
  companyName: string;
  hrContactName: string;
  email: string;
  phone: string;
  employeeCount: string;
};

const initial: FormData = {
  companyName: "",
  hrContactName: "",
  email: "",
  phone: "",
  employeeCount: "",
};

export function CorporateQuote() {
  const [data, setData] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Corporate quote request:", data);
      setSubmitted(true);
    },
    [data]
  );

  if (submitted) {
    return (
      <div className="bg-white shadow-xl rounded-3xl p-8 border-t-4 border-teal-500">
        <p className="text-teal-700 font-medium text-center py-4">
          Thanks! Our Account Manager will call you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-3xl p-8 border-t-4 border-teal-500"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-6 sr-only">
        Request Corporate Rates
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={data.companyName}
            onChange={handleChange}
            required
            className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            placeholder="Acme Corp"
          />
        </div>
        <div>
          <label htmlFor="hrContactName" className="block text-sm font-medium text-slate-700 mb-1">
            HR Contact Name
          </label>
          <input
            id="hrContactName"
            name="hrContactName"
            type="text"
            value={data.hrContactName}
            onChange={handleChange}
            required
            className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            required
            className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            placeholder="hr@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={handleChange}
            required
            className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            placeholder="(317) 555-0123"
          />
        </div>
        <div>
          <label htmlFor="employeeCount" className="block text-sm font-medium text-slate-700 mb-1">
            Approx Employee Count
          </label>
          <input
            id="employeeCount"
            name="employeeCount"
            type="text"
            value={data.employeeCount}
            onChange={handleChange}
            required
            className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            placeholder="e.g. 50–200"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full mt-4 min-h-[44px] rounded-xl bg-teal-500 text-white font-bold shadow-medical hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Get a Quote
      </button>
    </form>
  );
}
