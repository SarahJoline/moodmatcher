import Button from "./components/Button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-josefin">
      <h1 className="text-4xl font-bold mb-6">MoodMatcher</h1>

      <Button />
    </div>
  );
}
