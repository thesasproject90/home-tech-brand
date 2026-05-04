import React from 'react';

export const metadata = {
  title: 'Home Tech | Tecnología para tu Hogar',
  description: 'Marca líder en domótica y gadgets para el hogar inteligente.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
