export function EmptyState({ message }: { message: string }) {
  return (
    <div className="m-6 flex h-[calc(100%-3rem)] items-center justify-center rounded-xl border-2 border-dashed border-gray-200">
      <p className="text-sm text-gray-400">{message}</p>
    </div>
  );
}
