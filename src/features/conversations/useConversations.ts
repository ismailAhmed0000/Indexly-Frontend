import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchConversation, fetchConversationDetail, sendChatMessage } from "./api";

export function useConversations(enabled = true) {
  return useQuery({
    queryKey: ["conversations"],
    queryFn: fetchConversation,
    enabled,
  });
}

export function useConversationDetail(id: string) {
  return useQuery({
    queryKey: ["conversations", id],
    queryFn: () => fetchConversationDetail(id),
  });
}

export function useSendMessage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sendChatMessage,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["conversations"] });
    },
  });
}
