// components/ui/forms.tsx
import React from 'react';

// Tailwind 4 styling for inputs
const inputStyles = "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all placeholder:text-slate-400";

export const FormInput = ({ label, type = "text", name, required = false, placeholder }: any) => (
  <div className="space-y-1.5">
    <label htmlFor={name} className="block text-sm font-bold text-slate-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input type={type} id={name} name={name} placeholder={placeholder} className={inputStyles} />
  </div>
);

export const FormSelect = ({ label, name, options, required = false }: any) => (
  <div className="space-y-1.5">
    <label htmlFor={name} className="block text-sm font-bold text-slate-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select id={name} name={name} className={`${inputStyles} appearance-none`}>
      <option value="">Select an option...</option>
      {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

export const FormTextArea = ({ label, name, placeholder, rows = 3 }: any) => (
  <div className="space-y-1.5">
    <label htmlFor={name} className="block text-sm font-bold text-slate-700">
      {label}
    </label>
    <textarea id={name} name={name} rows={rows} placeholder={placeholder} className={inputStyles} />
  </div>
);

export const FormWrapper = ({ title, subtitle, children }: any) => (
  <div className="max-w-3xl mx-auto my-12">
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-medical border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-blue"></div>
      <div className="border-b border-slate-100 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h1>
        <p className="text-slate-500 mt-2 text-lg">{subtitle}</p>
      </div>
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        {children}
        <div className="pt-8 border-t border-slate-100 flex flex-col items-center gap-4">
          <button type="submit" className="w-full md:w-auto md:min-w-[200px] bg-primary-blue text-white font-bold py-4 px-8 rounded-full hover:bg-blue-800 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Submit Registration
          </button>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium bg-slate-50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            256-bit SSL Secure Encrypted Connection
          </div>
        </div>
      </form>
    </div>
  </div>
);
