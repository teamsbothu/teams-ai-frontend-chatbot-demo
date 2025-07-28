
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">AI Chatbot</h1>
        <div className="mt-4 p-4 rounded-lg bg-gray-900 w-full max-w-md h-96 overflow-y-auto">
          <p><strong>🤖 Chatbot:</strong> Szia! Miben segíthetek?</p>
        </div>
        <input
          type="text"
          placeholder="Írj ide..."
          className="w-full max-w-md px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
        />
      </div>
    </main>
  )
}
