import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const socials = [
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/Muhammad-Saaaad', color: '#00d4ff' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammadsaadaiexpert/', color: '#8b5cf6' },
  { icon: <FaEnvelope />, label: 'rsaad0067@gmail.com', href: 'mailto:rsaad0067@gmail.com', color: '#f472b6' },
  { icon: <FaPhone />, label: '+92-315-3716651', href: 'tel:+923153716651', color: '#06b6d4' },
  { icon: <FaMapMarkerAlt />, label: 'Pakistan', href: '#', color: '#8b5cf6' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch {
      setError(true)
      setTimeout(() => setError(false), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-neon-pink/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-orbitron text-neon-blue text-xs tracking-[0.3em] uppercase mb-3">
            06 / Contact
          </p>
          <h2 className="section-heading gradient-text">Let's Connect</h2>
          <p className="font-space text-gray-500 mt-4 max-w-xl mx-auto">
            Whether you have a project, a collaboration idea, or just want to talk AI — I'm all ears.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-neon-blue to-neon-violet mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-neon-blue/40 overflow-hidden bg-gradient-to-br from-neon-blue/20 to-neon-violet/20">
                <img src="/saad.jpg" alt="Muhammad Saad" className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML = '🧠'; }} />
              </div>
              <div>
                <p className="font-orbitron text-white font-semibold">Muhammad Saad</p>
                <p className="font-space text-sm text-neon-blue">Aspiring AI Researcher</p>
              </div>
            </div>

            <p className="font-space text-gray-400 leading-relaxed">
              Based in London, open to remote roles worldwide. I love working on projects
              that push the boundaries of what AI can do — from NLP applications to
              data-driven products.
            </p>

            {/* Social cards */}
            <div className="grid grid-cols-1 gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-3 p-4 hover:scale-105 transition-all duration-300 group"
                  style={{
                    '--hover-border': `${s.color}90`,
                    '--hover-glow': `${s.color}30`,
                  }}
                >
                  <span className="text-lg transition-colors duration-300" style={{ color: s.color }}>
                    {s.icon}
                  </span>
                  <span className="font-space text-sm text-gray-300 group-hover:text-white transition-colors">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div>
                <label className="font-space text-xs text-gray-500 uppercase tracking-wider mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-space text-sm text-white placeholder-gray-600 focus:border-neon-blue/50 transition-all duration-200"
                />
              </div>

              <div>
                <label className="font-space text-xs text-gray-500 uppercase tracking-wider mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-space text-sm text-white placeholder-gray-600 focus:border-neon-blue/50 transition-all duration-200"
                />
              </div>

              <div>
                <label className="font-space text-xs text-gray-500 uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea…"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-space text-sm text-white placeholder-gray-600 focus:border-neon-blue/50 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-space font-semibold text-navy bg-gradient-to-r from-neon-blue to-neon-violet hover:shadow-neon-blue hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {loading ? 'Sending…' : sent ? '✓ Message Sent!' : error ? '✗ Failed — try again' : <><FaPaperPlane /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
