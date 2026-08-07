import { Search, ChevronDown } from "lucide-react";

export function TopBar() {
  return (
    <header className="flex items-center gap-4 border-b border-gray-200 bg-white px-6 py-4">
      <div className="relative max-w-xl flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search documents, chats..."
          className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:outline-none"
        />
      </div>

      <button
        type="button"
        className="flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        DE
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
    </header>
  );
}
