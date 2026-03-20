# 🔧 Prompt — Atualização de Projeto Existente
## Claude CLI | Versão 1.0
### Para aplicar melhorias cirúrgicas em sites já construídos

---

Cole o bloco abaixo diretamente no Claude CLI, dentro do diretório raiz do projeto a ser atualizado.

---

```
Você é um desenvolvedor front-end sênior. Sua missão é aplicar melhorias
cirúrgicas neste projeto existente — sem reescrever o que funciona, sem
alterar identidade visual, sem mudar estrutura HTML desnecessariamente.

---

## FASE 1 — LEITURA DO PROJETO

Leia todos os arquivos do projeto com atenção:
1. index.html — estrutura completa
2. CSS principal — tokens, componentes, animações
3. JS principal — inicialização, splash, tema, i18n, carousel

Após a leitura, confirme:
"Leitura concluída. Identificando o que precisa ser corrigido."

---

## FASE 2 — DIAGNÓSTICO OBRIGATÓRIO

Antes de alterar qualquer coisa, verifique cada item abaixo e
documente o estado atual de cada um:

1. **Troca de tema** — o body tem `transition: background` permanente?
   Há outros elementos com transition de background hardcoded?
   Quantos elementos animam simultaneamente na troca de tema?

2. **Carousel** — usa `translateX` no track com slides de layout complexo
   (grid interno de 2+ colunas)? Ou já usa crossfade por opacity?

3. **Tipografia** — usa `clamp()` na escala tipográfica ou valores fixos
   com breakpoints?

4. **sessionStorage na splash** — a splash verifica sessionStorage antes
   de rodar para não repetir ao voltar de outra página?

5. **Tokens centralizados** — existe arquivo `tokens.css` separado ou
   as variáveis estão no CSS principal?

6. **prefers-reduced-motion** — implementado no CSS (zerando durations)
   e no JS (return imediato nas funções de animação)?

7. **MingCute** — ícones usam SVG inline próprio ou emojis como ícones
   de interface?

8. **Formulário** — aponta para Google Forms externo ou Netlify Forms
   integrado?

9. **overflow-x** — html E body têm overflow-x: hidden?

10. **Scroll reveal com blur** — reveals usam filter: blur(4px) → blur(0)
    ou apenas opacity + translateY?

Exiba o diagnóstico completo antes de prosseguir.
Aguarde confirmação antes de aplicar qualquer correção.

---

## FASE 3 — CORREÇÕES (aplicar apenas as confirmadas)

### CORREÇÃO 1 — Troca de tema sem lag no iOS
**Problema:** `transition: background` permanente em body e múltiplos
elementos causa lentidão na troca de tema no iOS Safari.

**Solução:** Remover todas as transitions de background/color permanentes
do CSS. Criar classe `.theme-transitioning` aplicada via JS por 300ms
apenas durante a troca:

```css
/* Remover do body e de todos os elementos: */
/* transition: background 0.5s, color 0.5s; */
/* transition: background 0.4s, border-color 0.4s; */

