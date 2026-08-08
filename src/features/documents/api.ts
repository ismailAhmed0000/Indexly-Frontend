import { apiFetch } from "../../lib/api-client";
import type { DocumentsResponse } from "./types";

export function fetchDocuments(page: number) {
  return apiFetch<DocumentsResponse>(`/documents?page=${page}`);
}
