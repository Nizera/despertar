const fs = require('fs');

const pad = n => String(n).padStart(2, '0');

function css() {
return `:root{--color-primary:#1a0a3c;--color-secondary:#7b2fff;--color-accent:#c9a4ff;--color-gold:#f0c060;--color-bg-page:#f7f4ff;--color-bg-dark:#0d0720;--color-text:#1e1530;--color-text-muted:#5a4e72;--color-highlight:#e8dcff;--font-display:"Cormorant Garamond",serif;--font-body:"Karla",sans-serif}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{background:#d0c8e0;font-family:var(--font-body);color:var(--color-text)}
.page{width:794px;min-height:1123px;margin:0 auto 32px;padding:60px 72px;background:var(--color-bg-page);position:relative;box-shadow:0 4px 32px rgba(0,0,0,.18);display:flex;flex-direction:column;overflow:hidden;page-break-after:always}
.page-footer{position:absolute;bottom:28px;left:72px;right:72px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #c8b8f0;padding-top:10px}
.footer-brand{font-size:11px;color:var(--color-text-muted);letter-spacing:1px;text-transform:uppercase}
.footer-page{font-size:11px;color:var(--color-secondary);font-weight:700}
.page-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;padding-bottom:12px;border-bottom:1px solid #d8c8f8}
.section-label{font-size:11px;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:1.5px}
.display-subtitle{font-family:var(--font-body);font-size:17px;font-weight:300;color:#d8c8f8;line-height:1.6;margin-top:16px}
.section-title{font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--color-primary);margin-bottom:12px;margin-top:24px}
.body-text{font-size:14px;line-height:1.85;color:var(--color-text);margin-bottom:14px}
.highlight-box{border-left:4px solid var(--color-secondary);background:#ede5ff;padding:16px 20px;border-radius:0 10px 10px 0;margin:20px 0}
.highlight-text{font-family:var(--font-display);font-size:16px;font-style:italic;color:var(--color-primary);line-height:1.6}
.tip-box{background:#f0eaff;border:1px solid #c8a8ff;border-radius:10px;padding:14px 18px;display:flex;gap:12px;align-items:flex-start;margin:16px 0}
.tip-icon{font-size:20px;flex-shrink:0}
.tip-text{font-size:13px;line-height:1.7;color:var(--color-text)}
.tip-label{font-weight:700;color:var(--color-secondary);display:block;margin-bottom:4px;font-size:11px;text-transform:uppercase;letter-spacing:1px}
.step-item{display:flex;gap:16px;align-items:flex-start;margin-bottom:18px}
.step-number{width:36px;height:36px;border-radius:50%;background:var(--color-secondary);color:white;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.step-content strong{font-size:14px;color:var(--color-primary);display:block;margin-bottom:4px;font-weight:700}
.step-content p{font-size:13px;color:var(--color-text-muted);line-height:1.7}
.data-table{width:100%;border-collapse:collapse;font-size:13px;margin:16px 0}
.data-table th{background:var(--color-primary);color:white;padding:10px 14px;text-align:left;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.5px}
.data-table td{padding:10px 14px;border-bottom:1px solid #e0d4f8;vertical-align:top;line-height:1.5}
.data-table tr:nth-child(even) td{background:#f5f0ff}
.data-table tr:last-child td{border-bottom:none}
.page-cover{background:#07050f!important;display:flex!important;flex-direction:column!important;justify-content:space-between!important;padding:60px!important}
#cover-canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}
.page-cover>*:not(#cover-canvas){position:relative;z-index:1}
.cover-tag{display:inline-block;border:1px solid rgba(201,164,255,.5);color:var(--color-accent);font-size:11px;letter-spacing:3px;text-transform:uppercase;padding:6px 16px;border-radius:20px;font-weight:500}
.cover-divider{width:60px;height:2px;background:var(--color-gold);margin:20px 0}
.page-chapter{background:linear-gradient(160deg,#1a0a3c 0%,#2d1060 100%)!important;color:white!important}
.page-chapter .chapter-title{color:white!important}
.page-chapter .chapter-intro{color:#c9a4ff!important}
.page-chapter .chapter-number{color:white!important;opacity:.12!important}
.page-chapter .page-footer{border-top-color:rgba(255,255,255,.15)!important}
.page-chapter .footer-brand{color:rgba(255,255,255,.4)!important}
.page-chapter .footer-page{color:var(--color-gold)!important}
.chapter-number{font-family:var(--font-display);font-size:96px;font-weight:700;color:var(--color-secondary);opacity:.18;line-height:1}
.chapter-title{font-family:var(--font-display);font-size:38px;font-weight:700;color:var(--color-primary);line-height:1.2;margin-top:-16px}
.chapter-intro{font-size:14px;color:var(--color-text-muted);line-height:1.7;margin-top:14px;max-width:520px}
.diary-field{margin-bottom:12px}
.diary-label{font-size:11px;color:var(--color-secondary);font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px}
.diary-input{width:100%;border:1px solid #d4c4f0;border-radius:8px;padding:10px 14px;font-size:13px;color:var(--color-text);background:white;font-family:var(--font-body);min-height:36px}
.dream-lines{border:1px solid #d4c4f0;border-radius:8px;background:white;padding:14px 14px 0}
.dream-line{width:100%;height:1px;background:#e0d4f8;margin:22px 0 0 0}
.dream-line:first-child{margin-top:0}
.diary-row{display:flex;gap:16px}
.diary-row .diary-field{flex:1}
.stat-card{background:white;border:1px solid #d8c8f8;border-radius:12px;padding:18px;text-align:center}
.stat-value{font-family:var(--font-display);font-size:36px;font-weight:700;color:var(--color-secondary)}
.stat-label{font-size:11px;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:1px;margin-top:4px}
.achievement-card{background:white;border:2px solid var(--color-gold);border-radius:12px;padding:18px;display:flex;gap:14px;align-items:flex-start;margin-bottom:12px}
.achievement-icon{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--color-gold),#e0a830);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:20px}
.achievement-title{font-weight:700;font-size:14px;color:var(--color-primary);margin-bottom:4px}
.achievement-desc{font-size:12.5px;color:var(--color-text-muted);line-height:1.6}
@media print{@page{size:A4 portrait;margin:0}body{background:white}.page{width:210mm;min-height:297mm;padding:15mm 18mm;margin:0;box-shadow:none!important}}`;
}

function footer(brand, num) {
  return `<div class="page-footer"><span class="footer-brand">${brand}</span><span class="footer-page">${num}</span></div>`;
}

const PF = 'Diario dos Sonhos Premium';

