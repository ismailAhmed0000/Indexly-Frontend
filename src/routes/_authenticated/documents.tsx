import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Folder, Clock, ShieldCheck, Plus } from "lucide-react";
import { PageHeader } from "../../components/Layout/PageHeader";
import { AddDocumentModal } from "../../components/documents/AddDocumentModal";
import { Breadcrumb } from "../../components/Layout/Breadcrumb";
import { StatCard } from "../../components/documents/StatCard";
import { DocumentsTable } from "../../components/documents/DocumentsTable";
import { useDocuments } from "../../features/documents/useDocuments";

export const Route = createFileRoute("/_authenticated/documents")({
  component: DocumentsPage,
});

function DocumentsPage() {
  const [page, setPage] = useState(1);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const { data, isPending, error } = useDocuments(page);

  return (
    <>
      <PageHeader title="Documents" />
      <div className="p-6">
        <Breadcrumb items={[{ label: "Workspace" }, { label: "Documents" }]} />

        <div className="mt-2 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Document Repository
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage and audit documents..
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsAddOpen(true)}
            className="flex items-center gap-2 rounded-md bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
          >
            <Plus className="h-4 w-4" />
            Add New Doc
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard
            icon={Folder}
            iconClassName="bg-teal-50 text-teal-600"
            label="Total Files"
            value={data?.pagination.total ?? 0}
          />
          <StatCard
            icon={Clock}
            iconClassName="bg-amber-50 text-amber-600"
            label="Expiring Soon"
            value={data?.documents.filter((d) => d.expiring_soon).length ?? 0}
          />
          <StatCard
            icon={ShieldCheck}
            iconClassName="bg-green-50 text-green-600"
            label="Expired"
            value={data?.documents.filter((d) => d.expired).length ?? 0}
          />
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center gap-4 border-b border-gray-100 px-6 py-3 text-sm font-medium text-gray-500">
            <span className="text-gray-900">All Files</span>
            <span>Recent</span>
            <span>Starred</span>
          </div>

          {isPending && (
            <p className="px-6 py-10 text-center text-sm text-gray-400">
              Loading documents…
            </p>
          )}
          {error && (
            <p className="px-6 py-10 text-center text-sm text-red-600">
              Failed to load documents.
            </p>
          )}
          {data && <DocumentsTable documents={data.documents} />}

          {data && (
            <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4 text-sm text-gray-500">
              <span>
                Showing {data.documents.length} of {data.pagination.total}{" "}
                documents
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="rounded-md border border-gray-200 px-3 py-1.5 font-medium text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={page >= data.pagination.last_page}
                  onClick={() => setPage((p) => p + 1)}
                  className="rounded-md border border-gray-200 px-3 py-1.5 font-medium text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <AddDocumentModal open={isAddOpen} onClose={() => setIsAddOpen(false)} />
    </>
  );
}
