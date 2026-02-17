import { Download, ExternalLink, FileText, Phone } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Employer Resources & Forms</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to manage your workforce&apos;s health, authorization, and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
              <FileText className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Treatment Authorization</h2>
            <p className="text-slate-500 mb-6">
              Required for all walk-in occupational health visits. Ensure your employee arrives with this form signed.
            </p>
            <a
              href="/forms/auth.pdf"
              className="flex items-center gap-2 text-teal-600 font-bold hover:underline"
              download
            >
              <Download className="h-4 w-4" /> Download Standard Auth Form (PDF)
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <ExternalLink className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Setup Corporate Account</h2>
            <p className="text-slate-500 mb-6">
              Establish a billing protocol, define result recipients, and set up your customized screening program.
            </p>
            <Link
              href="/employer-services/contact"
              className="flex items-center gap-2 text-blue-600 font-bold hover:underline"
            >
              <ExternalLink className="h-4 w-4" /> Start New Account Setup
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-slate-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Client Service Center</h3>
            <p className="text-slate-400">Need help with a result or a specific protocol?</p>
          </div>
          <div className="flex gap-4">
            <a
              href="tel:3179566288"
              className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              <Phone className="h-4 w-4" /> (317) 956-6288
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

