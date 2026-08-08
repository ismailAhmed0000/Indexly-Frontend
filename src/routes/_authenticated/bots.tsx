import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../../components/Layout/PageHeader";
import { EmptyState } from "../../components/Layout/EmptyState";

export const Route = createFileRoute("/_authenticated/bots")({
  component: BotsComponent,
});

function BotsComponent() {
  return (
    <>
      <PageHeader title="Bots" />
      <EmptyState message="Bots section is ready for your next step." />
    </>
  );
}
