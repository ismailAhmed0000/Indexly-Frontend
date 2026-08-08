import { FileText } from "lucide-react";
import type { DocumentItem } from "../../features/documents/types";
import { ExpiryStatusBadge } from "./ExpiryStatusBadge";

function getFileType(filename: string) {
  const ext = filename.split(".").pop();
  return ext ? ext.toLowerCase() : "file";
}

function getExpiryStatus(doc: DocumentItem): "valid" | "expiring" | "expired" {
  if (doc.expired) return "expired";
  if (doc.expiring_soon) return "expiring";
  return "valid";
}

function formatDate(value: string | null) {
  if (!value) return "No date";
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function DocumentsTable({ documents }: { documents: DocumentItem[] }) {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="border-b border-gray-100 text-xs font-semibold uppercase tracking-wide text-gray-400">
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Type</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-6 py-3">Created Date</th>
          <th className="px-6 py-3">Expiring Date</th>
          <th className="px-6 py-3">Expiry Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {documents.map((doc) => (
          <tr key={doc.id} className="hover:bg-gray-50">
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-50 text-red-500">
                  <FileText className="h-5 w-5" />
                </div>
                <p
                  className="max-w-xs truncate font-medium text-gray-900"
                  title={doc.filename}
                >
                  {doc.filename}
                </p>
              </div>
            </td>
            <td className="px-6 py-4 text-gray-500">
              {getFileType(doc.filename)}
            </td>
            <td className="px-6 py-4 capitalize text-gray-500">
              {doc.status}
            </td>
            <td className="px-6 py-4 text-gray-500">No date</td>
            <td className="px-6 py-4 text-gray-500">
              {formatDate(doc.expires_at)}
            </td>
            <td className="px-6 py-4">
              <ExpiryStatusBadge status={getExpiryStatus(doc)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
