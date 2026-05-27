import { motion } from 'framer-motion'
import { FaRss } from 'react-icons/fa'

const upcomingPosts = [
  { emoji: '🤖', title: 'GPT vs BERT: A Practical Showdown', tag: 'NLP', color: '#00d4ff' },
  { emoji: '📊', title: 'Why Your ML Model Lied to You', tag: 'ML Ops', color: '#8b5cf6' },
  { emoji: '🧠', title: "Transformers, Explained Like You're 5", tag: 'Deep Learning', color: '#f472b6' },
]

export default function Blog() {
  return (
    <section id="blog" className="py-28 px-6 relative circuit-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-violet/3 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-orbitron text-neon-pink text-xs tracking-[0.3em] uppercase mb-3">
            05 / Blog
          </p>
          <h2 className="section-heading gradient-text mb-4">Tech With Tani — Coming Soon</h2>
          <p className="font-space text-gray-400 max-w-lg mx-auto text-base mb-12">
            Decoding AI &amp; ML trends in a human way. No jargon gatekeeping — just clear,
            curiosity-first explorations of the models shaping our world.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-neon-pink to-neon-violet mx-auto mb-12" />
        </motion.div>

        {/* Upcoming posts preview */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {upcomingPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-6 text-left relative overflow-hidden group"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-50"
                style={{ background: `linear-gradient(90deg, transparent, ${post.color}, transparent)` }}
              />
              <span className="text-3xl mb-3 block">{post.emoji}</span>
              <span
                className="inline-block px-2.5 py-0.5 rounded-full text-xs font-space font-medium mb-3"
                style={{ background: `${post.color}15`, color: post.color, border: `1px solid ${post.color}30` }}
              >
                {post.tag}
              </span>
              <h3 className="font-space text-sm font-semibold text-white">{post.title}</h3>
              <div
                className="mt-3 text-xs font-space opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: post.color }}
              >
                Coming soon →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscribe teaser */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 max-w-md mx-auto"
        >
          <FaRss className="text-neon-pink text-2xl mx-auto mb-3" />
          <p className="font-orbitron text-sm text-white mb-2">Get Notified at Launch</p>
          <p className="font-space text-xs text-gray-500 mb-5">
            Drop your email and be the first to read when Tech With Tani goes live.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-space text-sm text-white placeholder-gray-600 focus:border-neon-pink/50"
            />
            <button className="px-5 py-2.5 rounded-lg font-space text-sm font-semibold text-navy bg-gradient-to-r from-neon-pink to-neon-violet hover:shadow-neon-pink transition-all duration-300">
              Notify Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
