import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { RiBrainFill } from 'react-icons/ri'
import { Link } from 'react-scroll'

const links = ['hero', 'about', 'projects', 'experience', 'skills', 'contact']

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6 circuit-bg">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <Link to="hero" smooth className="cursor-pointer flex items-center gap-2">
            <RiBrainFill className="text-neon-blue text-xl" />
            <span className="font-orbitron font-bold text-sm gradient-text tracking-wider">
              TECH<span className="text-white">WITH</span>SAAD
            </span>
          </Link>

          {/* Nav */}
          <ul className="flex flex-wrap items-center gap-5 justify-center">
            {links.map((l) => (
              <li key={l}>
                <Link
                  to={l}
                  smooth
                  offset={-80}
                  className="font-space text-xs text-gray-500 hover:text-neon-blue transition-colors duration-200 capitalize cursor-pointer"
                >
                  {l === 'hero' ? 'Home' : l.charAt(0).toUpperCase() + l.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: <FaGithub />, href: 'https://github.com/Muhammad-Saaaad' },
              { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/muhammadsaadaiexpert/' },
              { icon: <FaEnvelope />, href: 'mailto:rsaad0067@gmail.com' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-neon-blue transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent my-6" />

        {/* Bottom */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center font-space text-xs text-gray-600"
        >
          Built with <FaHeart className="inline text-neon-pink mx-1" /> by Muhammad Saad &nbsp;·&nbsp;
          Engineering the Future with AI &nbsp;·&nbsp; {new Date().getFullYear()}
        </motion.p>
      </div>
    </footer>
  )
}