// PAGE 1 - Cover
function coverPage() {
return `<div class="page page-cover" id="cover-page">
  <canvas id="cover-canvas" width="794" height="1123"></canvas>
  <svg style="position:absolute;top:52px;right:60px;z-index:1;pointer-events:none;" width="72" height="72" viewBox="0 0 72 72">
    <defs><radialGradient id="moonG" cx="38%" cy="35%"><stop offset="0%" stop-color="#f5ecd0"/><stop offset="100%" stop-color="#c8a848"/></radialGradient></defs>
    <circle cx="36" cy="36" r="28" fill="url(#moonG)" opacity="0.95"/>
    <circle cx="36" cy="36" r="28" fill="none" stroke="rgba(245,236,208,0.3)" stroke-width="1"/>
    <circle cx="36" cy="36" r="36" fill="none" stroke="rgba(245,236,208,0.08)" stroke-width="1"/>
    <circle cx="26" cy="26" r="4" fill="rgba(180,140,60,0.25)"/>
    <circle cx="44" cy="32" r="2.5" fill="rgba(180,140,60,0.2)"/>
    <circle cx="32" cy="46" r="3" fill="rgba(180,140,60,0.18)"/>
  </svg>
  <div style="margin-top:auto;margin-bottom:auto;text-align:center;">
    <span class="cover-tag">&#10022; Colecao Desperte no Sonho &#10022;</span>
    <div style="margin-top:40px;">
      <svg width="120" height="120" viewBox="0 0 120 120" style="display:block;margin:0 auto 20px;">
        <defs><linearGradient id="dg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#c9a4ff"/><stop offset="100%" stop-color="#7b2fff"/></linearGradient></defs>
        <circle cx="60" cy="60" r="56" fill="none" stroke="url(#dg)" stroke-width="1.5" opacity="0.6"/>
        <circle cx="60" cy="60" r="44" fill="none" stroke="#c9a4ff" stroke-width="0.5" opacity="0.3"/>
        <path d="M60 20 C40 35 36 55 44 70 C50 80 70 80 76 70 C84 55 80 35 60 20Z" fill="#7b2fff" opacity="0.2"/>
        <circle cx="60" cy="52" r="10" fill="#c9a4ff" opacity="0.4"/>
        <circle cx="60" cy="52" r="4" fill="#f0c060" opacity="0.8"/>
        <path d="M35 85 Q45 72 60 80 Q75 72 85 85" stroke="#c9a4ff" stroke-width="1.5" fill="none" opacity="0.5"/>
        <path d="M42 95 Q52 85 60 90 Q68 85 78 95" stroke="#c9a4ff" stroke-width="1" fill="none" opacity="0.3"/>
      </svg>
      <h1 style="font-family:var(--font-display);font-size:52px;font-weight:700;color:#f7f0ff;line-height:1.05;letter-spacing:-0.5px;">Diario dos Sonhos<br>Premium</h1>
      <div class="cover-divider" style="margin:24px auto;"></div>
      <p class="display-subtitle" style="text-align:center;max-width:480px;margin:0 auto;">Registre, compreenda e transforme<br>seus sonhos em aventuras conscientes</p>
    </div>
  </div>
  <div style="display:flex;justify-content:center;align-items:center;gap:10px;margin-top:40px;">
    <span style="font-size:12px;color:rgba(255,255,255,0.4);font-style:italic;font-family:var(--font-display);">por</span>
    <span style="font-size:14px;color:rgba(255,255,255,0.8);font-weight:600;letter-spacing:1px;">Luna Vieira</span>
  </div>
</div>`;
}

// PAGE 2 - Copyright
function copyrightPage() {
return `<div class="page" style="justify-content:center;align-items:center;text-align:center;">
  <div style="max-width:480px;margin:auto;">
    <svg width="48" height="48" viewBox="0 0 48 48" style="margin-bottom:24px;"><circle cx="24" cy="24" r="22" fill="none" stroke="#7b2fff" stroke-width="1.5"/><path d="M24 8 C14 16 12 28 18 36 C21 40 27 40 30 36 C36 28 34 16 24 8Z" fill="#7b2fff" opacity="0.2"/><circle cx="24" cy="24" r="6" fill="#7b2fff" opacity="0.5"/></svg>
    <h2 style="font-family:var(--font-display);font-size:28px;color:var(--color-primary);margin-bottom:20px;">Diario dos Sonhos Premium</h2>
    <div style="height:1px;background:linear-gradient(90deg,transparent,#c9a4ff,transparent);margin-bottom:24px;"></div>
    <p style="font-size:13px;line-height:1.8;color:var(--color-text-muted);">&copy; 2025 &mdash; Todos os direitos reservados.</p>
    <p style="font-size:13px;line-height:1.8;color:var(--color-text-muted);margin-top:12px;">Este diario e protegido por direitos autorais. Nenhuma parte desta publicacao pode ser reproduzida, distribuida ou transmitida sob qualquer forma sem a permissao expressa do autor.</p>
    <p style="font-size:13px;line-height:1.8;color:var(--color-text-muted);margin-top:12px;">Parte da Colecao Desperte no Sonho. Este material e destinado exclusivamente para fins educativos e de desenvolvimento pessoal.</p>
    <div style="margin-top:32px;padding:16px;background:#f0eaff;border-radius:10px;">
      <p style="font-size:12px;color:var(--color-text-muted);"><strong style="color:var(--color-secondary);">Edicao Premium 2025</strong><br>Produzido com amor para transformar a sua relacao com o sono e a consciencia.</p>
    </div>
  </div>
  ${footer(PF, '02')}
</div>`;
}

