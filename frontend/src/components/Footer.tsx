export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 mt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 sm:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold">
            N
          </div>
          <span className="font-semibold tracking-tight">NewsByte</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NewsByte. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
