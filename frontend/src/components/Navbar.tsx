import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            N
          </div>
          <span className="text-xl font-bold tracking-tight">NewsByte</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            to="/"
            className="rounded-md px-3 py-2 text-foreground transition-colors hover:bg-muted"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
          >
            Home
          </Link>
          <a
            href="#latest"
            className="rounded-md px-3 py-2 text-foreground transition-colors hover:bg-muted"
          >
            Latest News
          </a>
        </nav>
      </div>
    </header>
  );
}
