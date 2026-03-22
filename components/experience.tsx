import { ArrowUpRight } from 'lucide-react'

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
    title: 'Master\'s Degree Student',
    company: 'University of Padua',
    description:
      'Pursuing Master\'s Degree in Computer Engineering with curriculum in Artificial Intelligence and Robotics.',
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
    title: 'Bachelor\'s Degree',
    company: 'University of Padua',
    description:
      'Completed Bachelor\'s Degree in Computer Engineering, establishing a strong foundation in software development and engineering principles.',
    technologies: ['Computer Engineering', 'Programming'],
  },
  {
    period: '2016',
    title: 'CRM Software Developer',
    company: 'Turo Italia S.p.a',
    description:
      'Developed customer relationship management software solutions for business applications.',
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
    <section id="experience" className="px-6 py-32 md:px-12 lg:px-24">
      <div className="mb-16">
        <p className="mb-4 font-mono text-sm tracking-widest text-muted-foreground uppercase">
          Career Path
        </p>
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Experience
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-[140px] md:block" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative grid gap-4 md:grid-cols-[140px_1fr] md:gap-8"
            >
              {/* Period */}
              <div className="flex items-start">
                <span className="font-mono text-sm text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-1.5 hidden h-2 w-2 rounded-full bg-muted-foreground transition-colors duration-300 group-hover:bg-foreground md:left-[136px] md:block" />

              {/* Content */}
              <div className="rounded-lg border border-transparent p-0 transition-all duration-500 md:pl-8 group-hover:border-border group-hover:bg-card group-hover:p-6 md:group-hover:pl-8">
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-lg font-medium text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-muted-foreground">·</span>
                  <span className="flex items-center gap-1 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {exp.company}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </span>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
