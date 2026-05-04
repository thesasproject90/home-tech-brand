import { createClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  const { data: product } = await supabase.from('products').select('*').eq('slug', params.slug).single();

  if (!product) notFound();

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '300px', height: '400px', backgroundColor: '#f9f9f9', borderRadius: '12px' }}></div>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <small style={{ color: '#888', textTransform: 'uppercase' }}>{product.category}</small>
        <h1 style={{ marginTop: '0.5rem' }}>{product.name}</h1>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{product.price}€</p>
        <p style={{ lineHeight: '1.6', color: '#444' }}>{product.description}</p>
        
        <button style={{ 
          width: '100%', 
          padding: '1rem', 
          backgroundColor: '#0070f3', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          fontSize: '1.1rem',
          cursor: 'pointer',
          marginTop: '2rem'
        }}> Comprar ahora </button>
        
        <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '1rem', textAlign: 'center' }}>
          Envío asegurado en 24/48h. Garantía oficial.
        </p>
      </div>
    </main>
  );
}
