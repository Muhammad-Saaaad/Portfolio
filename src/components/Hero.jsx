import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { RiBrainLine, RiRobot2Line, RiDatabase2Line } from 'react-icons/ri'

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/Muhammad-Saaaad', label: 'GitHub', color: '#8b5cf6' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/muhammadsaadaiexpert/', label: 'LinkedIn', color: '#0a66c2' },
  { icon: <FaEnvelope />, href: 'mailto:rsaad0067@gmail.com', label: 'Email', color: '#f472b6' },
]

function SocialIcon({ icon, href, label, color }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
      style={{
        color: hovered ? color : '#9ca3af',
        borderColor: hovered ? `${color}90` : 'rgba(255,255,255,0.1)',
        boxShadow: hovered ? `0 0 14px ${color}60` : 'none',
      }}
    >
      {icon}
    </a>
  )
}

const floatingIcons = [
  { icon: <RiBrainLine />, style: 'top-[20%] left-[10%]', delay: 0 },
  { icon: <RiRobot2Line />, style: 'top-[60%] left-[5%]', delay: 1 },
  { icon: <RiDatabase2Line />, style: 'top-[30%] right-[8%]', delay: 0.5 },
  { icon: <RiBrainLine />, style: 'top-[70%] right-[12%]', delay: 1.5 },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg"
    >
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-violet/5 blur-3xl pointer-events-none" />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute text-3xl text-neon-blue/30 ${item.style}`}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          <span className="font-space text-sm text-neon-blue tracking-widest uppercase">
            Aspiring AI Researcher
          </span>
        </motion.div>

        {/* Welcome label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-orbitron text-neon-pink/70 text-sm tracking-[0.3em] uppercase mb-4"
        >
          ✦ Welcome to My Portfolio ✦
        </motion.p>

        {/* Main headline — letter-by-letter animation */}
        <h1 className="font-orbitron font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4">
          {'MUHAMMAD SAAD'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.05, ease: 'easeOut' }}
              className={`inline-block ${char === ' ' ? 'mr-3' : ''} gradient-text`}
              style={{ textShadow: '0 0 30px rgba(0,212,255,0.3)' }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </h1>

        {/* Animated subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-space text-xl md:text-2xl text-gray-300 mb-4"
        >
          <TypeAnimation
            sequence={[
              'Engineering the Future with AI',
              2000,
              'Building Intelligent Systems',
              2000,
              'Exploring NLP & Deep Learning',
              2000,
              'Decoding Data, One Model at a Time',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="font-ibm text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-12"
        >
          Exploring AI, ML &amp; Data — Passionate about building intelligent systems
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Link to="projects" smooth offset={-80}>
            <button className="px-8 py-3 rounded-full font-space font-semibold text-navy bg-gradient-to-r from-neon-blue to-neon-violet hover:shadow-neon-blue hover:scale-105 transition-all duration-300">
              View My Work
            </button>
          </Link>
          <Link to="contact" smooth offset={-80}>
            <button className="px-8 py-3 rounded-full font-space font-semibold text-neon-blue border border-neon-blue/40 hover:bg-neon-blue/10 hover:shadow-neon-blue hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {socials.map((s) => (
            <SocialIcon key={s.label} {...s} />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="font-space text-xs tracking-widest uppercase">Scroll</span>
          <FaArrowDown className="text-neon-blue/50" />
        </motion.div>
      </div>
    </section>
  )
}
