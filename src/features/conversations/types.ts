export interface Conversation {
  id: number;
  title: string | null;
  document_ids: number[] | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
  created_by: number;
  messages_count: number;
}

export interface ConversationsResponse {
  current_page: number;
  data: Conversation[];
  last_page: number;
  per_page: number;
  total: number;
}

export interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

export interface ConversationDetail {
  id: number;
  title: string | null;
  document_ids: number[] | null;
  created_by: number;
  messages: Message[];
  created_at: string;
  updated_at: string;
}

export interface ConversationDetailResponse {
  conversation: ConversationDetail;
}

export interface SendMessagePayload {
  message: string;
  conversation_id: number | null;
}

export interface SendMessageResponse {
  conversation_id: number;
  message: Message;
}
