-- Tabla de productos para Dropshipping
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL, -- Importante para SEO
  description TEXT,
  price DECIMAL NOT NULL,
  image_url TEXT,
  category TEXT,
  stock_status BOOLEAN DEFAULT true,
  external_link TEXT, -- Link al proveedor (AliExpress, etc)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar lectura pública para que los clientes vean productos sin loguearse
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON products FOR SELECT USING (true);
