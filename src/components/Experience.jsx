import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBriefcase, FaUniversity, FaChartBar } from 'react-icons/fa'

const timeline = [
  {
    role: 'Data Analyst',
    org: 'University of West London',
    period: 'Mar 2024 – Jun 2024',
    type: 'Full-time',
    icon: <FaUniversity />,
    color: '#00d4ff',
    bullets: [
      'Analysed student performance datasets using Python and Power BI',
      'Built automated reporting dashboards reducing manual effort by 40%',
      'Collaborated with research teams on ML-driven insights',
    ],
  },
  {
    role: 'Data Analyst Intern',
    org: 'Protrainy',
    period: 'Sep 2021 – Jan 2022',
    type: 'Internship',
    icon: <FaChartBar />,
    color: '#8b5cf6',
    bullets: [
      'Designed data pipelines and ETL workflows in Python/SQL',
      'Created interactive Tableau dashboards for client presentations',
      'Applied NLP techniques to extract insights from unstructured text data',
    ],
  },
  {
    role: 'AI / ML Engineering Graduate',
    org: 'University of West London',
    period: '2021 – 2023',
    type: 'Education',
    icon: <FaBriefcase />,
    color: '#f472b6',
    bullets: [
      'Specialised in NLP, deep learning, and intelligent systems',
      'Thesis on transformer-based models for text classification',
      'Built 3 production-ready ML applications as coursework',
    ],
  },
]

function TimelineItem({ item, index, isLast }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative grid md:grid-cols-2 gap-8 mb-12">
      {/* Content left */}
      {isLeft ? (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card p-6 md:text-right"
        >
          <CardContent item={item} />
        </motion.div>
      ) : (
        <div className="hidden md:block" />
      )}

      {/* Center dot */}
      <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10 hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm"
          style={{ background: `${item.color}20`, border: `2px solid ${item.color}`, color: item.color }}
        >
          {item.icon}
        </motion.div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 timeline-line" style={{ minHeight: '60px' }} />
        )}
      </div>

      {/* Content right */}
      {!isLeft ? (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card p-6 md:col-start-2"
        >
          <CardContent item={item} />
        </motion.div>
      ) : (
        <div className="hidden md:block" />
      )}

      {/* Mobile card (stacked) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 md:hidden col-span-2"
      >
        <CardContent item={item} />
      </motion.div>
    </div>
  )
}

function CardContent({ item }) {
  return (
    <>
      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <span
          className="px-2.5 py-0.5 rounded-full text-xs font-space font-medium"
          style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
        >
          {item.type}
        </span>
        <span className="font-space text-xs text-gray-500">{item.period}</span>
      </div>
      <h3 className="font-orbitron text-base font-bold text-white mt-2">{item.role}</h3>
      <p className="font-space text-sm font-medium mb-3" style={{ color: item.color }}>
        {item.org}
      </p>
      <ul className="space-y-1.5">
        {item.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 font-space text-xs text-gray-400">
            <span style={{ color: item.color }} className="mt-0.5 shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>
    </>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative circuit-bg">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-neon-violet/4 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-orbitron text-neon-pink text-xs tracking-[0.3em] uppercase mb-3">
            03 / Experience
          </p>
          <h2 className="section-heading gradient-text">My Journey</h2>
          <p className="font-space text-gray-500 mt-4 max-w-xl mx-auto">
            From academic research to real-world data — here's how the story unfolds.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-neon-pink to-neon-blue mx-auto mt-4" />
        </motion.div>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-line opacity-20" />

          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} isLast={i === timeline.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