/* Adicionar regra única e controlada: */
.theme-transitioning,
.theme-transitioning *,
.theme-transitioning *::before,
.theme-transitioning *::after {
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease !important;
}
```

```js
/* Substituir a função toggleTheme() existente: */
function toggleTheme() {
  document.documentElement.classList.add('theme-transitioning');
  document.documentElement.setAttribute(
    'data-theme',
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  );
  setTimeout(() => {
    document.documentElement.classList.remove('theme-transitioning');
  }, 300);
}
```

**Regras:**
- Varrer TODO o CSS e remover qualquer `transition` que inclua
  `background`, `background-color` ou `color` em elementos que
  participam do tema
- Manter transitions de `transform`, `opacity`, `border-radius`,
  `box-shadow` — essas não causam o problema
- O `backdrop-filter` da nav não precisa de transition — remover
  se houver

---

### CORREÇÃO 2 — Carousel crossfade (slides com layout interno complexo)
**Problema:** `translateX` no track com slides que têm grid interno
de 2 colunas causa efeito "rasgado" — mostra metade de dois slides
simultaneamente.

**Solução:** Migrar para crossfade por opacity com grid empilhado:

```css
/* Substituir no CSS: */
.projects-carousel {
  display: grid;
  grid-template-columns: 100%;
  /* REMOVER: display: flex; transition: transform ... */
}
.carousel-slide {
  grid-row: 1;
  grid-column: 1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.45s ease;
  /* REMOVER: flex: 0 0 100% */
}
.carousel-slide.active {
  opacity: 1;
  pointer-events: auto;
}
```

```js
/* Substituir a função goTo() no carousel: */
function goTo(idx) {
  const slides = carousel.querySelectorAll('.carousel-slide');
  slides[current].classList.remove('active');
  current = ((idx % totalSlides) + totalSlides) % totalSlides;
  slides[current].classList.add('active');
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
}
/* Inicializar: adicionar classe .active no primeiro slide */
```

**Atenção:** Remover `border-radius` + `overflow: hidden` de slides
individuais se existirem — aplicar apenas no container pai.

---

### CORREÇÃO 3 — Tipografia fluida com clamp()
**Problema:** Tamanhos de fonte fixos com breakpoints causam saltos
abruptos em viewports intermediárias.

**Solução:** Migrar a escala tipográfica para clamp() nas variáveis CSS:

```css
/* Adicionar/substituir no :root: */
--text-hero:  clamp(2.5rem, 6vw, 5rem);
--text-h2:    clamp(2rem, 4.5vw, 3.5rem);
--text-h3:    clamp(1.5rem, 3vw, 2.5rem);
--text-h4:    clamp(1.25rem, 2vw, 1.75rem);
--text-h5:    clamp(1.1rem, 1.5vw, 1.35rem);
--text-body:  1rem;
--text-small: 0.875rem;
--text-tag:   0.75rem;
```

Substituir nos seletores CSS os valores hardcoded pelas variáveis.
Adaptar os valores de clamp() à escala visual já existente no projeto
— não alterar o tamanho percebido, apenas tornar fluido.

---

### CORREÇÃO 4 — sessionStorage na splash
**Problema:** A splash roda toda vez que index.html carrega, inclusive
ao voltar de outra página na mesma sessão.

**Solução:** Verificar sessionStorage antes de rodar. Sempre usar
`dismissSplash()` — nunca replicar a lógica manualmente:

```js
/* Substituir no window.addEventListener('load', ...) */
const splashSeen = sessionStorage.getItem('splashSeen');
if (prefersReducedMotion || splashSeen) {
  dismissSplash();
} else {
  sessionStorage.setItem('splashSeen', '1');
  document.body.classList.add('splash-active');
  runLogoAnimation();
}
```

---

### CORREÇÃO 5 — Scroll reveal com blur
**Problema:** Reveals atuais usam apenas opacity + translateY.
Adicionar filter: blur(4px) → blur(0) eleva a percepção de qualidade.

**Solução:** Atualizar as chamadas GSAP de scroll reveal:

```js
/* Substituir o padrão de gsap.from() nos reveals de seção: */
gsap.from(elemento, {
  scrollTrigger: { trigger: secao, start: 'top 88%' },
  y: 36,
  opacity: 0,
  filter: 'blur(4px)',
  duration: 0.8,
  ease: 'power2.out',
  clearProps: 'filter' // obrigatório — libera GPU após animação
});
```

Aplicar apenas nos elementos principais de cada seção (headings,
imagens, cards featured). Não aplicar em grids grandes ou listas.

---

### CORREÇÃO 6 — Tokens de easing padronizados
**Problema:** Easings hardcoded espalhados pelo CSS.

**Solução:** Declarar no :root e referenciar:

```css
/* Adicionar no :root: */
--ease-brand:  cubic-bezier(.25,.46,.45,.94);
--ease-snap:   cubic-bezier(.76,0,.24,1);
--ease-bounce: cubic-bezier(.34,1.56,.64,1);
```

Substituir `transition: ... ease` por `transition: ... var(--ease-brand)`
nos componentes principais.

---

## REGRAS OBRIGATÓRIAS DURANTE A ATUALIZAÇÃO

- NÃO alterar identidade visual — cores, tipografia escolhida, layout
- NÃO reescrever seções que funcionam
- NÃO mudar nomes de classes existentes sem atualizar todas as referências
- Aplicar uma correção por vez — confirmar que não quebrou nada antes
  da próxima
- Após cada correção, listar exatamente o que foi alterado
- Se uma correção exigir mudanças em mais de 10 lugares, propor a
  abordagem antes de executar

---

## FASE 4 — CHECKLIST FINAL

Após aplicar as correções confirmadas, verificar:

- [ ] Troca de tema: rápida e suave no mobile (testar mentalmente
      se há transitions permanentes restantes)
- [ ] Carousel: slides com layout complexo usam crossfade, não translateX
- [ ] sessionStorage: splash não repete ao voltar de outra página
- [ ] Blur no reveal: clearProps: 'filter' presente em todos os gsap.from
      com filter
- [ ] Nenhuma transition de background permanente em elementos do tema
- [ ] prefers-reduced-motion ainda funcionando após as mudanças

---

## FASE 5 — RELATÓRIO

Ao final, gere um arquivo `UPDATE_REPORT.md` na raiz do projeto com:
- Data da atualização
- Correções aplicadas
- Arquivos modificados
- O que NÃO foi alterado e por quê
- Próximas melhorias sugeridas (formulário Netlify Forms, MingCute, etc.)

Comece agora pela leitura do projeto.
```

---

## 📌 Como usar

1. Abra o Claude CLI na raiz do projeto a ser atualizado
2. Cole o prompt acima integralmente
3. Aguarde o diagnóstico completo
4. Confirme quais correções aplicar
5. O Claude aplica uma por vez e reporta o que mudou

---

## 🔄 Aplicabilidade

Este prompt funciona em qualquer projeto do portfólio ByLara:

| Projeto | Correções prioritárias |
|---|---|
| lucaslara.dev | 1 (tema iOS), 2 (carousel), 4 (sessionStorage), 5 (blur reveal) |
| jazzlo.netlify.app | Auditoria necessária antes de definir |
| teulleradv.netlify.app | Já está no padrão mais recente |

---

## 💡 Quando criar v2.0 deste prompt

Adicionar novas correções sempre que um bug recorrente for identificado
em produção — seguindo o mesmo padrão do prompt de criação.

Próximas correções candidatas:
- Formulário Netlify Forms integrado (substituir Google Forms)
- MingCute em projetos que ainda usam emojis como ícones
- Tipografia fluida em projetos mais antigos

---

*Versão 1.0 | Atualização cirúrgica de projetos existentes*
