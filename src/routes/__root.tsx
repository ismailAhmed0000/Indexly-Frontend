import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <nav className="flex gap-4 border-b border-gray-200 px-4 py-3">
        {/* <Link to="/" className="font-medium text-gray-700 [&.active]:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="font-medium text-gray-700 [&.active]:text-blue-600">
          About
        </Link> */}
      </nav>
      <Outlet />
    </>
  );
}
