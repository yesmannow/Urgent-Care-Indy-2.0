import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-slate-200 mb-2">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Looking for care?
        </h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          You might have taken a wrong turn, but we&apos;re still here to help.
          Head back home or save your spot and we&apos;ll get you in.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-bold hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            aria-label="Back to home page"
          >
            Back to Home
          </Link>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-xl bg-primary-blue text-white font-bold shadow-medical hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            aria-label="Save your spot at our Michigan Road clinic"
          >
            Save My Spot Now
          </Link>
        </div>
      </div>
    </div>
  );
}