// PAGE 3 - Como utilizar
function howToUsePage() {
return `<div class="page">
  <div class="page-header"><span class="section-label">Bem-vindo</span><span style="font-size:11px;color:var(--color-text-muted);">03</span></div>
  <svg width="60" height="60" viewBox="0 0 60 60" style="margin-bottom:16px;"><circle cx="30" cy="30" r="28" fill="none" stroke="#c9a4ff" stroke-width="1"/><path d="M30 12 C20 20 18 32 24 40 C27 44 33 44 36 40 C42 32 40 20 30 12Z" fill="#7b2fff" opacity="0.15"/><circle cx="30" cy="30" r="6" fill="#f0c060" opacity="0.7"/></svg>
  <h2 style="font-family:var(--font-display);font-size:34px;color:var(--color-primary);margin-bottom:20px;">Como utilizar<br>este diario</h2>
  <p class="body-text">Este Diario dos Sonhos Premium foi projetado para ser seu companheiro diario na jornada dos sonhos lucidos. Cada pagina foi cuidadosamente organizada para facilitar o registro e a analise dos seus sonhos.</p>
  <div class="highlight-box"><p class="highlight-text">"A consistencia e a chave. Mesmo nos dias em que voce nao se lembra de nenhum sonho, preencha a pagina. O habito de registrar e tao importante quanto o que voce registra."</p></div>
  <h3 class="section-title">Estrutura do Diario</h3>
  <div class="step-item"><div class="step-number">01</div><div class="step-content"><strong>Paginas de Registro Diario</strong><p>30 paginas individuais para registrar seus sonhos noite apos noite. Cada pagina contem campos para data, horarios, relato do sonho, emocoes e sinais identificados.</p></div></div>
  <div class="step-item"><div class="step-number">02</div><div class="step-content"><strong>Revisao Semanal</strong><p>Templates para analise semanal dos seus padroes. Preencha ao final de cada semana para identificar tendencias e sinais de sonho.</p></div></div>
  <div class="step-item"><div class="step-number">03</div><div class="step-content"><strong>Revisao Mensal</strong><p>Uma visao ampla do mes inteiro. Compare semanas, identifique evolucao e ajuste suas praticas.</p></div></div>
  <div class="step-item"><div class="step-number">04</div><div class="step-content"><strong>Mapas de Analise</strong><p>Tabelas tematicas para mapear personagens, lugares, emocoes, animais, simbolos e sonhos recorrentes do seu universo onirico.</p></div></div>
  <div class="tip-box" style="margin-top:16px;"><span class="tip-icon">&#127769;</span><div class="tip-text"><span class="tip-label">Dica de ouro</span>Escreva imediatamente ao acordar. Nao cheque o celular, nao va ao banheiro. Cada minuto que passa apaga fragmentos do sonho de forma irreversivel.</div></div>
  ${footer(PF, '03')}
</div>`;
}

// PAGE 4 - Como lembrar
function rememberDreamsPage() {
return `<div class="page">
  <div class="page-header"><span class="section-label">Guia Pratico</span><span style="font-size:11px;color:var(--color-text-muted);">04</span></div>
  <h2 style="font-family:var(--font-display);font-size:34px;color:var(--color-primary);margin-bottom:20px;">Como lembrar<br>dos sonhos</h2>
  <p class="body-text">A maioria das pessoas esquece 95% dos sonhos em menos de 5 minutos apos acordar. Mas a memoria dos sonhos e como um musculo &mdash; quanto mais voce a treina, mais forte ela fica.</p>
  <h3 class="section-title">Tecnicas Comprovadas</h3>
  <div class="step-item"><div class="step-number">01</div><div class="step-content"><strong>Afirmacao antes de dormir</strong><p>Antes de adormecer, repita mentalmente 5 vezes: "Vou lembrar dos meus sonhos quando acordar." A intencao direta programa a memoria prospectiva.</p></div></div>
  <div class="step-item"><div class="step-number">02</div><div class="step-content"><strong>Acordar naturalmente</strong><p>Evite alarmes abruptos. Quando possivel, use um despertador suave que simule o amanhecer. Sonhos do ciclo REM final sao os mais vividose faceis de lembrar.</p></div></div>
  <div class="step-item"><div class="step-number">03</div><div class="step-content"><strong>Permaneca imovel ao acordar</strong><p>Ao acordar, nao se mova. Mantenha os olhos fechados e tente "reconstruir" o sonho de tras para frente. Os detalhes vao surgindo como um filme que voce rebobina.</p></div></div>
  <div class="step-item"><div class="step-number">04</div><div class="step-content"><strong>Pergunte-se: "O que eu estava fazendo?"</strong><p>Essa pergunta ativa diferentes areas da memoria. Se nao conseguir o sonho completo, registre fragmentos &mdash; uma cor, uma sensacao, uma palavra.</p></div></div>
  <div class="step-item"><div class="step-number">05</div><div class="step-content"><strong>Rotina de escrita</strong><p>Escreva todos os dias, sem excecao. Mesmo "nao lembro de nada" e um registro valido. O habito mantem o canal de memoria ativo.</p></div></div>
  <div class="highlight-box" style="margin-top:12px;"><p class="highlight-text">"Em 2 semanas de registro consistente, a maioria das pessoas passa de "nao lembro nenhum sonho" para "lembro de 2 a 4 sonhos por noite"."</p></div>
  ${footer(PF, '04')}
</div>`;
}

// PAGE 5 - Como preencher
function howToFillPage() {
return `<div class="page">
  <div class="page-header"><span class="section-label">Guia Pratico</span><span style="font-size:11px;color:var(--color-text-muted);">05</span></div>
  <h2 style="font-family:var(--font-display);font-size:34px;color:var(--color-primary);margin-bottom:20px;">Como preencher<br>corretamente</h2>
  <p class="body-text">Cada pagina do diario possui campos especificos. Preencha todos, mesmo quando algum pareca vazio. Cada campo e uma pista para decifrar seu mundo onirico.</p>
  <h3 class="section-title">Guia de cada campo</h3>
  <div style="background:white;border:1px solid #d8c8f8;border-radius:10px;padding:16px;margin-bottom:12px;"><strong style="font-size:13px;color:var(--color-primary);">&#128197; Data</strong><p style="font-size:12.5px;color:var(--color-text-muted);line-height:1.6;margin-top:4px;">Data em que o sonho ocorreu (madrugada do dia anterior). Preencha com o dia em que voce dormiu.</p></div>
  <div style="background:white;border:1px solid #d8c8f8;border-radius:10px;padding:16px;margin-bottom:12px;"><strong style="font-size:13px;color:var(--color-primary);">&#128716; Horario de Dormir / Acordar</strong><p style="font-size:12.5px;color:var(--color-text-muted);line-height:1.6;margin-top:4px;">Anotar os horarios ajuda a calcular a duracao do sono e identificar padroes.</p></div>
  <div style="background:white;border:1px solid #d8c8f8;border-radius:10px;padding:16px;margin-bottom:12px;"><strong style="font-size:13px;color:var(--color-primary);">&#127769; Relato do Sonho</strong><p style="font-size:12.5px;color:var(--color-text-muted);line-height:1.6;margin-top:4px;">Escreva tudo que se lembra &mdash; personagens, lugares, acoes, dialogos, cores, sons. Fragmentos sao ouro.</p></div>
  <div style="background:white;border:1px solid #d8c8f8;border-radius:10px;padding:16px;margin-bottom:12px;"><strong style="font-size:13px;color:var(--color-primary);">&#128156; Emocoes Sentidas</strong><p style="font-size:12.5px;color:var(--color-text-muted);line-height:1.6;margin-top:4px;">A emocao dominante do sonho. Pode ser uma unica palavra ou varias.</p></div>
  <div style="background:white;border:1px solid #d8c8f8;border-radius:10px;padding:16px;margin-bottom:12px;"><strong style="font-size:13px;color:var(--color-primary);">&#10022; Sinais de Sonho Identificados</strong><p style="font-size:12.5px;color:var(--color-text-muted);line-height:1.6;margin-top:4px;">Elementos do sonho que parecem impossiveis ou estranhos. Sao seus sinais pessoais de sonho.</p></div>
  <div class="tip-box" style="margin-top:8px;"><span class="tip-icon">&#9889;</span><div class="tip-text"><span class="tip-label">Lembre-se</span>Nao existe "sonho errado" para registrar. O objetivo e construir um mapa do seu inconsciente.</div></div>
  ${footer(PF, '05')}
</div>`;
}

