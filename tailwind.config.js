/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        navy: '#050816',
        charcoal: '#0d0d1a',
        card: '#0f1022',
        neon: {
          blue: '#00d4ff',
          violet: '#8b5cf6',
          pink: '#f472b6',
          cyan: '#06b6d4',
        },
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'gradient-x': 'gradientX 4s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff' },
          '100%': { textShadow: '0 0 20px #8b5cf6, 0 0 40px #f472b6, 0 0 60px #8b5cf6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.4)',
        'neon-violet': '0 0 20px rgba(139, 92, 246, 0.4)',
        'neon-pink': '0 0 20px rgba(244, 114, 182, 0.4)',
        'card-glow': '0 0 30px rgba(0, 212, 255, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
}
