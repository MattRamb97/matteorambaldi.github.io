export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface px-6">
      <div className="container-wide type-micro flex flex-col items-center justify-between gap-2 border-t border-hairline py-6 text-tertiary-foreground md:flex-row">
        <p>Copyright © {currentYear} Matteo Rambaldi. All rights reserved.</p>
        <p>AI Systems Engineer</p>
      </div>
    </footer>
  )
}
