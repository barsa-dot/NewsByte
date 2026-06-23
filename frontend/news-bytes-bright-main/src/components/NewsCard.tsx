import { ExternalLink } from "lucide-react";

export interface NewsArticle {
  title: string;
  source: string;
  image: string;
  url: string;
  publishedAt: string;
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
          <span>{article.source}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">{formatDate(article.publishedAt)}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug text-foreground line-clamp-3">
          {article.title}
        </h3>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-[var(--color-primary-hover)]"
        >
          Read more <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
