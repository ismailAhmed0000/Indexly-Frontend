import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const { data, isPending, error } = useQuery({
    queryKey: ['example'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      if (!res.ok) throw new Error('Network response was not ok')
      return res.json() as Promise<{ id: number; title: string; completed: boolean }>
    },
  })

  return (
    <div className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold text-gray-900">Indexly Frontend</h1>
      <p className="text-gray-600">
        React + TanStack Router + TanStack Query + Tailwind CSS
      </p>

      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="mb-2 text-sm font-semibold text-gray-500">
          TanStack Query demo
        </h2>
        {isPending && <p className="text-gray-500">Loading…</p>}
        {error && <p className="text-red-600">Error: {error.message}</p>}
        {data && (
          <pre className="overflow-x-auto rounded bg-gray-50 p-3 text-xs text-gray-800">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  )
}
