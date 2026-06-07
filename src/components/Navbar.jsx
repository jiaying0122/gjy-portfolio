import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, artist } from '../data/content'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0c0c0c]"
      >
        <nav className="flex items-center h-14 sm:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 h-full px-5 sm:px-8 shrink-0"
          >
            <img src={artist.logo} alt="Logo" className="w-7 h-7 object-contain invert" />
            <span className="text-sm font-semibold tracking-tight text-white hidden sm:inline">
              {artist.name.split(' ')[0]}
            </span>
          </Link>

          {/* Divider */}
          <div className="h-6 w-px bg-white/20 hidden sm:block" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7 ml-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#c8ff00]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex-1" />

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-4 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0c0c0c] pt-16"
          >
            <div className="flex flex-col items-start px-6 sm:px-10 pt-12 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-3xl font-medium tracking-tight ${
                      location.pathname === link.path
                        ? 'text-[#c8ff00]'
                        : 'text-white/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
