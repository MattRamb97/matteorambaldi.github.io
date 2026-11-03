const skillCategories = [
  {
    title: 'AI Development',
    skills: [
      { name: 'Deep Learning & Neural Networks', level: 90, proficiency: 'Expert' },
      { name: 'Computer Vision', level: 85, proficiency: 'Advanced' },
      { name: 'Edge AI Deployment', level: 82, proficiency: 'Advanced' },
      { name: 'Robotics & ROS', level: 78, proficiency: 'Strong' },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 92, proficiency: 'Expert' },
      { name: 'C / C++', level: 80, proficiency: 'Advanced' },
      { name: 'MATLAB', level: 78, proficiency: 'Strong' },
      { name: 'Java', level: 72, proficiency: 'Working Knowledge' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React / Next.js', level: 80, proficiency: 'Advanced' },
      { name: 'TypeScript / JavaScript', level: 78, proficiency: 'Strong' },
      { name: 'Tailwind CSS', level: 82, proficiency: 'Advanced' },
      { name: 'HTML / CSS', level: 85, proficiency: 'Advanced' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Italian', level: 100, proficiency: 'Native · CEFR C2' },
      { name: 'English', level: 80, proficiency: 'Professional Working · CEFR B2' },
    ],
  },
]

const tools = [
  'PyTorch',
  'TensorFlow',
  'ONNX',
  'OpenCV',
  'ROS',
  'Linux',
  'Git',
  'Docker',
  'CMake',
  'SQL',
  'Embedded Systems',
  'Edge AI',
  'Image Processing',
  'Data Analysis',
  'Research',
  'Problem Solving',
]

export function Skills() {
  return (
    <section id="skills" className="section bg-surface">
      <div className="container-wide">
        <header className="reveal mb-12 md:mb-16">
          <h2 className="type-headline text-foreground">
            Skills. <span className="text-muted-foreground">The tools behind the work.</span>
          </h2>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title} className="reveal tile p-8 shadow-tile md:p-10">
              <h3 className="type-title mb-8 text-foreground">{category.title}</h3>

              <ul className="space-y-6">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-2.5 flex items-baseline justify-between gap-4">
                      <span className="type-body text-foreground">{skill.name}</span>
                      <span className="type-caption shrink-0 text-right text-tertiary-foreground">
                        {skill.proficiency}
                      </span>
                    </div>
                    <div
                      className="h-1.5 overflow-hidden rounded-full bg-secondary"
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div className="h-full" style={{ width: `${skill.level}%` }}>
                        <div className="bar-fill h-full rounded-full bg-primary" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal mt-20">
          <h3 className="type-eyebrow mb-6 text-foreground">Also experienced with</h3>
          <ul className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <li
                key={tool}
                className="type-caption rounded-full bg-card px-4 py-2 text-foreground shadow-tile transition-transform duration-300 ease-apple hover:scale-[1.04]"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
