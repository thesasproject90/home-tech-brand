import Link from 'next/link';
import { createClient } from '@/lib/supabase';

export const metadata = { title: 'Blog de Tecnología para el Hogar' };

export default async function BlogPage() {
  const supabase = createClient();
  const { data: posts } = await supabase.from('posts').select('*').order('published_at', { ascending: false });

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Artículos y Reviews</h1>
      <div style={{ display: 'grid', gap: '2rem' }}>
        {posts?.map((post) => (
          <article key={post.id} style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '8px' }}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} style={{ color: 'blue' }}>Leer más →</Link>
          </article>
        ))}
        {(!posts || posts.length === 0) && <p>Escribiendo los mejores consejos de domótica... Vuelve pronto.</p>}
      </div>
    </main>
  );
}
