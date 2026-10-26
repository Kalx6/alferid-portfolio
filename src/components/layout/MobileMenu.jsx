import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function MobileMenu({ open, links, activeId, onClose }) {
  if (!open) return null

  return (
    <div id="mobile-menu" className="border-t border-line bg-background lg:hidden">
      <Container className="flex flex-col py-6">
        {links.map(({ label, id }) => (
          <Link
            key={id}
            to={`/#${id}`}
            onClick={onClose}
            aria-current={activeId === id ? 'true' : undefined}
            className={`border-b border-line py-4 font-serif text-2xl transition-colors ${
              activeId === id ? 'text-foreground' : 'text-muted hover:text-foreground'
            }`}
          >
            {label}
          </Link>
        ))}
        <Button to="/#contact" onClick={onClose} className="mt-6 self-start">
          Start a Project
        </Button>
      </Container>
    </div>
  )
}