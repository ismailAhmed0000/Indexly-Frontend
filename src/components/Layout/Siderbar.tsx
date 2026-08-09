import { Link, useLocation } from "@tanstack/react-router";
import {
  MessageSquare,
  Bot,
  FileText,
  Plus,
  ShieldCheck,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { useConversations } from "../../features/conversations/useConversations";
import { useAuthContext } from "../../features/auth/AuthContext";

const navItems = [
  { label: "Chat", icon: MessageSquare, to: "/" as const },
  { label: "Bots", icon: Bot, to: "/bots" as const },
  { label: "Documents", icon: FileText, to: "/documents" as const },
];

export function Sidebar() {
  const location = useLocation();
  const isChatPage =
    location.pathname === "/" || location.pathname.startsWith("/chat");
  const { data, isPending } = useConversations(isChatPage);
  const { logout } = useAuthContext();

  return (
    <aside className="flex h-screen w-72 shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
          <ShieldCheck className="h-5 w-5 text-teal-700" />
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
        <Link
          to="/"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
        >
          <Plus className="h-4 w-4" />
          New Interaction
        </Link>
      </div>

      {isChatPage ? (
        <div className="mt-6 flex-1 overflow-y-auto px-3">
          <p className="px-2 text-xs font-semibold tracking-wide text-gray-400">
            RECENT LOGS
          </p>
          <ul className="mt-2 space-y-1">
            {isPending && (
              <li className="px-2 py-2 text-sm text-gray-400">Loading…</li>
            )}
            {data?.data.length === 0 && (
              <li className="px-2 py-2 text-sm text-gray-400">
                No conversations yet
              </li>
            )}
            {data?.data.map((conversation) => {
              const title = conversation.title ?? `Chat ${conversation.id}`;
              return (
                <li key={conversation.id}>
                  <Link
                    to="/chat/$conversationId"
                    params={{ conversationId: String(conversation.id) }}
                    title={title}
                    className="block w-full rounded-md px-2 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 [&.active]:bg-gray-100 [&.active]:font-semibold [&.active]:text-gray-900"
                  >
                    <span className="line-clamp-2">{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex-1" />
      )}

      <div className="border-t border-gray-100 px-3 py-3">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          <ShieldCheck className="h-4 w-4" />
          Security
        </button>
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          <HelpCircle className="h-4 w-4" />
          Support
        </button>
        <button
          type="button"
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </div>
    </aside>
  );
}
