export interface DocumentItem {
  id: number;
  uuid: string;
  filename: string;
  status: string;
  processing_stage: string | null;
  processing_version: number;
  expired: boolean;
  expiring_soon: boolean;
  days_until_expiry: number | null;
  expires_at: string | null;
  created_by: number;
}

export interface DocumentsPagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface DocumentsResponse {
  message: string;
  documents: DocumentItem[];
  pagination: DocumentsPagination;
}
