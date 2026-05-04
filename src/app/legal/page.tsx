import React from 'react';

export default function LegalPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6' }}>
      <h1>Centro Legal</h1>
      <ul>
        <li><strong>Aviso Legal:</strong> Información sobre el titular.</li>
        <li><strong>Política de Privacidad:</strong> Cómo tratamos tus datos.</li>
        <li><strong>Política de Cookies:</strong> Uso de rastreadores.</li>
        <li><strong>Condiciones de Venta:</strong> Reglas de la tienda.</li>
      </ul>
      <p style={{ marginTop: '2rem', color: '#666' }}>
        *Nota: En España, incluso como particular, debes identificarte si realizas actividad económica.
      </p>
    </main>
  );
}