// PAGE 6 - Exemplo
function examplePage() {
return `<div class="page">
  <div class="page-header"><span class="section-label">Exemplo</span><span style="font-size:11px;color:var(--color-text-muted);">06</span></div>
  <div style="display:inline-block;background:var(--color-gold);color:var(--color-primary);font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:1px;margin-bottom:16px;text-transform:uppercase;">&#10022; Exemplo Preenchido</div>
  <h2 style="font-family:var(--font-display);font-size:30px;color:var(--color-primary);margin-bottom:20px;">Entrada de Diario &mdash; Modelo</h2>
  <div style="background:white;border:1px solid #d8c8f8;border-radius:12px;padding:24px;margin-bottom:16px;">
    <div style="display:flex;gap:16px;margin-bottom:16px;">
      <div style="flex:1;"><div class="diary-label">Data</div><div style="border:1px solid #d4c4f0;border-radius:8px;padding:8px 12px;font-size:13px;background:#f5f0ff;">15 de Junho, 2025</div></div>
      <div style="flex:1;"><div class="diary-label">Horario de Dormir</div><div style="border:1px solid #d4c4f0;border-radius:8px;padding:8px 12px;font-size:13px;background:#f5f0ff;">23:30</div></div>
      <div style="flex:1;"><div class="diary-label">Horario de Acordar</div><div style="border:1px solid #d4c4f0;border-radius:8px;padding:8px 12px;font-size:13px;background:#f5f0ff;">07:15</div></div>
    </div>
    <div style="margin-bottom:16px;"><div class="diary-label">Sonhos</div><div style="border:1px solid #d4c4f0;border-radius:8px;padding:14px;font-size:13px;line-height:1.85;background:#f9f7ff;color:var(--color-text);">Sonhei que estava em uma casa antiga com muitos corredores. Tinha um jardim enorme nos fundos com arvores que brilhavam em azul. Encontrei minha avo (que faleceu ha 3 anos) sentada em um banco de pedra. Ela me deu uma chave dourada e disse: "Use quando precisar". A chave tinha uma inscricao que eu nao conseguia ler completamente. Quando tentei ler, o texto mudava a cada vez que eu piscava. Senti uma paz enorme.</div></div>
    <div style="display:flex;gap:16px;">
      <div style="flex:1;"><div class="diary-label">Emocoes Sentidas</div><div style="border:1px solid #d4c4f0;border-radius:8px;padding:8px 12px;font-size:13px;background:#f5f0ff;">Paz profunda, curiosidade, nostalgia</div></div>
      <div style="flex:1;"><div class="diary-label">Sinais de Sonho Identificados</div><div style="border:1px solid #d4c4f0;border-radius:8px;padding:8px 12px;font-size:13px;background:#f5f0ff;">Texto que muda ao reler, arvores brilhantes, avo falecida</div></div>
    </div>
  </div>
  <div class="tip-box"><span class="tip-icon">&#128161;</span><div class="tip-text"><span class="tip-label">Observe o exemplo</span>Note como a pessoa incluiu detalhes sensoriais (cores, texturas), emocoes especificas e identificou sinais de sonho claros (texto mutavel = Reality Check de leitura).</div></div>
  ${footer(PF, '06')}
</div>`;
}

// Diary page (pages 7-36)
function diaryPage(num, dreamLines) {
  const dl = dreamLines || 14;
  let lines = '';
  for (let i = 0; i < dl; i++) lines += '      <div class="dream-line"></div>\n';
  return `<div class="page" style="padding-bottom:80px;">
  <div class="page-header"><span class="section-label">Registro Diario</span><span style="font-size:11px;color:var(--color-text-muted);">${pad(num)}</span></div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
    <div>
      <h2 style="font-family:var(--font-display);font-size:32px;color:var(--color-primary);margin-bottom:4px;">Sonho do Dia <span style="color:var(--color-secondary);">${pad(num)}</span></h2>
      <div style="height:2px;width:60px;background:var(--color-gold);border-radius:1px;"></div>
    </div>
  </div>
  <div class="diary-row" style="margin-bottom:16px;">
    <div class="diary-field"><div class="diary-label">&#128197; Data</div><div class="diary-input"></div></div>
    <div class="diary-field"><div class="diary-label">&#128716; Horario de Dormir</div><div class="diary-input"></div></div>
    <div class="diary-field"><div class="diary-label">&#9200; Horario de Acordar</div><div class="diary-input"></div></div>
  </div>
  <div style="margin-bottom:14px;">
    <div class="diary-label">&#127769; Sonhos</div>
    <div class="dream-lines">
${lines}    </div>
  </div>
  <div class="diary-row">
    <div class="diary-field"><div class="diary-label">&#128156; Emocoes Sentidas</div><div class="dream-lines" style="min-height:60px;"><div class="dream-line"></div><div class="dream-line"></div></div></div>
    <div class="diary-field"><div class="diary-label">&#10022; Sinais de Sonho Identificados</div><div class="dream-lines" style="min-height:60px;"><div class="dream-line"></div><div class="dream-line"></div></div></div>
  </div>
  ${footer(PF, pad(num))}
</div>`;
}

// Weekly review page
function weeklyReviewPage(num) {
return `<div class="page">
  <div class="page-header"><span class="section-label">Revisao Semanal</span><span style="font-size:11px;color:var(--color-text-muted);">${pad(num)}</span></div>
  <div style="display:inline-block;background:var(--color-secondary);color:white;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:1px;margin-bottom:16px;text-transform:uppercase;">&#10022; Analise Semanal</div>
  <h2 style="font-family:var(--font-display);font-size:30px;color:var(--color-primary);margin-bottom:20px;">Analise da Semana</h2>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
    <div class="stat-card"><div class="stat-value">/7</div><div class="stat-label">Noites registradas</div></div>
    <div class="stat-card"><div class="stat-value">/7</div><div class="stat-label">Sonhos lembrados</div></div>
  </div>
  <div style="margin-bottom:14px;"><div class="diary-label">Padroes identificados esta semana</div><div class="dream-lines" style="min-height:80px;"><div class="dream-line"></div><div class="dream-line"></div><div class="dream-line"></div></div></div>
  <div style="margin-bottom:14px;"><div class="diary-label">Sinais de sonho mais frequentes</div><div class="dream-lines" style="min-height:60px;"><div class="dream-line"></div><div class="dream-line"></div></div></div>
  <div style="margin-bottom:14px;"><div class="diary-label">Emocoes predominantes</div><div class="dream-lines" style="min-height:60px;"><div class="dream-line"></div><div class="dream-line"></div></div></div>
  <div style="margin-bottom:14px;"><div class="diary-label">Tecnicas utilizadas e resultado</div><div class="dream-lines" style="min-height:60px;"><div class="dream-line"></div><div class="dream-line"></div></div></div>
  <div style="margin-bottom:14px;"><div class="diary-label">Objetivos para a proxima semana</div><div class="dream-lines" style="min-height:60px;"><div class="dream-line"></div><div class="dream-line"></div></div></div>
  ${footer(PF, pad(num))}
</div>`;
}

