import { usePageTitle } from '../hooks/usePageTitle'
import { blogPosts } from '../data/blog'

export default function BlogPage() {
  usePageTitle('Blog', 'Articles about living with IBM — diagnosis, daily tips, equipment, travel, and financial guidance.')

  return (
    <>
      <div className="page-header">
        <h1>Blog</h1>
        <p className="subtitle">Practical articles about living with IBM — diagnosis, daily living, equipment, travel, and more</p>
      </div>

      {blogPosts.map(post => (
        <div key={post.slug} className="card" style={{ cursor: 'pointer' }} onClick={() => window.location.href = `/blog/${post.slug}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span className="badge common">{post.category}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h2 style={{ marginBottom: 8 }}>{post.title}</h2>
          <p style={{ color: 'var(--text-secondary)' }}>{post.description}</p>
          <div style={{ marginTop: 12 }}>
            <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>Read more →</span>
          </div>
        </div>
      ))}
    </>
  )
}
