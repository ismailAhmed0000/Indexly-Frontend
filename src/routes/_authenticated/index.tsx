import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../../components/Layout/PageHeader";
import { ChatDashboard } from "../../components/chat/ChatDashboard";

export const Route = createFileRoute("/_authenticated/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <PageHeader title="Covenant AI" />
      <ChatDashboard />
    </>
  );
}
