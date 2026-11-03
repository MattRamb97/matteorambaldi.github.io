const experiences = [
  {
    period: '2026 — Present',
    title: 'AI Embedded Software Engineer',
    company: 'Axelera AI',
    description:
      'Developing AI software solutions for embedded systems. Working on cutting-edge AI hardware acceleration and optimization.',
    technologies: ['AI', 'Embedded Systems', 'Python'],
  },
  {
    period: '2025',
    title: 'AI Embedded Software Engineer (Intern)',
    company: 'Axelera AI',
    description:
      'Developing AI software solutions for embedded systems. Working on cutting-edge AI hardware acceleration and optimization.',
    technologies: ['AI', 'Embedded Systems', 'Python'],
  },
  {
    period: '2025',
    title: "Master's Degree Student",
    company: 'University of Padua',
    description:
      "Pursuing Master's Degree in Computer Engineering with curriculum in Artificial Intelligence and Robotics.",
    technologies: ['AI', 'Robotics', 'Machine Learning'],
  },
  {
    period: '2024',
    title: 'Erasmus+ Exchange',
    company: 'University of Cyprus',
    description:
      'International academic exchange program focusing on Computer Science with specialization in Artificial Intelligence.',
    technologies: ['AI', 'Computer Science', 'Research'],
  },
  {
    period: '2021',
    title: "Bachelor's Degree",
    company: 'University of Padua',
    description:
      "Completed Bachelor's Degree in Computer Engineering, establishing a strong foundation in software development and engineering principles.",
    technologies: ['Computer Engineering', 'Programming'],
  },
  {
    period: '2016',
    title: 'CRM Software Developer',
    company: 'Turo Italia S.p.a',
    description: 'Developed customer relationship management software solutions for business applications.',
    technologies: ['CRM', 'Software Development'],
  },
  {
    period: '2015',
    title: 'ICT Professional',
    company: 'Faresin Industries S.p.a.',
    description:
      'Professional experience in the ICT sector, contributing to information and communication technology initiatives.',
    technologies: ['ICT', 'IT Support'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="section bg-background">
      <div className="container-apple">
        <header className="reveal mb-12 md:mb-16">
          <h2 className="type-headline text-foreground">
            Experience. <span className="text-muted-foreground">A path from ICT to edge AI.</span>
          </h2>
        </header>

        <ol className="border-t border-hairline">
          {experiences.map((exp) => (
            <li
              key={`${exp.period}-${exp.title}`}
              className="reveal grid gap-2 border-b border-hairline py-8 md:grid-cols-[180px_1fr] md:gap-10 md:py-10"
            >
              <p className="type-caption pt-1 font-semibold text-tertiary-foreground">{exp.period}</p>

              <div>
                <h3 className="type-title text-foreground">{exp.title}</h3>
                <p className="type-body mb-3 mt-1 font-semibold text-muted-foreground">{exp.company}</p>
                <p className="type-body mb-4 max-w-2xl text-muted-foreground">{exp.description}</p>
                <p className="type-caption text-tertiary-foreground">{exp.technologies.join(' · ')}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
