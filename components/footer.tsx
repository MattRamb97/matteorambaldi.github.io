export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-6 py-8 md:px-12 lg:px-24">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Matteo Rambaldi. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          AI SYSTEMS ENGINEER
        </p>
      </div>
    </footer>
  )
}