// Monthly review page
function monthlyReviewPage(num) {
return `<div class="page">
  <div class="page-header"><span class="section-label">Revisao Mensal</span><span style="font-size:11px;color:var(--color-text-muted);">${num}</span></div>
  <div style="display:inline-block;background:linear-gradient(135deg,var(--color-gold),#e0a830);color:var(--color-primary);font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:1px;margin-bottom:16px;text-transform:uppercase;">&#10022; Analise Mensal</div>
  <h2 style="font-family:var(--font-display);font-size:30px;color:var(--color-primary);margin-bottom:20px;">Visao Geral do Mes</h2>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:20px;">
    <div class="stat-card"><div class="stat-value">/30</div><div class="stat-label">Dias registrados</div></div>
    <div class="stat-card"><div class="stat-value">/30</div><div class="stat-label">Sonhos lembrados</div></div>
    <div class="stat-card"><div class="stat-value">0</div><div class="stat-label">Sonhos lucidos</div></div>
  </div>
  <h3 class="section-title">Comparativo Semanal</h3>
  <table class="data-table">
    <thead><tr><th>Semana</th><th>Dias registrados</th><th>Sonhos lembrados</th><th>Sinais identificados</th><th>Tecnicas praticadas</th></tr></thead>
    <tbody>
      <tr><td>Semana 1</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Semana 2</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Semana 3</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Semana 4</td><td></td><td></td><td></td><td></td></tr>
    </tbody>
  </table>
  <div style="margin-top:16px;margin-bottom:14px;"><div class="diary-label">Principais descobertas do mes</div><div class="dream-lines" style="min-height:80px;"><div class="dream-line"></div><div class="dream-line"></div><div class="dream-line"></div></div></div>
  <div style="margin-bottom:14px;"><div class="diary-label">Evolucao da pratica</div><div class="dream-lines" style="min-height:60px;"><div class="dream-line"></div><div class="dream-line"></div></div></div>
  <div style="margin-bottom:14px;"><div class="diary-label">Objetivos para o proximo mes</div><div class="dream-lines" style="min-height:60px;"><div class="dream-line"></div><div class="dream-line"></div></div></div>
  ${footer(PF, String(num))}
</div>`;
}

// Map page helper
function mapPage(num, label, svgIcon, title, desc, tableHeaders, tipIcon, tipLabel, tipText) {
  const thCells = tableHeaders.map(h => `<th style="width:${h.w}%;">${h.t}</th>`).join('');
  let rows = '';
  for (let i = 0; i < 8; i++) {
    rows += '      <tr>' + tableHeaders.map((h, j) => `<td style="height:36px;${j === 0 ? '' : ''}"></td>`).join('') + '</tr>\n';
  }
  return `<div class="page">
  <div class="page-header"><span class="section-label">${label}</span><span style="font-size:11px;color:var(--color-text-muted);">${num}</span></div>
  ${svgIcon}
  <h2 style="font-family:var(--font-display);font-size:30px;color:var(--color-primary);margin-bottom:16px;">${title}</h2>
  <p class="body-text">${desc}</p>
  <table class="data-table">
    <thead><tr>${thCells}</tr></thead>
    <tbody>
${rows}    </tbody>
  </table>
  <div class="tip-box" style="margin-top:12px;"><span class="tip-icon">${tipIcon}</span><div class="tip-text"><span class="tip-label">${tipLabel}</span>${tipText}</div></div>
  ${footer(PF, String(num))}
</div>`;
}

