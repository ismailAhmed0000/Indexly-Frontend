import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../../components/Layout/PageHeader";
import { useAuthContext } from "../../features/auth/AuthContext";

export const Route = createFileRoute("/_authenticated/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { user, logout } = useAuthContext();

  return (
    <>
      <PageHeader title="Covenant AI" />
      <div className="flex flex-col items-center justify-center gap-4 p-16">
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
    </>
  );
}
