import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { RiBrainFill, RiGameFill, RiMapPinFill } from 'react-icons/ri'

const projects = [
  {
    id: 1,
    title: 'What Are You Craving?',
    subtitle: 'LLM Recipe App',
    icon: <RiBrainFill />,
    color: 'from-neon-blue/20 to-neon-violet/20',
    accent: '#00d4ff',
    tags: ['LLM', 'Python', 'NLP', 'Flask', 'OpenAI'],
    description:
      'An intelligent recipe recommendation app powered by large language models. Tell it what ingredients you have, your mood, or a craving — it crafts personalised recipes with nutritional insights in natural language.',
    highlights: ['LLM prompt engineering', 'Context-aware recommendations', 'REST API backend', 'Natural language UX'],
    emoji: '🍳',
    github: 'https://github.com',
    demo: '#',
  },
  {
    id: 2,
    title: 'Butter Bot Explorer',
    subtitle: 'Game with A* Search',
    icon: <RiGameFill />,
    color: 'from-neon-violet/20 to-neon-pink/20',
    accent: '#8b5cf6',
    tags: ['A* Search', 'Python', 'Pathfinding', 'Game Dev'],
    description:
      'A browser-based game built around the A* pathfinding algorithm. Watch the Butter Bot navigate procedurally generated mazes in real time, with live visualisation of the search heuristic.',
    highlights: ['A* heuristic search', 'Real-time grid visualisation', 'Procedural maze generation', 'Interactive step-through mode'],
    emoji: '🤖',
    github: 'https://github.com',
    demo: '#',
  },
  {
    id: 3,
    title: 'London AirBnB Analysis',
    subtitle: 'Data Visualisation',
    icon: <RiMapPinFill />,
    color: 'from-neon-pink/20 to-neon-blue/20',
    accent: '#f472b6',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Power BI', 'EDA'],
    description:
      'An end-to-end exploratory data analysis of 50,000+ London AirBnB listings. Uncovers pricing trends, neighbourhood insights, and host behaviour patterns through rich interactive dashboards.',
    highlights: ['50K+ record EDA', 'Interactive Power BI dashboard', 'Geospatial mapping', 'Predictive price modelling'],
    emoji: '🏙️',
    github: 'https://github.com',
    demo: '#',
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card p-6 relative overflow-hidden group cursor-pointer"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Glow line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
              style={{ background: `${project.accent}20`, color: project.accent }}
            >
              {project.icon}
            </div>
            <div>
              <h3 className="font-orbitron text-base font-bold text-white">{project.title}</h3>
              <p className="font-space text-xs" style={{ color: project.accent }}>
                {project.subtitle}
              </p>
            </div>
          </div>
          <span className="text-3xl">{project.emoji}</span>
        </div>

        {/* Description */}
        <p className="font-space text-sm text-gray-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <AnimatePresence>
          {hovered && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 space-y-1"
            >
              {project.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 font-space text-xs text-gray-300">
                  <span style={{ color: project.accent }}>▸</span> {h}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-space font-medium border"
              style={{
                borderColor: `${project.accent}30`,
                color: project.accent,
                background: `${project.accent}10`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-space text-xs text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-1.5 font-space text-xs text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      {/* Background glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-neon-blue/4 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-neon-pink/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-orbitron text-neon-violet text-xs tracking-[0.3em] uppercase mb-3">
            02 / Projects
          </p>
          <h2 className="section-heading gradient-text">What I've Built</h2>
          <p className="font-space text-gray-500 mt-4 max-w-xl mx-auto">
            Real AI/ML projects — each with a live demo, source code, and a story.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-neon-violet to-neon-pink mx-auto mt-4" />
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neon-violet/30 font-space text-sm text-neon-violet hover:bg-neon-violet/10 hover:shadow-neon-violet transition-all duration-300"
          >
            <FaGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
