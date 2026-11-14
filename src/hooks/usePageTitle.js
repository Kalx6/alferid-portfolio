import { useEffect } from 'react'

export function usePageTitle(title, description) {
  useEffect(() => {
    const previousTitle = document.title
    let meta = document.querySelector('meta[name="description"]')
    const created = !meta
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    const previousDescription = meta.getAttribute('content')

    document.title = title
    if (description) meta.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (created) meta.remove()
      else if (previousDescription !== null) meta.setAttribute('content', previousDescription)
    }
  }, [title, description])
}
