import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  CreditCard,
  Calendar,
  CheckCircle,
  ArrowRight,
  Download,
  Heart,
} from "lucide-react";

const PORTAL_LOGIN_URL = "https://www.mymedicallocker.com";

export const metadata: Metadata = {
  title: "Patient Portal (MyMedicalLocker) | Urgent Care Indy",
  description:
    "24/7 secure access to your health records, billing, and appointments. Digital intake, online bill pay, and appointment requests.",
};

const features = [
  {
    icon: CreditCard,
    title: "Online Bill Management",
    img: "/images/my-medical-locker/my-med-locker.png",
    desc: "View statements and pay securely without the paperwork.",
  },
  {
    icon: Smartphone,
    title: "Digital Intake",
    img: "/images/my-medical-locker/IntelligentIntake_Multi-Device.webp",
    desc: "Complete your forms before you arrive to skip the wait.",
  },
  {
    icon: Calendar,
    title: "Appointment Requests",
    img: "/images/my-medical-locker/my-med-locker-appt-req.webp",
    desc: "Request and track your visits 24/7 from the app.",
  },
];

const howToSteps = [
  { step: 1, title: "Get Invite", body: "After your first visit, we'll send an email invite to join MyMedicalLocker." },
  { step: 2, title: "Register", body: "Click the link and create your secure account with the email we have on file." },
  { step: 3, title: "Download App", body: "Install the app on your phone from the App Store or Google Play for access on the go." },
  { step: 4, title: "Manage Health", body: "View records, pay bills, complete intake forms, and request appointments anytime." },
];

const faqItems = [
  {
    q: "Can't log in?",
    a: "Ensure you are using the email address provided during your clinic visit. For password resets, use the \"Forgot Password\" link on the MyMedicalLocker login page.",
  },
  {
    q: "How do I reset my password?",
    a: "On the MyMedicalLocker login page, click \"Forgot Password\" and enter the email we have on file. You'll receive a reset link by email.",
  },
  {
    q: "Where do I download the app?",
    a: "Search \"MyMedicalLocker\" in the App Store (iPhone) or Google Play (Android). Download the free app and sign in with the same credentials you use on the website.",
  },
  {
    q: "Who can use MyMedicalLocker?",
    a: "Every Urgent Care Indy patient. After your first visit, you'll receive an invite to register. Parents and guardians can manage accounts for dependents.",
  },
];

export default function PatientPortalPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero – my-med-locker.png */}
      <section className="relative bg-slate-50 py-16 md:py-24 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
              Patient Portal
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
              MyMedicalLocker: Your Health, Anywhere.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              24/7 secure access to your personal health information, billing, and appointments.
            </p>
            <a
              href={PORTAL_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Login to Portal
              <ArrowRight size={18} className="text-teal-400" aria-hidden />
            </a>
          </div>
          <div className="relative h-[320px] lg:h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <Image
              src="/images/my-medical-locker/my-med-locker.png"
              alt="MyMedicalLocker patient portal"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. What & Why – Who is it for + Intelligent Intake */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100" aria-labelledby="who-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 id="who-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who Is It For?
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                MyMedicalLocker is for <strong className="text-slate-900">every Urgent Care Indy patient</strong>. Whether you visit once or often, you get secure access to your records, bills, and the ability to complete forms on any device—so you can skip the waiting room paperwork.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Fill out intake forms on your phone, tablet, or laptop before you step into the clinic. Less time in the lobby, more time with your care team.
              </p>
            </div>
            <div className="relative h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <Image
                src="/images/my-medical-locker/IntelligentIntake_Multi-Device.webp"
                alt="Complete intake forms on any device"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Intelligent Intake – teal CTA block */}
      <section className="py-16 md:py-24 bg-teal-600" aria-labelledby="intake-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white order-2 lg:order-1">
              <h2 id="intake-heading" className="text-3xl md:text-4xl font-bold mb-6">
                Skip the Waiting Room Paperwork
              </h2>
              <p className="text-teal-50 text-lg mb-8">
                Our Intelligent Intake system lets you complete registration forms on your phone, tablet, or laptop before you step into our clinic.
              </p>
              <ul className="space-y-4" role="list">
                {["100% Paperless registration", "Secure HIPAA-compliant data", "Faster check-in times"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-teal-100">
                    <CheckCircle size={20} className="text-teal-300 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-72 lg:h-80 rounded-3xl overflow-hidden border border-teal-500/30 shadow-xl order-1 lg:order-2">
              <Image
                src="/images/my-medical-locker/IntelligentIntake_Multi-Device.webp"
                alt="Intake on all devices"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feature Grid */}
      <section className="py-16 md:py-24 bg-slate-50" aria-labelledby="features-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            What You Can Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white p-2 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all overflow-hidden group"
                >
                  <div className="relative h-48 w-full mb-6 rounded-[2rem] overflow-hidden">
                    <Image
                      src={f.img}
                      alt={f.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={22} className="text-teal-500 shrink-0" aria-hidden />
                      <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. How-To Guide – 4 steps */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100" aria-labelledby="howto-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 id="howto-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            How to Get Started
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 h-full">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white font-bold text-lg mb-4" aria-hidden>
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                </div>
                {item.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200 -translate-y-1/2" aria-hidden />
                )}
              </div>
            ))}
          </div>
          {/* App download visual – phones.webp */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative w-full max-w-xs h-64 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <Image
                src="/images/my-medical-locker/phones.webp"
                alt="MyMedicalLocker app on phone"
                fill
                className="object-contain object-center"
                sizes="320px"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-slate-900 mb-2">Manage your health on the go</p>
              <p className="text-slate-600 mb-4">Download the free app from the App Store or Google Play.</p>
              <a
                href={PORTAL_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
              >
                <Download size={18} aria-hidden />
                Get the app
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Integrated Care – membership-1.webp */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200" aria-labelledby="integrated-heading">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <Image
                src="/images/my-medical-locker/membership-1.webp"
                alt="Integrated care and primary care membership"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-teal-100 text-teal-500 mb-6">
                <Heart size={24} aria-hidden />
              </div>
              <h2 id="integrated-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Integrated Care
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Your portal connects urgent care visits with ongoing care. If you join our primary care membership or see our specialists, your MyMedicalLocker account keeps everything in one place—records, billing, and appointments across the practice.
              </p>
              <Link
                href="/our-clinic"
                className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
              >
                Learn about our care ecosystem
                <ArrowRight size={18} className="text-teal-500" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="faq-heading" className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Troubleshooting & FAQ
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div
                key={faq.q}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
              >
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-teal-500" aria-hidden>Q.</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to access your health records?</h2>
          <p className="text-slate-300 mb-8">Log in to MyMedicalLocker anytime to view statements, complete forms, and manage appointments.</p>
          <a
            href={PORTAL_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-400 transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Login to Portal
            <ArrowRight size={18} aria-hidden />
          </a>
        </div>
      </section>
    </div>
  );
}
