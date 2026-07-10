# Assets

## `logo.png` ✅ (recebido)
Logo completa da JLS Tecnologia (nuvem + "JLS Tecnologia"), fundo transparente, 1136×939.

## `logo-mark.png` ✅ (gerado a partir da logo.png)
Recorte só da nuvem (ícone), 913×706, fundo transparente. Usado no header/footer
(`components/logo.tsx`) e como favicon — pareado com o texto "JLS Tecnologia" em HTML
claro, pra garantir contraste no fundo escuro do site. Para regenerar, refaça o passo
de crop sobre `logo.png` ou substitua por um ícone transparente próprio.

## `og-image.png` ✅ (gerado, 1200×630)
Imagem de compartilhamento (WhatsApp / redes). Fundo petróleo com grade blueprint, glow
ciano, a nuvem real e a marca. Referenciada em `app/layout.tsx` (Open Graph / Twitter).
Aparece corretamente quando o site estiver publicado numa URL HTTPS real.
