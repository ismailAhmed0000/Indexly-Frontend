import { apiFetch } from "../../lib/api-client";
import type {
  ConversationDetailResponse,
  ConversationsResponse,
  SendMessagePayload,
  SendMessageResponse,
} from "./types";

export function fetchConversation() {
  return apiFetch<ConversationsResponse>("/conversations");
}

export function fetchConversationDetail(id: string) {
  return apiFetch<ConversationDetailResponse>(`/conversations/${id}`);
}

export function sendChatMessage(payload: SendMessagePayload) {
  return apiFetch<SendMessageResponse>("/chat", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
