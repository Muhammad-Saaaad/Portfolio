import { motion } from 'framer-motion'

const categories = [
  {
    label: 'Languages',
    color: '#00d4ff',
    skills: [
      { name: 'Python', level: 95, icon: '🐍' },
      { name: 'SQL', level: 85, icon: '🗄️' },
      { name: 'JavaScript', level: 70, icon: '🟨' },
    ],
  },
  {
    label: 'ML / AI',
    color: '#8b5cf6',
    skills: [
      { name: 'TensorFlow', level: 88, icon: '🔶' },
      { name: 'HuggingFace', level: 85, icon: '🤗' },
      { name: 'scikit-learn', level: 90, icon: '📐' },
      { name: 'PyTorch', level: 75, icon: '🔥' },
    ],
  },
  {
    label: 'Data & Viz',
    color: '#f472b6',
    skills: [
      { name: 'Power BI', level: 88, icon: '📊' },
      { name: 'Pandas', level: 93, icon: '🐼' },
      { name: 'Matplotlib', level: 85, icon: '📈' },
      { name: 'Tableau', level: 78, icon: '🎨' },
    ],
  },
  {
    label: 'Tools & Infra',
    color: '#06b6d4',
    skills: [
      { name: 'Flask', level: 80, icon: '⚗️' },
      { name: 'Git', level: 88, icon: '🌿' },
      { name: 'Docker', level: 65, icon: '🐳' },
      { name: 'Jupyter', level: 95, icon: '📓' },
    ],
  },
]

function SkillBar({ name, level, icon, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="mb-4"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-space text-sm text-gray-300 flex items-center gap-2">
          <span>{icon}</span> {name}
        </span>
        <span className="font-orbitron text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.08 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
        />
      </div>
    </motion.div>
  )
}

const floatingTech = ['🤗', '🔶', '🐍', '📊', '⚗️', '🔥', '🐳', '📐']

export default function TechStack() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* Floating tech icons background */}
      {floatingTech.map((icon, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl opacity-5 pointer-events-none select-none"
          style={{
            top: `${10 + (i * 11) % 80}%`,
            left: `${5 + (i * 13) % 90}%`,
          }}
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        >
          {icon}
        </motion.span>
      ))}

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-orbitron text-neon-cyan text-xs tracking-[0.3em] uppercase mb-3">
            04 / Tech Stack
          </p>
          <h2 className="section-heading gradient-text">My Toolkit</h2>
          <p className="font-space text-gray-500 mt-4 max-w-xl mx-auto">
            The languages, frameworks, and tools I use to build intelligent systems.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mt-4" />
        </motion.div>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="glass-card p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-orbitron font-bold"
                  style={{ background: `${cat.color}15`, color: cat.color, border: `1px solid ${cat.color}30` }}
                >
                  {ci + 1}
                </div>
                <h3
                  className="font-orbitron text-sm font-semibold tracking-wide"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </h3>
              </div>

              {cat.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} color={cat.color} index={si} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Pipeline flowchart visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 glass-card p-8"
        >
          <p className="font-orbitron text-xs text-neon-blue tracking-[0.2em] uppercase mb-6 text-center">
            Typical ML Pipeline
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: 'Raw Data', icon: '📥', color: '#00d4ff' },
              { label: 'EDA', icon: '🔍', color: '#06b6d4' },
              { label: 'Feature Eng.', icon: '⚙️', color: '#8b5cf6' },
              { label: 'Model Train', icon: '🔶', color: '#8b5cf6' },
              { label: 'Evaluation', icon: '📐', color: '#f472b6' },
              { label: 'Deploy', icon: '🚀', color: '#00d4ff' },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="px-3 py-2 rounded-lg text-xs font-space font-medium text-center"
                    style={{ background: `${step.color}10`, border: `1px solid ${step.color}30`, color: step.color }}
                  >
                    <div className="text-base mb-0.5">{step.icon}</div>
                    {step.label}
                  </div>
                </div>
                {i < 5 && (
                  <span className="text-gray-600 text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
