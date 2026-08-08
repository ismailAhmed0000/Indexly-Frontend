import { apiFetch } from "../../lib/api-client";
import type { DocumentsResponse } from "./types";

export function fetchDocuments(page: number) {
  return apiFetch<DocumentsResponse>(`/documents?page=${page}`);
}

export function uploadDocumets(files: File[]) {
  const formData = new FormData();
  files.forEach((file) => formData.append("files[]", file));

  return apiFetch<{ message: String }>("/documents/structured-upload", {
    method: "POST",
    body: "formData",
  });
}
