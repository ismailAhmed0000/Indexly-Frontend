import { Link } from "@tanstack/react-router";
import { MessageSquare, Bot, FileText, Plus, ShieldCheck } from "lucide-react";

const navItems = [
  { label: "Chat", icon: MessageSquare, to: "/" as const },
  { label: "Bots", icon: Bot, to: "/bots" as const },
  { label: "Documents", icon: FileText, to: "/documents" as const },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
          <ShieldCheck className="h-5 w-5 text-blue-700" />
        </div>
        <div>
          <p className="text-base font-bold text-gray-900">Covenant</p>
          <p className="text-xs font-medium tracking-wide text-gray-400">
            INTELLIGENCE
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-1 px-3">
        {navItems.map(({ label, icon: Icon, to }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 [&.active]:bg-gray-100 [&.active]:font-semibold [&.active]:text-gray-900"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="px-3 pt-4">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
        >
          <Plus className="h-4 w-4" />
          New Interaction
        </button>
      </div>
    </aside>
  );
}
