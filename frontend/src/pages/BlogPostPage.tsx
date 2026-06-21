import { useParams, Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { blogPosts } from '../data/blog'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)

  usePageTitle(post?.title || 'Blog Post', post?.description)

  if (!post) {
    return (
      <>
        <div className="page-header">
          <h1>Post Not Found</h1>
          <p className="subtitle">The blog post you're looking for doesn't exist.</p>
        </div>
        <div className="card">
          <a href="/blog" style={{ color: 'var(--primary)', fontWeight: 600 }}>← Back to Blog</a>
        </div>
      </>
    )
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'IBM Awareness',
    },
    publisher: {
      '@type': 'Organization',
      name: 'IBM Awareness',
      url: 'https://ibm-awareness.netlify.app',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="page-header">
        <div style={{ marginBottom: 12 }}>
          <Link to="/blog" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.9rem' }}>← Back to Blog</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span className="badge common">{post.category}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <h1>{post.title}</h1>
      </div>

      <div className="card">
        {post.content.map((paragraph, i) => (
          <p key={i} style={{ marginBottom: 16, lineHeight: 1.75 }}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="card">
        <h2>Tags</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {post.tags.map(tag => (
            <span key={tag} style={{ padding: '4px 12px', borderRadius: 20, background: 'var(--bg-sidebar)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Related Reading</h2>
        <ul>
          <li><a href="/tips/early">Early Stage Tips</a> — Exercise, energy conservation, and specialist directories</li>
          <li><a href="/advanced/bathroom">Bathroom & Toileting</a> — Equipment, bidets, and transfer techniques</li>
          <li><a href="/advanced/travel">Travel Tips</a> — Airlines, hotels, and emergency preparedness</li>
          <li><a href="/tips/general">General Tips</a> — Insurance, disability benefits, and support groups</li>
        </ul>
      </div>
    </>
  )
}
