'use client'

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

export function Skills() {
  return (
    <section id="skills" className="px-6 py-32 md:px-12 lg:px-24">
      <div className="mb-16">
        <p className="mb-4 font-mono text-sm tracking-widest text-muted-foreground uppercase">
          Expertise
        </p>
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Skills
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="space-y-6">
            <h3 className="text-lg font-medium text-foreground">
              {category.title}
            </h3>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {skill.proficiency}
                    </span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-muted-foreground transition-all duration-700 ease-out group-hover:bg-foreground"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills Grid */}
      <div className="mt-20">
        <h3 className="mb-8 text-lg font-medium text-foreground">Also experienced with</h3>
        <div className="flex flex-wrap gap-3">
          {[
            'PyTorch', 'TensorFlow', 'ONNX', 'OpenCV', 'ROS', 'Linux',
            'Git', 'Docker', 'CMake', 'SQL', 'Embedded Systems', 'Edge AI',
            'Image Processing', 'Data Analysis', 'Research', 'Problem Solving'
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-muted-foreground/50 hover:text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
