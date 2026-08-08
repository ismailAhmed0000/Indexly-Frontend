const styles: Record<string, string> = {
  valid: "bg-green-50 text-green-700",
  expiring: "bg-amber-50 text-amber-700",
  expired: "bg-red-50 text-red-700",
};

const dotStyles: Record<string, string> = {
  valid: "bg-green-500",
  expiring: "bg-amber-500",
  expired: "bg-red-500",
};

export function ExpiryStatusBadge({ status }: { status: string }) {
  const key = status.toLowerCase();
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[key] ?? "bg-gray-100 text-gray-600"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${dotStyles[key] ?? "bg-gray-400"}`}
      />
      {status.toUpperCase()}
    </span>
  );
}
