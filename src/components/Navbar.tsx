import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #eee' }}>
      <Link href="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>HOME TECH</Link>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/productos">Productos</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
