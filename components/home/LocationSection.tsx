import { Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { CopyAddressButton } from "@/components/ui/CopyAddressButton";

export function LocationSection() {
  const addressText = "7911 N Michigan Rd, Indianapolis, IN 46268";

  return (
    <section className="bg-slate-900 text-white py-24" id="visit-us">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <div>
            <h2 className="text-3xl font-bold mb-4">Visit Us Today</h2>
            <p className="text-slate-400 text-lg">No appointment needed. Just walk in.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <MapPin className="w-6 h-6 text-teal-400 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg">UrgentCare Indy</p>
                <p className="text-slate-300">
                  7911 N Michigan Rd,
                  <br />
                  Indianapolis, IN 46268
                </p>
                <a
                  href="https://maps.google.com/?q=7911+N+Michigan+Rd,+Indianapolis,+IN+46268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-bold text-teal-400 hover:text-teal-300 underline"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <Clock className="w-6 h-6 text-teal-400 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg">Hours</p>
                <p className="text-slate-300">Mon-Fri: 8:00 AM – 6:30 PM</p>
                <p className="text-slate-300">Sat: 8:00 AM – 2:30 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <Phone className="w-6 h-6 text-teal-400 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg">Call Us</p>
                <a
                  href="tel:3179566288"
                  className="text-slate-300 hover:text-white transition-colors text-xl font-bold"
                >
                  (317) 956-6288
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-slate-200 font-semibold">
              7911 N Michigan Rd • 1 min from I‑465 • Free parking
            </p>
            <CopyAddressButton text={addressText} />
          </div>

          <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700">
            <Image
              src="/images/home/map-preview.jpg"
              alt="Map location of UrgentCare Indy on Michigan Rd"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <a
              href="https://maps.google.com/?q=7911+N+Michigan+Rd,+Indianapolis,+IN+46268"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors group"
            >
              <span className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold shadow-lg transform group-hover:scale-105 transition-transform">
                Open in Google Maps
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

