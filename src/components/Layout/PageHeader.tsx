export function PageHeader({ title }: { title: string }) {
  return (
    <div className="border-b border-gray-200 bg-white px-6 py-3">
      <p className="text-sm font-medium text-gray-500">{title}</p>
    </div>
  );
}
