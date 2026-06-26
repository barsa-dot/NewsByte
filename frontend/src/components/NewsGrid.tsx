import { useEffect, useState } from "react";
import axios from "axios";
import { NewsCard, type NewsArticle } from "./NewsCard";

const API_URL = "https://news-byte-eight.vercel.app/news";

function SkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="aspect-[16/10] animate-pulse bg-muted" />
      <div className="space-y-3 p-5">
        <div className="h-3 w-1/3 animate-pulse rounded bg-muted" />
        <div className="h-5 w-full animate-pulse rounded bg-muted" />
        <div className="h-5 w-4/5 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}

export function NewsGrid() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get<NewsArticle[]>(API_URL);
      setArticles(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError("Unable to load news right now. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-border bg-card p-10 text-center">
        <p className="text-base font-medium text-foreground">Something went wrong</p>
        <p className="mt-1 text-sm text-muted-foreground">{error}</p>
        <button
          onClick={fetchNews}
          className="mt-5 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          Try again
        </button>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-10 text-center">
        <p className="text-base font-medium text-foreground">No articles yet</p>
        <p className="mt-1 text-sm text-muted-foreground">Check back soon for fresh headlines.</p>
      </div>
    );
  }


  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a, i) => (
        <NewsCard key={`${a.url}-${i}`} article={a} />
      ))}
    </div>
  );
}
