import { ArrowUpRight, Github, IdCard, Linkedin, Mail } from 'lucide-react'

const email = 'rambaldimatteo@yahoo.it'

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/MattRamb97' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/matteo-rambaldi-5a66a6107' },
  { icon: IdCard, label: 'ORCID', href: 'https://orcid.org/0009-0006-7145-7472' },
  { icon: Mail, label: 'Email', href: `mailto:${email}` },
]

export function Contact() {
  return (
    <section id="contact" className="section bg-background">
      <div className="reveal container-apple mx-auto max-w-2xl text-center">
        <p className="type-eyebrow mb-3 text-muted-foreground">Get in touch</p>
        <h2 className="type-headline mb-6 text-foreground">{"Let's connect and collaborate."}</h2>
        <p className="type-subhead mb-10 font-normal text-muted-foreground">
          {"I'm always interested in discussing new projects, creative ideas, or opportunities in AI and software engineering."}
        </p>

        <a href={`mailto:${email}`} className="btn-pill btn-primary mb-14">
          {email}
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
        </a>

        <ul className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-muted-foreground transition-[background-color,color,transform] duration-300 ease-apple hover:scale-105 hover:bg-secondary hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" strokeWidth={1.75} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
