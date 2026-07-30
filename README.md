# Desperte no Sonho

Landing page de vendas para o e-book **Desperte no Sonho** — guia completo de sonhos lúcidos.

## Estrutura

```
├── vendas-desperte-no-sonho.html   # Página de vendas principal
├── assets/                          # Imagens e mockups
├── entregaveis/                     # Produtos digitais (HTML)
│   ├── bonus/
│   └── order-bumps/
├── pdfs/                            # PDFs exportados
└── README.md
```

## Stack

- HTML/CSS/JS vanilla
- GSAP + ScrollTrigger (animações)
- Canvas API (céu de estrelas animado)

## Deploy

### Vercel

1. Conecte o repositório ao [Vercel](https://vercel.com)
2. Framework: **Other**
3. Build Command: (nenhum)
4. Output Directory: `.`

Ou via CLI:

```bash
npm i -g vercel
vercel
```

## Animações GSAP

A página inclui:

- **Hero text reveal** — letras surgem com stagger
- **ScrollTrigger** — seções animam ao scrollar
- **Price counter** — animação de R$67 para R$27
- **Floating elements** — estrelas e lua decorativas
- **Button flair** — efeito de expansão no hover
- **Parallax** — título hero com movimento suave

## Produtos

| Produto | Preço |
|---------|-------|
| E-book Principal | R$ 27 |
| Diário dos Sonhos (Bônus) | Incluso |
| Planner 21 Dias (Bônus) | Incluso |
| Manual Reality Checks (Bônus) | Incluso |

## Licença

Proprietário — Luna Vieira
