#!/bin/bash

# Script pro optimalizaci všech obrázků v portfoliu
echo "🚀 Začínám optimalizaci obrázků..."

# Vytvoř kopie pro různé velikosti
echo "📏 Vytvářím responzivní velikosti..."

# Funkce pro kompresi WebP obrázků
compress_webp() {
    local input_file="$1"
    local output_file="$2"
    local quality="$3"
    
    if command -v cwebp &> /dev/null; then
        cwebp -q "$quality" "$input_file" -o "$output_file"
        echo "✅ Kompresováno: $output_file (kvalita: $quality)"
    else
        echo "❌ cwebp není nainstalováno. Nainstaluj: brew install webp"
    fi
}

# Procházej všechny WebP soubory v hobby složce
find "./public/Assets/Photos/Hobby" -name "*.webp" -type f | while read file; do
    filename=$(basename "$file" .webp)
    directory=$(dirname "$file")
    
    # Originál - vysoká kvalita (85%)
    if [ ! -f "$directory/${filename}_original.webp" ]; then
        cp "$file" "$directory/${filename}_original.webp"
    fi
    
    # Střední kvalita pro většinu zařízení (75%)
    if [ ! -f "$directory/${filename}_medium.webp" ]; then
        compress_webp "$file" "$directory/${filename}_medium.webp" 75
    fi
    
    # Nízká kvalita pro pomalé připojení (60%)
    if [ ! -f "$directory/${filename}_small.webp" ]; then
        compress_webp "$file" "$directory/${filename}_small.webp" 60
    fi
    
    # Nahraď originál střední kvalitou
    compress_webp "$directory/${filename}_original.webp" "$file" 75
done

echo "🎉 Optimalizace dokončena!"
echo "📊 Zkontroluj velikosti souborů:"
echo "du -sh ./public/Assets/Photos/Hobby/*"