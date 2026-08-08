export interface DocumentItem {
  id: number;
  name: string;
  type: string;
  status: string;
  added_by: string;
  created_at: string | null;
  expiring_at: string | null;
  expiry_status: "valid" | "expiring" | "expired";
}

export interface DocumentsResponse {
  data: DocumentItem[];
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
}
