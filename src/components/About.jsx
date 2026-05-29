import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { RiBrainFill, RiCodeSSlashFill, RiBarChartFill } from 'react-icons/ri'
import { FaCoffee } from 'react-icons/fa'

const highlights = [
  { icon: <RiBrainFill />, label: 'AI / ML', color: 'text-neon-blue' },
  { icon: <RiCodeSSlashFill />, label: 'Python', color: 'text-neon-violet' },
  { icon: <RiBarChartFill />, label: 'Data Science', color: 'text-neon-pink' },
  { icon: <FaCoffee />, label: 'Caffeine', color: 'text-yellow-400' },
]

function StatCard({ value, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 text-center"
    >
      <p className="font-orbitron text-3xl font-bold gradient-text">{value}</p>
      <p className="font-space text-sm text-gray-400 mt-1">{label}</p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 px-6 relative circuit-bg">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-neon-violet/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-orbitron text-neon-blue text-xs tracking-[0.3em] uppercase mb-3">
            01 / About
          </p>
          <h2 className="section-heading gradient-text">Who Is Saad?</h2>
          <div className="w-16 h-px bg-gradient-to-r from-neon-blue to-neon-violet mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Avatar / visual side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Photo frame */}
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/30 via-neon-violet/20 to-neon-pink/30 blur-xl" />
              <div className="relative w-full h-full rounded-full border-2 border-neon-blue/40 overflow-hidden bg-[#0d0d1a]">
                <img
                  src="/saad.jpg"
                  alt="Muhammad Saad"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="w-full h-full items-center justify-center text-9xl animate-float" style={{ display: 'none' }}>
                  🧠
                </div>
              </div>
              {/* Orbiting rings */}
              <div className="absolute inset-[-12px] rounded-full border border-neon-violet/20 animate-spin-slow" />
              <div className="absolute inset-[-28px] rounded-full border border-dashed border-neon-pink/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            </div>

            {/* Floating highlight pills */}
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="absolute flex items-center gap-1.5 px-3 py-1.5 glass-card text-xs font-space"
                style={{
                  top: `${[5, 75, 10, 70][i]}%`,
                  left: i % 2 === 0 ? '-10%' : '75%',
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
              >
                <span className={h.color}>{h.icon}</span>
                <span className="text-gray-300">{h.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-orbitron text-2xl font-bold text-white">
              AI Researcher &amp;{' '}
              <span className="gradient-text">ML Engineer</span>
            </h3>

            <p className="font-space text-gray-400 leading-relaxed">
              Started out as a backend and NLP engineer, shipping 10+ projects across
              real-world products — from REST APIs to language model pipelines. That
              foundation gave me a deep appreciation for how AI systems actually work
              end-to-end, not just in theory.
            </p>

            <p className="font-space text-gray-400 leading-relaxed">
              Now pivoting fully into AI research: exploring NLP, deep learning, and
              intelligent systems. I hold a Bachelor's in Computer Science and am
              passionate about turning research ideas into tangible, working AI products.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Python', 'TensorFlow', 'HuggingFace', 'NLP', 'Deep Learning', 'Power BI', 'Flask'].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 font-space text-sm text-neon-blue hover:text-neon-violet transition-colors duration-300 mt-2 cursor-pointer"
            >
              See my projects →
            </motion.a>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          <StatCard value="10+" label="Projects Shipped" delay={0} />
          <StatCard value="3+" label="Industry Roles" delay={0.1} />
          <StatCard value="15+" label="Tech Tools Mastered" delay={0.2} />
          <StatCard value="∞" label="Cups of Coffee" delay={0.3} />
        </div>
      </div>
    </section>
  )
}