function buildMapPages() {
  const pages = [];

  // Page 41 - Mapa dos Personagens
  pages.push(mapPage(41, 'Mapa dos Personagens',
    '<svg width="48" height="48" viewBox="0 0 48 48" style="margin-bottom:12px;"><circle cx="24" cy="16" r="8" fill="#c9a4ff" opacity="0.2"/><path d="M10 42 C10 30 38 30 38 42" fill="#c9a4ff" opacity="0.15"/><circle cx="24" cy="16" r="8" fill="none" stroke="#c9a4ff" stroke-width="1"/></svg>',
    'Mapa dos Personagens',
    'Registre todos os personagens que aparecem nos seus sonhos. Identificar recorrencias ajuda a reconhecer pads no onirico.',
    [{t:'Personagem',w:18},{t:'Relacao',w:12},{t:'Descricao',w:30},{t:'Frequencia',w:10},{t:'O que representa',w:30}],
    '&#128269;', 'Dica', 'Pessoas que voce conhece podem representar aspectos de si mesmo. Pessoas desconhecidas geralmente representam qualidades ou medos que voce ainda nao reconheceu.'));

  // Page 42 - Mapa dos Lugares
  pages.push(mapPage(42, 'Mapa dos Lugares',
    '<svg width="48" height="48" viewBox="0 0 48 48" style="margin-bottom:12px;"><path d="M8 38 L16 18 L24 30 L32 14 L40 38 Z" fill="none" stroke="#c9a4ff" stroke-width="1"/><circle cx="16" cy="18" r="3" fill="#c9a4ff" opacity="0.2"/><circle cx="32" cy="14" r="3" fill="#c9a4ff" opacity="0.2"/></svg>',
    'Mapa dos Lugares',
    'Lugares recorrentes sao um dos sinais de sonho mais poderosos. Quando voce reconhece um lugar familiar dos seus sonhos na vida real, e hora de fazer um Reality Check.',
    [{t:'Lugar',w:20},{t:'Descricao',w:25},{t:'Frequencia',w:12},{t:'Emocao associada',w:20},{t:'O que simboliza',w:23}],
    '&#127751;', 'Observacao', 'Lugares que nao existem na vida real, mas que voce reconhece dos sonhos, sao sinais de sonho excelentes. Treine-se a questionar: "Ja estive aqui antes?"'));

  // Page 43 - Mapa das Emocoes
  pages.push(mapPage(43, 'Mapa das Emocoes',
    '<svg width="48" height="48" viewBox="0 0 48 48" style="margin-bottom:12px;"><circle cx="24" cy="24" r="20" fill="none" stroke="#c9a4ff" stroke-width="1"/><circle cx="18" cy="20" r="3" fill="#7b2fff" opacity="0.3"/><circle cx="30" cy="20" r="3" fill="#7b2fff" opacity="0.3"/><path d="M16 32 Q24 38 32 32" fill="none" stroke="#7b2fff" stroke-width="1.5" opacity="0.4"/></svg>',
    'Mapa das Emocoes',
    'As emocoes dos sonhos revelam o estado emocional profundo. Mapear sentimentos recorrentes ajuda a entender conflitos internos e descobertas pessoais.',
    [{t:'Emocao',w:20},{t:'Frequencia',w:15},{t:'Sonhos mais comuns',w:20},{t:'Intensidade (1-10)',w:20},{t:'Insights',w:25}],
    '&#128156;', 'Reflexao', 'Emocoes intensas em sonhos podem indicar questoes nao resolvidas. Considere: a emocao e proporcional ao evento? Se nao, o que ela realmente representa?'));

  // Page 44 - Mapa dos Animais
  pages.push(mapPage(44, 'Mapa dos Animais',
    '<svg width="48" height="48" viewBox="0 0 48 48" style="margin-bottom:12px;"><ellipse cx="24" cy="28" rx="14" ry="10" fill="none" stroke="#c9a4ff" stroke-width="1"/><circle cx="18" cy="22" r="3" fill="#c9a4ff" opacity="0.2"/><circle cx="30" cy="22" r="3" fill="#c9a4ff" opacity="0.2"/><path d="M14 16 Q18 10 22 16" fill="none" stroke="#c9a4ff" stroke-width="1"/><path d="M26 16 Q30 10 34 16" fill="none" stroke="#c9a4ff" stroke-width="1"/></svg>',
    'Mapa dos Animais',
    'Animais nos sonhos geralmente representam instintos, qualidades emocionais ou aspectos da personalidade que estao emergindo ou precisam de atencao.',
    [{t:'Animal',w:18},{t:'Frequencia',w:12},{t:'Comportamento no sonho',w:25},{t:'Emocao associada',w:15},{t:'Simbologia',w:30}],
    '&#128062;', 'Interpretacao', 'Cada cultura tem simbolismos diferentes para animais. Considere seu contexto pessoal e emocional, nao apenas significados gerais.'));

  // Page 45 - Mapa dos Simbolos
  pages.push(mapPage(45, 'Mapa dos Simbolos',
    '<svg width="48" height="48" viewBox="0 0 48 48" style="margin-bottom:12px;"><polygon points="24,4 28,18 44,18 31,27 36,42 24,33 12,42 17,27 4,18 20,18" fill="none" stroke="#c9a4ff" stroke-width="1"/><polygon points="24,14 26,20 32,20 27,24 29,32 24,27 19,32 21,24 16,20 22,20" fill="#c9a4ff" opacity="0.1"/></svg>',
    'Mapa dos Simbolos',
    'Simbolos sao a linguagem nativa do subconsciente. Quando voce identifica simbolos pessoais, comeca a "traduzir" seus sonhos com precisao.',
    [{t:'Simbolo',w:18},{t:'Frequencia',w:12},{t:'Contexto do sonho',w:25},{t:'Emocao',w:15},{t:'Significado pessoal',w:30}],
    '&#10024;', 'Metodo', 'Para cada simbolo, pergunte-se: "O que isso significa PARA MIM?" O significado pessoal e sempre mais valioso que interpretacoes genericas.'));

  // Page 46 - Mapa dos Sonhos Recorrentes
  pages.push(mapPage(46, 'Mapa dos Sonhos Recorrentes',
    '<svg width="48" height="48" viewBox="0 0 48 48" style="margin-bottom:12px;"><circle cx="24" cy="24" r="20" fill="none" stroke="#c9a4ff" stroke-width="1"/><path d="M12 24 Q18 16 24 24 Q30 32 36 24" fill="none" stroke="#7b2fff" stroke-width="1.5" opacity="0.5"/><path d="M12 24 Q18 32 24 24 Q30 16 36 24" fill="none" stroke="#c9a4ff" stroke-width="1" opacity="0.3"/></svg>',
    'Mapa dos Sonhos Recorrentes',
    'Sonhos que se repetem geralmente carregam mensagens importantes. Mapea-los revela padroes profundos do seu inconsciente que pedem atencao.',
    [{t:'Sonho',w:18},{t:'Vezes',w:12},{t:'Variacoes',w:20},{t:'Emocao',w:15},{t:'Interpretacao / Mensagem',w:35}],
    '&#128257;', 'Sonhos recorrentes', 'Quando um sonho recorrente se transforma ou voce reage de forma diferente, isso geralmente indica crescimento emocional e autoconhecimento.'));

  return pages.join('\n');
}

// PAGE 47 - Estatisticas
function statsPage() {
return `<div class="page">
  <div class="page-header"><span class="section-label">Estatisticas Pessoais</span><span style="font-size:11px;color:var(--color-text-muted);">47</span></div>
  <h2 style="font-family:var(--font-display);font-size:30px;color:var(--color-primary);margin-bottom:20px;">Estatisticas da Minha Jornada</h2>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:24px;">
    <div class="stat-card"><div class="stat-value" style="font-size:32px;">0</div><div class="stat-label">Total de noites registradas</div></div>
    <div class="stat-card"><div class="stat-value" style="font-size:32px;">0</div><div class="stat-label">Total de sonhos lembrados</div></div>
    <div class="stat-card"><div class="stat-value" style="font-size:32px;">0</div><div class="stat-label">Sonhos lucidos</div></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;">
    <div class="stat-card"><div class="stat-value" style="font-size:28px;">--</div><div class="stat-label">Sonho mais memorable</div></div>
    <div class="stat-card"><div class="stat-value" style="font-size:28px;">--</div><div class="stat-label">Sinal de sonho mais comum</div></div>
  </div>
  <h3 class="section-title">Frequencia de Emocoes</h3>
  <table class="data-table">
    <thead><tr><th>Emocao</th><th>Semana 1</th><th>Semana 2</th><th>Semana 3</th><th>Semana 4</th></tr></thead>
    <tbody>
      <tr><td>Alegria</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Medo</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Paz</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Curiosidade</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Ansiedade</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Tristeza</td><td></td><td></td><td></td><td></td></tr>
      <tr><td>Liberdade</td><td></td><td></td><td></td><td></td></tr>
    </tbody>
  </table>
  ${footer(PF, '47')}
</div>`;
}

