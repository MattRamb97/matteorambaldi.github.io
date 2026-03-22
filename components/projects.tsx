'use client'

import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'MSc Thesis',
    description: 'Design and optimization of deep ensembles and distilled models for LCZ classification, including super-resolution preprocessing, model compression, and deployment on Axelera Metis accelerator.',
    tags: ['PyTorch', 'ONNX', 'Model Compression', 'Edge Deployment'],
    year: 'MSc Thesis',
    github: 'https://github.com/MattRamb97/Enhanced-LCZ42-Ensembles-to-EdgeAI-Axelera-Metis',
  },
  {
    title: 'Natural Language Processing',
    description: 'Ingredient-driven NLP model development for recipe analysis, food classification, and culinary text understanding.',
    tags: ['NLP', 'Text Analysis', 'Python'],
    year: 'University',
    github: 'https://github.com/MattRamb97/Erasmus_Hardgainers',
  },
  {
    title: 'AI Entrepreneurship',
    description: 'Greenify - AI powered sustainable energy solution leveraging machine learning for optimized energy consumption and environmental impact.',
    tags: ['AI', 'Sustainability', 'Startup'],
    year: 'University',
    github: 'https://github.com/MattRamb97/Greenify',
  },
  {
    title: 'Intelligent Robotics',
    description: 'Development of ROS packages for TIAGO robot including goal-based navigation via Actionlib, custom ROS messages/actions, and multi-node coordination for pick-and-place and environment interaction tasks.',
    tags: ['ROS', 'C++', 'Actionlib', 'Autonomous Systems'],
    year: 'University',
    github: 'https://github.com/MattRamb97/Intelligent_Robotics',
  },
  {
    title: 'Computer Vision',
    description: 'Implementation of a hand detection and segmentation system using color-space thresholding, morphological operations, and contour analysis for real-time region extraction.',
    tags: ['Python', 'OpenCV', 'Segmentation', 'Contours'],
    year: 'University',
    github: 'https://github.com/MattRamb97/Human_hands_detection_and_segmentation',
  },
  {
    title: 'BSc Thesis',
    description: 'Neural networks for Acute Lymphoblastic Leukemia detection, developing AI models to identify cancerous cells from microscopy images.',
    tags: ['Medical AI', 'Neural Networks', 'Healthcare'],
    year: 'BSc Thesis',
    github: 'https://github.com/MattRamb97/BSc_Research_Thesis',
  },
  {
    title: 'BSc Research Training',
    description: 'Automatic orientation system using neural networks for spatial navigation and positioning applications.',
    tags: ['Neural Networks', 'Navigation', 'Research'],
    year: 'University',
    github: null,
  },
  {
    title: 'Artificial Intelligence',
    description: 'Simulation of neural networks in Matlab on the MNIST dataset for handwritten digit recognition and deep learning exploration.',
    tags: ['Matlab', 'MNIST', 'Deep Learning'],
    year: 'University',
    github: null,
  },
  {
    title: 'Foundamental of AI',
    description: 'Classification of plankton using machine learning techniques for automated marine organism identification and environmental monitoring.',
    tags: ['Machine Learning', 'Classification', 'Python'],
    year: 'University',
    github: null,
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-32 md:px-12 lg:px-24" suppressHydrationWarning>
      <div className="mb-16">
        <p className="mb-4 font-mono text-sm tracking-widest text-muted-foreground uppercase">
          Selected Work
        </p>
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Projects
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-muted-foreground/30 hover:bg-secondary/50"
            suppressHydrationWarning
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${project.title} on GitHub`}
              />
            )}
            <div className="mb-4 flex items-start justify-between">
              <span className="font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
              <ArrowUpRight
                className={`h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  project.github
                    ? 'text-muted-foreground group-hover:text-foreground'
                    : 'text-muted-foreground/30'
                }`}
              />
            </div>

            <h3 className="mb-3 text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-foreground">
              {project.title}
            </h3>

            <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:border-muted-foreground/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
