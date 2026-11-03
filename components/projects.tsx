import { ChevronRight } from 'lucide-react'

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
    <section id="projects" className="section bg-surface">
      <div className="container-wide">
        <header className="reveal mb-12 md:mb-16">
          <h2 className="type-headline text-foreground">
            Projects. <span className="text-muted-foreground">Selected work, from research to deployment.</span>
          </h2>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`reveal tile group relative flex flex-col p-8 shadow-tile ${project.github ? 'tile-interactive' : ''}`}
            >
              <p className="type-caption mb-2 font-semibold text-tertiary-foreground">{project.year}</p>

              <h3 className="type-title mb-3 text-foreground">{project.title}</h3>

              <p className="type-body mb-6 flex-1 text-muted-foreground">{project.description}</p>

              <ul className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="type-micro rounded-full bg-surface px-3 py-1.5 text-muted-foreground">
                    {tag}
                  </li>
                ))}
              </ul>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-apple type-body after:absolute after:inset-0 after:rounded-tile after:content-['']"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  View on GitHub
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.25} />
                </a>
              ) : (
                <p className="type-body text-tertiary-foreground">Private repository</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
