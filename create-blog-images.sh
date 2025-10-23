#!/bin/bash

# Array com os artigos e suas cores
declare -A articles
articles[dizer-nao]="Aprenda a Dizer Não|Proteja sua energia e estabeleça limites|#EC4899|#DB2777"
articles[respiracao]="Respiração Consciente|Sua ferramenta de regulação emocional|#10B981|#059669"
articles[transicao-carreira]="Transição de Carreira|Mude de área com qualidade e saúde|#F59E0B|#D97706"
articles[diminuir-estresse]="Como Diminuir Estresse|Estratégias científicas que funcionam|#EF4444|#DC2626"
articles[equilibrio-emocional]="Equilíbrio Emocional|A habilidade mais valiosa do século 21|#3B82F6|#2563EB"
articles[ansiedade-moderna]="Epidemia de Ansiedade|Por que tanta gente está ansiosa?|#F97316|#EA580C"
articles[pausas-diarias]="Importância das Pausas|Produtividade vem do descanso|#14B8A6|#0D9488"
articles[regular-emocoes]="Regular Emoções no Trabalho|Alta performance sem se perder|#8B5CF6|#7C3AED"
articles[estilo-vida]="Transforme seu Estilo de Vida|O melhor investimento possível|#06B6D4|#0891B2"

for key in "${!articles[@]}"; do
  IFS='|' read -r title subtitle color1 color2 <<< "${articles[$key]}"
  
  cat > "public/assets/blog/${key}.svg" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="grad-${key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#grad-${key})"/>
  <circle cx="950" cy="120" r="120" fill="rgba(255,255,255,0.1)"/>
  <circle cx="150" cy="550" r="90" fill="rgba(255,255,255,0.1)"/>
  <circle cx="1050" cy="480" r="70" fill="rgba(255,255,255,0.1)"/>
  <text x="600" y="270" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="white" text-anchor="middle">
    ${title}
  </text>
  <text x="600" y="340" font-family="Arial, sans-serif" font-size="32" fill="rgba(255,255,255,0.95)" text-anchor="middle">
    ${subtitle}
  </text>
  <text x="600" y="550" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.8)" text-anchor="middle">
    Método FOCCO
  </text>
</svg>
EOF

done

echo "✅ 9 imagens SVG criadas!"
ls -lh public/assets/blog/*.svg
