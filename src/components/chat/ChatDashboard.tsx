import { Compass, ShieldCheck, BarChart3, Sparkles } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { ChatComposer } from "./ChatComposer";
import { useSendMessage } from "../../features/conversations/useConversations";

const quickActions = [
  {
    icon: Compass,
    title: "Fleet Management",
    description:
      "Analyze real-time data for your entire fleet across global routes.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Assessment",
    description:
      "Generate insurance and safety risk reports for specific corridors.",
  },
  {
    icon: BarChart3,
    title: "Market Dynamics",
    description: "Forecast freight rates and commodity flow trends.",
  },
];

export function ChatDashboard() {
  const navigate = useNavigate();
  const sendMessage = useSendMessage();

  function handleSend(message: string) {
    sendMessage.mutate(
      { message, conversation_id: null },
      {
        onSuccess: (data) => {
          navigate({
            to: "/chat/$conversationId",
            params: { conversationId: String(data.conversation_id) },
          });
        },
      },
    );
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
        <Sparkles className="h-6 w-6 text-teal-600" />
      </div>

      <h1 className="mt-4 text-3xl font-bold text-gray-900">
        What are you working on?
      </h1>
      <p className="mt-2 max-w-xl text-center text-gray-500">
        Access real-time vessel tracking, route optimization, and deep maritime
        intelligence with Covenant AI.
      </p>

      <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
        {quickActions.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-lg border border-gray-200 bg-white p-5 text-left hover:border-gray-300"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-50">
              <Icon className="h-5 w-5 text-teal-600" />
            </div>
            <p className="mt-3 font-semibold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full">
        <ChatComposer onSend={handleSend} isSending={sendMessage.isPending} />
      </div>
    </div>
  );
}
