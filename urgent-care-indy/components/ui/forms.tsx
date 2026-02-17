"use client";

// Standard Text Input
type FormInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
};

export function FormInput({
  label,
  type = "text",
  placeholder,
  name,
  required = false,
}: FormInputProps) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all outline-none text-slate-900 placeholder:text-slate-400"
      />
    </div>
  );
}

// Standard Select Dropdown
type FormSelectProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
};

export function FormSelect({
  label,
  name,
  options,
  required = false,
}: FormSelectProps) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        id={name}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all outline-none text-slate-900 bg-white"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

// Text Area for Symptoms
type FormTextAreaProps = {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
};

export function FormTextArea({
  label,
  name,
  placeholder,
  rows = 4,
}: FormTextAreaProps) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all outline-none text-slate-900 placeholder:text-slate-400 resize-y"
      />
    </div>
  );
}

// The Form Wrapper
type FormWrapperProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  onSubmit: () => void;
};

export function FormWrapper({
  title,
  description,
  children,
  onSubmit,
}: FormWrapperProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-medical border border-slate-100 max-w-3xl mx-auto">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <p className="text-slate-500 mt-2">{description}</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="space-y-6"
      >
        {children}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-primary-blue text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            Submit Registration
          </button>
          <p className="text-xs text-center text-slate-400 mt-4">
            Secure, HIPAA-compliant submission. Your data is encrypted.
          </p>
        </div>
      </form>
    </div>
  );
}
