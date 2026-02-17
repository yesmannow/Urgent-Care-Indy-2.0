const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=UrgentCare+Indy+7911+N+Michigan+Rd+Indianapolis+IN+46268&t=&z=15&ie=UTF8&iwloc=&output=embed";

type ClinicMapProps = {
  className?: string;
};

export function ClinicMap({ className = "" }: ClinicMapProps) {
  return (
    <div className="overflow-hidden rounded-xl shadow-medical bg-slate-100">
      <iframe
        src={MAP_EMBED_URL}
        title="Urgent Care Indy location - 7911 N Michigan Rd, Indianapolis, IN 46268"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={className}
      />
    </div>
  );
}
