import { createFileRoute, redirect } from "@tanstack/react-router";
import { useAuthContext } from "../features/auth/AuthContext";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw redirect({ to: "/login" });
    }
  },
  component: HomeComponent,
});

function HomeComponent() {
  const { user, logout } = useAuthContext();

  return (
    <div className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome{user?.name ? `, ${user.name}` : ""}
      </h1>
      <button
        onClick={logout}
        className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
      >
        Log out
      </button>
    </div>
  );
}
