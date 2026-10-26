import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'
import { navLinks } from '../../data/navigation'
import { site } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="leading-tight">
          <span className="block font-serif text-xl text-foreground">{site.name}</span>
          <span className="block text-[11px] uppercase tracking-[0.18em] text-muted">
            {site.tagline}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-end gap-10 lg:flex">
          {navLinks.map(({ label, id }) => {
            const isActive = activeId === id
            return (
              <Link
                key={id}
                to={`/#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? 'border-b border-highlight pb-1 text-[15px] text-foreground'
                    : 'pb-1 text-xs text-muted hover:text-foreground'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-5">
          <Button to="/#contact" className="hidden lg:inline-flex">
            Start a Project
          </Button>
          {/* Placeholder avatar: swap for the real photo later */}
          <Link
            to="/#about"
            aria-label="About Alferid Meded"
            className="hidden size-9 place-items-center rounded-full border border-line bg-surface font-serif text-xs text-highlight lg:grid"
          >
            AM
          </Link>
          <button
            type="button"
            className="p-2 text-foreground lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      <MobileMenu
        open={menuOpen}
        links={navLinks}
        activeId={activeId}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  )
}