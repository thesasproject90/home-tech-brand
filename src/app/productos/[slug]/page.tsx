import { createClient } from '../../../lib/supabase';

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const supabase = createClient();
  const { data: product } = await supabase.from('products').select('*').eq('slug', params.slug).single();

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </main>
  );
}
