import { createClient } from '@/lib/supabase';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = createClient();
  const { data: post } = await supabase.from('posts').select('*').eq('slug', params.slug).single();
  return {
    title: post?.title || 'Artículo',
    description: post?.excerpt || 'Lee más en Home Tech',
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  const { data: post } = await supabase.from('posts').select('*').eq('slug', params.slug).single();

  if (!post) return <div>Artículo no encontrado</div>;

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} style={{ lineHeight: '1.6' }} />
    </main>
  );
}
