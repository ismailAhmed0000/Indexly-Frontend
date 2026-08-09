import { useState } from "react";
import { Bot } from "lucide-react";
import {
  useConversationDetail,
  useSendMessage,
} from "../../features/conversations/useConversations";
import { ChatComposer } from "./ChatComposer";

export function ConversationThread({
  conversationId,
}: {
  conversationId: string;
}) {
  const { data, isPending, error } = useConversationDetail(conversationId);
  const sendMessage = useSendMessage();
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);

  function handleSend(message: string) {
    setPendingMessage(message);
    sendMessage.mutate(
      { message, conversation_id: Number(conversationId) },
      { onSettled: () => setPendingMessage(null) },
    );
  }

  if (isPending) {
    return (
      <p className="px-6 py-10 text-center text-sm text-gray-400">
        Loading conversation…
      </p>
    );
  }

  if (error) {
    return (
      <p className="px-6 py-10 text-center text-sm text-red-600">
        Failed to load conversation.
      </p>
    );
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-10">
      {data.conversation.messages.map((message) =>
        message.role === "user" ? (
          <div key={message.id} className="flex justify-end">
            <div className="max-w-xl whitespace-pre-wrap rounded-3xl bg-gray-900 px-5 py-3 text-sm text-white">
              {message.content}
            </div>
          </div>
        ) : (
          <div key={message.id} className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <Bot className="h-4 w-4" />
            </div>
            <div className="whitespace-pre-wrap pt-1.5 text-sm leading-relaxed text-gray-800">
              {message.content}
            </div>
          </div>
        ),
      )}

      {pendingMessage && (
        <>
          <div className="flex justify-end">
            <div className="max-w-xl whitespace-pre-wrap rounded-3xl bg-gray-900 px-5 py-3 text-sm text-white">
              {pendingMessage}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <Bot className="h-4 w-4" />
            </div>
            <div className="pt-1.5 text-sm text-gray-400">Thinking…</div>
          </div>
        </>
      )}

      {sendMessage.isError && (
        <p className="text-sm text-red-600">
          Failed to send message. Try again.
        </p>
      )}

      <div className="border-t border-gray-200 pt-4">
        <ChatComposer onSend={handleSend} isSending={sendMessage.isPending} />
      </div>
    </div>
  );
}
