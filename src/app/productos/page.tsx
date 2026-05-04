export const dynamic = "force-dynamic";
import { createClient } from '../../lib/supabase';
import ProductCard from '../../components/ProductCard';

export const metadata = { title: 'Catálogo de Tecnología' };

export default async function ProductsPage() {
  const supabase = createClient();
  const { data: products } = await supabase.from('products').select('*');

  return (
    <main style={{ padding: '2rem' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1>Tecnología para un hogar inteligente</h1>
        <p>Selección premium de dispositivos probados por expertos.</p>
      </header>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '2rem' 
      }}>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {(!products || products.length === 0) && <p>Cargando catálogo de novedades...</p>}
      </div>
    </main>
  );
}