// PAGE 48 - Conquistas
function achievementsPage() {
return `<div class="page">
  <div class="page-header"><span class="section-label">Conquistas</span><span style="font-size:11px;color:var(--color-text-muted);">48</span></div>
  <h2 style="font-family:var(--font-display);font-size:30px;color:var(--color-primary);margin-bottom:20px;">Minhas Conquistas</h2>
  <p class="body-text">Celebre cada marco na sua jornada. Cada registro e um passo em direcao a consciencia nos sonhos.</p>
  <div class="achievement-card"><div class="achievement-icon">&#128221;</div><div><div class="achievement-title">Primeiro Registro</div><div class="achievement-desc">Escreveu a primeira entrada no diario de sonhos.</div></div></div>
  <div class="achievement-card"><div class="achievement-icon">&#128171;</div><div><div class="achievement-title">Sequencia de 7 Dias</div><div class="achievement-desc">Registrou sonhos por 7 dias consecutivos.</div></div></div>
  <div class="achievement-card"><div class="achievement-icon">&#127775;</div><div><div class="achievement-title">Primeiro Sinal Identificado</div><div class="achievement-desc">Identificou o primeiro sinal de sonho pessoal.</div></div></div>
  <div class="achievement-card"><div class="achievement-icon">&#127752;</div><div><div class="achievement-title">Sonho Completo</div><div class="achievement-desc">Registrou um sonho com narrativa completa e detalhada.</div></div></div>
  <div class="achievement-card"><div class="achievement-icon">&#128170;</div><div><div class="achievement-title">Sequencia de 21 Dias</div><div class="achievement-desc">Manteve a pratica por 21 dias seguidos.</div></div></div>
  <div class="achievement-card"><div class="achievement-icon">&#10024;</div><div><div class="achievement-title">Primeiro Sonho Lucido</div><div class="achievement-desc">Percebeu que estava sonhando durante um sonho.</div></div></div>
  <div class="achievement-card"><div class="achievement-icon">&#127880;</div><div><div class="achievement-title">Mestre dos Sonhos</div><div class="achievement-desc">Completou 30 dias de registro e identificou 3+ sinais de sonho.</div></div></div>
  ${footer(PF, '48')}
</div>`;
}

// PAGE 49 - First Lucid Dream chapter
function firstLucidDreamChapter() {
return `<div class="page page-chapter">
  <svg style="position:absolute;top:0;left:0;opacity:0.12;" width="794" height="1123" viewBox="0 0 794 1123"><circle cx="600" cy="200" r="200" fill="#7b2fff"/><circle cx="200" cy="900" r="150" fill="#c9a4ff"/></svg>
  <div style="margin-top:auto;margin-bottom:auto;padding:40px 0;">
    <div class="chapter-number">&#10022;</div>
    <h2 class="chapter-title" style="font-size:40px;">Meu Primeiro<br>Sonho Lucido</h2>
    <p class="chapter-intro" style="font-size:15px;max-width:480px;">Esta pagina e reservada para o momento mais especial da sua jornada &mdash; o dia em que voce percebeu, dentro de um sonho, que estava sonhando.</p>
  </div>
  ${footer(PF, '49')}
</div>`;
}

// PAGE 50 - Momento Especial
function specialMomentPage() {
return `<div class="page">
  <div class="page-header"><span class="section-label">Momento Especial</span><span style="font-size:11px;color:var(--color-text-muted);">50</span></div>
  <h2 style="font-family:var(--font-display);font-size:30px;color:var(--color-primary);margin-bottom:16px;">O Dia em que Tudo Mudou</h2>
  <div class="diary-row" style="margin-bottom:16px;">
    <div class="diary-field"><div class="diary-label">&#128197; Data</div><div class="diary-input"></div></div>
    <div class="diary-field"><div class="diary-label">&#9200; Hora em que percebeu</div><div class="diary-input"></div></div>
  </div>
  <div style="margin-bottom:16px;"><div class="diary-label">&#127769; Como aconteceu</div><div class="dream-lines" style="min-height:140px;">
      <div class="dream-line"></div>
      <div class="dream-line"></div>
      <div class="dream-line"></div>
      <div class="dream-line"></div>
      <div class="dream-line"></div>
      <div class="dream-line"></div>
      <div class="dream-line"></div>
      <div class="dream-line"></div>
    </div></div>
  <div style="margin-bottom:16px;"><div class="diary-label">&#128156; O que sentiu ao perceber que estava sonhando</div><div class="dream-lines" style="min-height:80px;">
      <div class="dream-line"></div>
      <div class="dream-line"></div>
      <div class="dream-line"></div>
      <div class="dream-line"></div>
    </div></div>
  <div style="margin-bottom:16px;"><div class="diary-label">&#10022; O que fez dentro do sonho</div><div class="dream-lines" style="min-height:80px;">
      <div class="dream-line"></div>
      <div class="dream-line"></div>
      <div class="dream-line"></div>
      <div class="dream-line"></div>
    </div></div>
  <div class="highlight-box"><p class="highlight-text">Parabens! Voce acaba de ingressar em um selecto grupo de pessoas que exploram o universo dos sonhos de forma consciente. Esta experiencia e apenas o comeco.</p></div>
  ${footer(PF, '50')}
</div>`;
}

// PAGE 51 - Continue a Jornada
function continueJourneyPage() {
return `<div class="page page-chapter">
  <svg style="position:absolute;top:0;left:0;opacity:0.12;" width="794" height="1123" viewBox="0 0 794 1123"><circle cx="400" cy="400" r="300" fill="#7b2fff"/><circle cx="150" cy="800" r="150" fill="#c9a4ff"/><circle cx="650" cy="250" r="120" fill="#f0c060" opacity="0.5"/></svg>
  <div style="margin-top:auto;margin-bottom:auto;padding:40px 0;text-align:center;">
    <svg width="80" height="80" viewBox="0 0 80 80" style="margin-bottom:20px;display:block;margin-left:auto;margin-right:auto;"><circle cx="40" cy="40" r="36" fill="none" stroke="#f0c060" stroke-width="1.5" opacity="0.6"/><path d="M40 16 C28 24 24 36 30 46 C34 52 46 52 50 46 C56 36 52 24 40 16Z" fill="#f0c060" opacity="0.15"/><circle cx="40" cy="36" r="6" fill="#f0c060" opacity="0.4"/></svg>
    <h2 class="chapter-title" style="font-size:42px;margin-top:0;">Continue a Jornada</h2>
    <p class="chapter-intro" style="font-size:15px;max-width:480px;margin:20px auto 0;text-align:center;">Cada noite e uma nova oportunidade de explorar o infinito territorio da sua mente. O caminho da lucidez e uma jornada sem fim &mdash; e cada passo e uma descoberta.</p>
    <div style="margin-top:40px;padding:20px;background:rgba(255,255,255,0.06);border-radius:12px;border-left:3px solid var(--color-gold);text-align:left;max-width:480px;margin-left:auto;margin-right:auto;">
      <p style="font-family:var(--font-display);font-size:18px;color:#e8dcff;line-height:1.7;font-style:italic;">"Os sonhos sao a lingua do inconsciente. Quando voce aprende a falar essa lingua, voce descobre que sempre houve uma conversa esperando por voce."</p>
      <p style="font-size:12px;color:var(--color-gold);margin-top:12px;font-weight:600;">&mdash; Luna Vieira</p>
    </div>
    <div style="margin-top:36px;display:flex;gap:24px;justify-content:center;">
      <div style="text-align:center;"><div style="font-family:var(--font-display);font-size:32px;color:var(--color-gold);font-weight:700;">30</div><div style="font-size:11px;color:#c9a4ff;margin-top:4px;letter-spacing:1px;text-transform:uppercase;">noites de<br>registro</div></div>
      <div style="width:1px;background:rgba(255,255,255,0.15);"></div>
      <div style="text-align:center;"><div style="font-family:var(--font-display);font-size:32px;color:var(--color-gold);font-weight:700;">6</div><div style="font-size:11px;color:#c9a4ff;margin-top:4px;letter-spacing:1px;text-transform:uppercase;">mapas de<br>analise</div></div>
      <div style="width:1px;background:rgba(255,255,255,0.15);"></div>
      <div style="text-align:center;"><div style="font-family:var(--font-display);font-size:32px;color:var(--color-gold);font-weight:700;">&#10022;</div><div style="font-size:11px;color:#c9a4ff;margin-top:4px;letter-spacing:1px;text-transform:uppercase;">infinitas<br>aventuras</div></div>
    </div>
    <div style="margin-top:40px;">
      <span style="font-size:12px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;">Colecao Desperte no Sonho &bull; Edicao Premium 2025</span>
    </div>
  </div>
  ${footer(PF, '51')}
</div>`;
}

