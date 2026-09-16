# Sistema de Vídeos

- **Codecs:** H.264 em MP4 (com fallback para WebM).
- **Dimensões e Proporção:** Principalmente 9:16 para experiência imersiva vertical. Suporte para 16:9 em paisagem quando aplicável.
- **Bitrate:** Otimizado (alvo de < 2Mbps para mobile, < 4Mbps desktop para vídeos curtos).
- **Posters:** Obrigatório gerar poster AVIF/WebP do primeiro frame (ou frame-chave).
- **Atributos HTML5:**
  - `preload="none"` (exceto para Hero que deve ser "metadata" ou "auto").
  - `playsInline` (crítico para iOS).
  - `muted` sempre que possuir autoplay.
- **Interatividade:**
  - Pause automático usando `IntersectionObserver` quando fora da viewport.
  - Pause via evento `visibilitychange` quando a aba fica oculta.
- **Acessibilidade & Preferências:**
  - Atender a `prefers-reduced-motion` e pausar.
  - Conceder botão "Pausar movimento" flutuante.
- **Fallback Estático:** Imagens devem assumir a responsabilidade visual via `Save-Data` ou conexão lenta (`navigator.connection.effectiveType`).
- **Limites de Peso:** O arquivo de vídeo principal na Hero não deve exceder 5MB na inicialização móvel.
