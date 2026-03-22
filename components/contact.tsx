import { ArrowUpRight, Github, IdCard, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/MattRamb97' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/matteo-rambaldi-5a66a6107' },
  { icon: IdCard, label: 'ORCID', href: 'https://orcid.org/0009-0006-7145-7472' },
  { icon: Mail, label: 'Email', href: 'mailto:rambaldimatteo@yahoo.it' },
]

export function Contact() {
  return (
    <section id="contact" className="px-6 py-32 md:px-12 lg:px-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-muted-foreground uppercase">
          Get in Touch
        </p>
        <h2 className="mb-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl text-balance">
          {"Let's connect and collaborate."}
        </h2>
        <p className="mb-12 text-muted-foreground leading-relaxed">
          {"I'm always interested in discussing new projects, creative ideas, or opportunities in AI and software engineering."}
        </p>

        <a
          href="mailto:rambaldimatteo@yahoo.it"
          className="group mb-16 inline-flex items-center gap-2 text-lg text-foreground transition-colors duration-300 hover:text-muted-foreground"
        >
          rambaldimatteo@yahoo.it
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-muted-foreground/50 hover:text-foreground hover:bg-secondary"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
