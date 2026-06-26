import "./styles.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { NewsGrid } from "./components/NewsGrid";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="mx-auto max-w-4xl px-4 py-20 text-center"
          >
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
              Today's Headlines
            </span>

            <h1 className="mt-6 text-5xl font-bold">
              Latest News.
              <br />
              <span className="text-primary">No Noise.</span>
            </h1>

            <p className="mt-6 text-lg">
              Stay updated with the world's top headlines.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">
            Latest News
          </h2>

          <NewsGrid />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;