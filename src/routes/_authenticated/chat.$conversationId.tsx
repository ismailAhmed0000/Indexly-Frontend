import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../../components/Layout/PageHeader";
import { ConversationThread } from "../../components/chat/ConversationThread";
import { useConversationDetail } from "../../features/conversations/useConversations";

export const Route = createFileRoute("/_authenticated/chat/$conversationId")({
  component: ConversationPage,
});

function ConversationPage() {
  const { conversationId } = Route.useParams();
  const { data } = useConversationDetail(conversationId);
  const title = data?.conversation.title ?? `Chat ${conversationId}`;

  return (
    <>
      <PageHeader title={title} />
      <ConversationThread conversationId={conversationId} />
    </>
  );
}
