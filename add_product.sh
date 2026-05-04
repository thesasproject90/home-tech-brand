#!/bin/bash
# Script para añadir productos rápidamente a Supabase desde Termux

echo "--- Añadir Nuevo Producto ---"
read -p "Nombre: " NAME
read -p "Precio (ej: 25.99): " PRICE
read -p "Slug (ej: termometro-wifi): " SLUG
read -p "Categoría: " CAT
read -p "Descripción: " DESC

# Variables de tu .env.local
URL=$(grep NEXT_PUBLIC_SUPABASE_URL .env.local | cut -d '=' -f2)
KEY=$(grep NEXT_PUBLIC_SUPABASE_ANON_KEY .env.local | cut -d '=' -f2)

curl -X POST "$URL/rest/v1/products" \
  -H "apikey: $KEY" \
  -H "Authorization: Bearer $KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"name\": \"$NAME\",
    \"price\": $PRICE,
    \"slug\": \"$SLUG\",
    \"category\": \"$CAT\",
    \"description\": \"$DESC\"
  }"

echo -e "\nProducto enviado a la base de datos."
