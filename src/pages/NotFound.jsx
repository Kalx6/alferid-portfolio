import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <main className="py-32">
      <Container>
        <p className="text-[10px] uppercase tracking-[0.18em] text-label">Error 404</p>
        <h1 className="mt-3 font-serif text-5xl lg:text-7xl">Page not found.</h1>
        <p className="mt-6 max-w-md text-muted">
          This page doesn&rsquo;t exist or the project has moved.
        </p>
        <Button to="/#work" variant="solid" className="mt-10">
          Back to Selected Work
        </Button>
      </Container>
    </main>
  )
}
