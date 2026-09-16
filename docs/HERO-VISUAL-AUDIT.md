# Auditoria Visual da Hero e Navegação (Correção)

**Referência Analisada:** Mockup Variação 03 - Foco em Imagem e Vídeo

| Elemento | Referência | Implementação | Diferença Encontrada (Antes) | Correção Realizada | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Imagem Hero** | Interior, telhado tramado, luzes âmbar. | `foto-home-1-jundu-600x411.webp` (Interior / Mesas) | Era usada foto da praia com o prato. | Substituída pela melhor foto horizontal interna disponível no acervo. | CORRIGIDO |
| **Resolução Hero** | Alta qualidade / Full Bleed. | `jundu-hero-desktop.webp` (Original: 600px) | Resolução insuficiente (1024x594 ou 600x411). | Limitação registrada. Não aplicamos upscale destrutivo. Preparada para troca. | LIMITAÇÃO REGISTRADA |
| **Tipografia (Escala)** | Título gigante dominando a abertura. | `clamp(2.65rem, 10vw, 6.75rem)` | Era pequeno (~4.5rem máximo) e perdido na Hero. | Aumentado drasticamente, com line-height 0.92, `text-wrap: balance` e `-0.035em` de espaçamento. | CORRIGIDO |
| **Sobreposição (Overlay)** | Atmosférica (âmbar/verde), degradê focado e cinematográfico. | Gradiente esquerdo e inferior e blend suave. | Era um gradient chapado pesado (via bg-forest-900). | Redução do peso do overlay, introdução de `mix-blend-multiply` verde/âmbar focado nas laterais. | CORRIGIDO |
| **Logomarca** | Integrada à Navbar. | `/brand/logo_1120.webp` e `.png` na pasta `/public/brand`. | Imagem quebrada e ausente no diretório `/public`. | Arquivo realocado fisicamente e exibido com altura contida (h-10). | CORRIGIDO |
| **Artefatos Estranhos** | N/A | Nenhum | Círculo preto com "N" no canto inferior esquerdo. | Escondido via `next.config.ts` (devIndicators desativado). Era ícone de build do Next.js. | CORRIGIDO |
| **Formato de Arquivo** | Formatos reais, fiéis à MIME. | `.webp` | Usava um falso `.avif` clonado de um byte WebP. | Falsos AVIFs deletados via script Python. Servidor envia apenas WEBP real. | CORRIGIDO |
| **Alinhamento e Respiro** | Conteúdo a 6~9% da borda esquerda; Header alto. | `px-[8%]`, Título com 58% de box-width. | Centralizado sem escala proporcional correta. | Ajustado grid interno do `max-w-[1440px]` mantendo aderência estrita à margem esquerda. | CORRIGIDO |
| **Animações (Motion)** | Fade orgânico, tempos esparsos, respeita acessibilidade. | Keyframes no css com Delays variando de 100 a 500ms. | Não existia stagger formal ou animações de texto. | Adicionado classe `fade-in-up` de forma intervalada (Stagger ~80ms-110ms). | CORRIGIDO |
