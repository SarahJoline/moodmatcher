export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold mb-6">MoodMatcher</h1>
      <p className="text-lg">
        Find a book, a song, and a sustainability tip based on your mood &
        weather 🌦
      </p>
    </div>
  );
}
