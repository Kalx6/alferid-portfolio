import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useActiveSection(ids) {
  const [active, setActive] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) {
      setActive(null)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) setActive(target.id)
          else setActive((current) => (current === target.id ? null : current))
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, pathname])

  return active
}