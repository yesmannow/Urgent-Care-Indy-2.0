import { Download } from "lucide-react";

export interface FormDownloadCardProps {
  title: string;
  description: string;
  fileUrl: string;
  /** Optional note (e.g. "Required for all workplace drug screens") */
  note?: string;
}

/** Use for form list data when rendering FormDownloadCard. Pass note={form.note ?? undefined} to satisfy strict typing. */
export interface PatientForm {
  name: string;
  description: string;
  fileUrl: string;
  note?: string;
}

export function FormDownloadCard({
  title,
  description,
  fileUrl,
  note,
}: FormDownloadCardProps) {
  return (
    <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 hover:border-teal-300 transition-colors group">
      <div className="flex justify-between items-start gap-4">
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
            {title}
          </h4>
          <p className="text-sm text-slate-500 mt-1">{description}</p>
          {note && (
            <p className="text-xs text-teal-700 font-medium mt-2 bg-teal-50 px-2 py-1 rounded inline-block">
              {note}
            </p>
          )}
        </div>
        <a
          href={fileUrl}
          download
          className="shrink-0 p-2.5 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          title="Download PDF"
          aria-label={`Download ${title} (PDF)`}
        >
          <Download size={22} aria-hidden />
        </a>
      </div>
    </div>
  );
}
