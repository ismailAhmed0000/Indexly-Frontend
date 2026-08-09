import { useState } from "react";
import { Send } from "lucide-react";

export function ChatComposer({
  onSend,
  isSending,
}: {
  onSend?: (message: string) => void;
  isSending?: boolean;
}) {
  const [value, setValue] = useState("");

  function handleSend() {
    const trimmed = value.trim();
    if (!trimmed || !onSend || isSending) return;
    onSend(trimmed);
    setValue("");
  }

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4">
      <textarea
        rows={3}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        disabled={isSending}
        placeholder="Enter coordinates, vessel names, or complex maritime queries..."
        className="w-full resize-none text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none disabled:opacity-50"
      />
      <div className="mt-2 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs font-medium text-teal-600">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
          {isSending ? "THINKING…" : "AI READY"}
        </span>
        <button
          type="button"
          onClick={handleSend}
          disabled={!onSend || !value.trim() || isSending}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
