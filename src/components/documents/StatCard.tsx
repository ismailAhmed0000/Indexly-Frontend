import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  iconClassName?: string;
  label: string;
  value: number;
}

export function StatCard({
  icon: Icon,
  iconClassName,
  label,
  value,
}: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-lg ${
          iconClassName ?? "bg-teal-50 text-teal-600"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
