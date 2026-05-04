import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid #eee', padding: '2rem', marginTop: '4rem', backgroundColor: '#fafafa' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <h4 style={{ margin: '0 0 1rem 0' }}>HOME TECH</h4>
          <p style={{ fontSize: '0.8rem', color: '#666', maxWidth: '250px' }}>
            Elevando el estándar de la domótica en España. Tecnología probada y seleccionada.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontWeight: 'bold' }}>Legal</span>
          <Link href="/legal" style={{ fontSize: '0.8rem', color: '#444' }}>Aviso Legal</Link>
          <Link href="/legal" style={{ fontSize: '0.8rem', color: '#444' }}>Privacidad</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontWeight: 'bold' }}>Comunidad</span>
          <Link href="/blog" style={{ fontSize: '0.8rem', color: '#444' }}>Blog</Link>
          <Link href="/productos" style={{ fontSize: '0.8rem', color: '#444' }}>Tienda</Link>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.7rem', color: '#999' }}>
        © {currentYear} Home Tech Brand. Todos los derechos reservados.
      </div>
    </footer>
  );
}
