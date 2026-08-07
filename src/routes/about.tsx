import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-center gap-2 p-8">
      <h1 className="text-3xl font-bold text-gray-900">About</h1>
      <p className="text-gray-600">This route is proof the router works.</p>
    </div>
  )
}
