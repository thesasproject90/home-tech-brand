import React from 'react';
import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', padding: '1rem' }}>
      <div style={{ width: '100%', height: '200px', backgroundColor: '#f9f9f9', marginBottom: '1rem' }}>
        {/* Aquí irá la imagen más adelante */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#ccc' }}>Imagen</div>
      </div>
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{product.name}</h3>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>{product.price}€</p>
      <Link href={`/productos/${product.slug}`} style={{ 
        display: 'block', 
        textAlign: 'center', 
        backgroundColor: '#000', 
        color: '#fff', 
        padding: '0.8rem', 
        textDecoration: 'none', 
        borderRadius: '8px',
        marginTop: '1rem' 
      }}> Ver detalles </Link>
    </div>
  );
}