// Script
function script() {
return `<script>
(function(){
  var c=document.getElementById("cover-canvas");if(!c)return;var ctx=c.getContext("2d");var W=c.width,H=c.height;
  var stars=[];for(var i=0;i<180;i++){stars.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+0.2,a:Math.random()*Math.PI*2,s:Math.random()*0.01+0.005});}
  function draw(){ctx.clearRect(0,0,W,H);
  for(var i=0;i<stars.length;i++){var s=stars[i];s.a+=s.s;var o=0.3+Math.sin(s.a)*0.3;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle="rgba(201,164,255,"+o+")";ctx.fill();}
  requestAnimationFrame(draw);}draw();
})();
</script>`;
}

// Assemble
let html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Diario dos Sonhos Premium</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Karla:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>${css()}</style>
</head>
<body>
`;

// Pages 1-6
html += coverPage() + '\n';
html += copyrightPage() + '\n';
html += howToUsePage() + '\n';
html += rememberDreamsPage() + '\n';
html += howToFillPage() + '\n';
html += examplePage() + '\n';

// Pages 7-36: 30 diary pages
for (let i = 7; i <= 36; i++) {
  html += diaryPage(i) + '\n';
}

// Pages 37-40: 4 weekly reviews
for (let i = 37; i <= 40; i++) {
  html += weeklyReviewPage(i) + '\n';
}

// Page 41: Monthly review - wait, actually the original has the monthly review AFTER the weekly reviews
// Let me check: original has pages 37-40 as weekly reviews, page 40 as monthly review?
// No - the original shows 4 weekly review blocks, then the monthly review page labeled 40.
// Actually looking at the original more carefully:
// The weekly review pages don't have explicit page numbers in the broken HTML.
// Then the monthly review is page 40.
// So: 4 weekly reviews (pages 37-40), then monthly review = page 41? No.
// Let me recheck: The original has weekly review blocks at lines 1407-1466 (4 blocks),
// then monthly review at line 1467 with page number 40.
// So the weekly reviews must be pages 37, 38, 39, and... hmm.
// Actually, 4 weekly reviews + 1 monthly review. The monthly review is labeled 40.
// So weekly reviews are pages 37-40 and monthly is page 41?
// But the monthly review page says "40" in the header.
// Let me just follow the original numbering: 4 weekly reviews, then monthly at page 40.
// That means 3 weekly reviews (37-39) + monthly (40).
// But I see 4 weekly review blocks in the original...
// I'll keep 4 weekly reviews (37-40) and adjust monthly to 41.

// Actually, let me reconsider. The original had exactly these blocks before the maps:
// - 4 "Revisao Semanal" blocks (broken HTML, no explicit page numbers)
// - 1 "Revisao Mensal" block with page number 40
// So the original intended: 3 weekly reviews (37,38,39) + monthly (40) = 4 pages
// But there are 4 weekly review blocks. The 4th might be a duplicate or the numbering was off.
// Let me keep 3 weekly reviews to match page 40 for monthly.
// Wait, the user said "revisoes" (plural). Let me keep all 4 weekly reviews.
// Pages: 37, 38, 39, 40 = weekly reviews. Monthly = 41. Then maps shift by 1.
// Or: 3 weekly reviews (37-39), monthly (40), maps 41-46... that matches original.

// The original has the monthly review page at position labeled "40" and then maps start at "41".
// So: 3 weekly reviews (37-39) + monthly (40) + 6 maps (41-46) + stats (47) + achievements (48) + chapters (49-51)
// Total = 6 + 30 + 3 + 1 + 6 + 1 + 1 + 1 + 1 + 1 = 51 pages

// But original shows 4 Revisao Semanal blocks. Let me keep 4 weekly reviews.
// Pages: 37-40 weekly, 41 monthly, 42-47 maps, 48 stats, 49 achievements, 50 chapter, 51 special, 52 closing
// That's 6 + 30 + 4 + 1 + 6 + 1 + 1 + 1 + 1 + 1 = 52 pages. User said 50-52. OK.

// But the original monthly review page explicitly says "40" in the header span. 
// I'll go with the original: 3 weekly reviews (37-39) + monthly (40).

// Actually, I just need to produce valid HTML. Let me go with 3 weekly reviews to match original numbering.

// Correction: I'll use 3 weekly reviews (37-39), then monthly at 40.

html += weeklyReviewPage(37) + '\n';
html += weeklyReviewPage(38) + '\n';
html += weeklyReviewPage(39) + '\n';

// Page 40: Monthly review
html += monthlyReviewPage(40) + '\n';

// Pages 41-46: Maps
html += buildMapPages() + '\n';

// Pages 47-51
html += statsPage() + '\n';
html += achievementsPage() + '\n';
html += firstLucidDreamChapter() + '\n';
html += specialMomentPage() + '\n';
html += continueJourneyPage() + '\n';

html += `</body>\n</html>`;

fs.writeFileSync('D:\\despertar\\entregaveis\\bonus\\diario-sonhos-premium.html', html, 'utf8');

// Count pages
const pageCount = (html.match(/<div class="page[\s"]/g) || []).length;
console.log('File written successfully!');
console.log('Total pages: ' + pageCount);
console.log('File size: ' + (html.length / 1024).toFixed(1) + ' KB');
