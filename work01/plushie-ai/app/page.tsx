export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary-600 mb-4">
            PlushieAI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your images into beautiful plushie designs
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
