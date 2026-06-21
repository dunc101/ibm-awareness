import { useEffect } from 'react'

export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — IBM Awareness` : 'IBM Awareness — Inclusion Body Myositis Information'
    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
      // Also update OG description
      let ogMeta = document.querySelector('meta[property="og:description"]') as HTMLMetaElement
      if (ogMeta) ogMeta.content = description
      let twMeta = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement
      if (twMeta) twMeta.content = description
    }
  }, [title, description])
}
