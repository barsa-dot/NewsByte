import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NewsGrid } from "@/components/NewsGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NewsByte — Latest News. No Noise." },
      {
        name: "description",
        content: "Stay updated with the world's top headlines on NewsByte.",
      },
      { property: "og:title", content: "NewsByte — Latest News. No Noise." },
      {
        property: "og:description",
        content: "Stay updated with the world's top headlines on NewsByte.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 0%, oklch(0.96 0.04 255 / 0.6), transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-32 lg:px-8">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Today's Headlines
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Latest News.
              <br />
              <span className="text-primary">No Noise.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Stay updated with the world's top headlines.
            </p>
          </div>
        </section>

        <section id="latest" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest News</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Curated stories from trusted sources around the world.
              </p>
            </div>
          </div>
          <NewsGrid />
        </section>
      </main>

      <Footer />
    </div>
  );
}
