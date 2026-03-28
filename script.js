
  const html = document.documentElement;

  /* ════════════════════════════════════════════════
     CONFIGURAÇÃO GLOBAL — edite aqui quando precisar
     DEFAULT_LANG: 'pt' = PT-BR primeiro | 'en' = EN primeiro
  ════════════════════════════════════════════════ */
  const DEFAULT_LANG = 'pt';

  /* 1. TEMA — detecta preferência do dispositivo */
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

  /* ════════════════════════════════════════════════
     PROJETOS — adicione novos projetos aqui
     status: 'live' | 'wip' | 'soon'
     contact: { type: 'instagram'|'url', handle, url }
  ════════════════════════════════════════════════ */
  const projects = [
    {
      name: "Jazz Lourenço",
      categoryPT: "Landing Page",
      categoryEN: "Landing Page",
      status: "live",
      url: "https://jazzlo.netlify.app/",
      contact: { type: "instagram", handle: "@jz.lourenco", url: "https://www.instagram.com/jz.lourenco/" },
      tags: ["HTML/CSS/JS", "Landing Page", "Design System", "i18n", "Dark Mode"],
      mockupName: "Jazz Lourenço",
      mockupUrl: "https://jazzlo.netlify.app/",
      mockupAccent: "#C8853A",
      descPT: "Jazz atendia 12 clientes mas não tinha onde mostrar isso de forma profissional. Desenvolvemos uma landing page com seu próprio design system, modo escuro/claro, suporte PT/EN e um modal de case para cada cliente. Agora ela tem um portfólio que vende por ela.",
      descEN: "Jazz served 12 clients but had nowhere to showcase that professionally. We built a landing page with her own design system, dark/light mode, PT/EN support, and a case modal for each client. Now she has a portfolio that sells for her.",
      impactLabelWipPT: "// quer saber mais sobre esse projeto?",
      impactLabelWipEN: "// want to know more about this project?",
      impactWipPT: "Entre em contato com a Jazz pelo Instagram e pergunte sobre o site que estou desenvolvendo para ela.",
      impactWipEN: "Contact Jazz on Instagram and ask about the website I'm developing for her.",
      impactLabelLivePT: "// quer ver o resultado?",
      impactLabelLiveEN: "// want to see the result?",
      impactLivePT: "Acesse o site completo pelo botão abaixo.",
      impactLiveEN: "Check out the full website using the button below.",
    },    
    {
      name: "Teuller Moraes Adv",
      categoryPT: "Site",
      categoryEN: "Website",
      status: "live",
      url: "https://teulleradv.netlify.app/",     // colocar URL quando terminar
      contact: { type: "instagram", handle: "@teuller.adv", url: "https://instagram.com/teuller.adv" },
      tags: ["HTML/CSS/JS", "WhatsApp", "SEO"],
      mockupName: "Teuller Moraes Adv",
      mockupUrl: "teulleradv.com.br",
      mockupAccent: "#002B3C",
      descPT: "Dr. Teuller dependia exclusivamente de indicações. Sem site, sem presença digital. Criamos uma landing page que posiciona ele como referência na área — com design que transmite seriedade, formulário qualificador e link direto pro WhatsApp.",
      descEN: "Dr. Teuller relied entirely on referrals. No site, no digital presence. We built a landing page that positions him as an authority in his field — with a design that conveys credibility, a qualifying form, and a direct WhatsApp link.",
      impactLabelWipPT: "// quer saber mais sobre esse projeto?",
      impactLabelWipEN: "// want to know more about this project?",
      impactWipPT: "Entre em contato com o Dr Teuller pelo Instagram e pergunte sobre o projeto que estou desenvolvendo para ele.",
      impactWipEN: "Contact Dr Teuller on Instagram and ask about the project I'm developing for him.",
      impactLabelLivePT: "// quer ver o resultado?",
      impactLabelLiveEN: "// want to see the result?",
      impactLivePT: "Acesse o site completo pelo botão abaixo.",
      impactLiveEN: "Check out the full website using the button below.",
    },
    {
      name: "Instituto Mariana Menegardo",
      categoryPT: "Landing Page",
      categoryEN: "Landing Page",
      status: "live",
      url: "https://institutomm.netlify.app/",
      contact: { type: "instagram", handle: "@dra.marianamenegardo", url: "https://instagram.com/dra.marianamenegardo" },
      tags: ["HTML/CSS/JS", "GSAP", "Landing Page", "Netlify"],
      mockupName: "Instituto Mariana Menegardo",
      mockupUrl: "institutomm.netlify.app",
      mockupAccent: "#C96868",
      descPT: "Clínica nova, zero pacientes. Construímos uma landing page de pré-lançamento com lista VIP e WhatsApp — com copy focado na objeção real das pacientes: medo de parecer artificial. Resultado: fila de espera formada ainda antes da inauguração.",
      descEN: "Brand new clinic, zero patients. We built a pre-launch landing page with a VIP waitlist and WhatsApp — copy targeting the real patient objection: fear of looking unnatural. Result: a full waitlist before the clinic even opened.",
      impactLabelWipPT: "// quer saber mais sobre esse projeto?",
      impactLabelWipEN: "// want to know more about this project?",
      impactWipPT: "Entre em contato com a Mariana pelo Instagram e pergunte sobre o site que estou desenvolvendo para ela.",
      impactWipEN: "Contact Mariana on Instagram and ask about the website I'm developing for her.",
      impactLabelLivePT: "// quer ver o resultado?",
      impactLabelLiveEN: "// want to see the result?",
      impactLivePT: "Acesse o site completo pelo botão abaixo.",
      impactLiveEN: "Check out the full website using the button below.",
    },
    // ── adicione o próximo projeto aqui ──
    // {
    //   name: "Nome do Cliente",
    //   categoryPT: "Site + IA",
    //   categoryEN: "Website + AI",
    //   status: "live",
    //   url: "https://cliente.com.br",
    //   contact: null,
    //   tags: ["React", "AI Agent"],
    //   mockupName: "Nome",
    //   mockupUrl: "cliente.com.br",
    //   mockupAccent: "#0a1a3d",
    //   descPT: "...",
    //   descEN: "...",
    //   impactLabelWipPT: "// quer saber mais sobre esse projeto?",
    //   impactLabelWipEN: "// want to know more about this project?",
    //   impactWipPT: "...",
    //   impactWipEN: "...",
    //   impactLabelLivePT: "// quer ver o resultado?",
    //   impactLabelLiveEN: "// want to see the result?",
    //   impactLivePT: "Acesse o site completo pelo botão abaixo.",
    //   impactLiveEN: "Check out the full website using the button below.",
    // },
  ];

    /* 2. IDIOMA — aplica o padrão configurado */
  function setLang(lang) {
    html.setAttribute('data-lang', lang);
    html.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    const btn = document.getElementById('langToggle');
    btn.textContent = lang === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN';
    btn.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para Português');
    if (typeof renderProjects === 'function') renderProjects();
  }
  setLang(DEFAULT_LANG);

  /* 3. SPLASH — animação da logo */
  function runLogoAnimation() {
    const strokeIds = ['s-bl','s-br','s-bolt'];
    const fills     = document.querySelectorAll('.logo-fill');
    const wmStroke  = document.getElementById('wm-stroke');
    const wmFill    = document.getElementById('wm-fill');
    const tag       = document.getElementById('splashTag');

    // fase 1 — desenha contornos devagar (começa 500ms após load)
    setTimeout(() => {
      // ícone: cada traço com delay escalonado, bem devagar
      strokeIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.transition = `stroke-dashoffset 1.4s cubic-bezier(.6,0,.4,1) ${i * 0.25}s,
                               filter 1.4s ease ${i * 0.25}s`;
        el.style.strokeDashoffset = '0';
        el.style.filter = `drop-shadow(0 0 8px var(--glow))`;
      });
      // wordmark: começa junto mas mais devagar
      if (wmStroke) {
        wmStroke.style.transition = 'stroke-dashoffset 2.2s cubic-bezier(.5,0,.3,1) 0.3s';
        wmStroke.style.strokeDashoffset = '0';
      }
    }, 500);

    // fase 2 — fill começa a aparecer enquanto stroke ainda está visível
    // (começa quando o contorno do ícone está ~70% feito)
    setTimeout(() => {
      fills.forEach((f, i) => {
        f.style.transition = `opacity 1.2s ease ${i * 0.08}s`;
        f.style.opacity = '1';
      });
    }, 1800);

    // fase 3 — strokes somem suavemente (fill já está aparente)
    setTimeout(() => {
      strokeIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.transition = 'opacity 0.8s ease, filter 0.8s ease';
        el.style.opacity = '0';
        el.style.filter = 'none';
      });
      if (wmStroke) {
        wmStroke.style.transition = 'opacity 0.8s ease';
        wmStroke.style.opacity = '0';
      }
    }, 2900);

    // fase 4 — tagline aparece
    setTimeout(() => { tag.classList.add('show'); }, 3400);

    // fase 5 — splash sai
    setTimeout(() => { dismissSplash(); }, 4400);
  }

  function dismissSplash() {
    const splash = document.getElementById('splash');
    document.body.classList.remove('no-scroll');
    document.body.classList.remove('splash-active');
    splash.classList.add('fade-out');
    if (typeof window.runHeroReveal === 'function') window.runHeroReveal();
    setTimeout(() => splash.remove(), 700);
  }

  /* 4. TOGGLES */
  function toggleTheme() {
    document.documentElement.classList.add('theme-transitioning');
    html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 300);
  }
  function toggleLang() {
    setLang(html.getAttribute('data-lang') === 'pt' ? 'en' : 'pt');
  }
  function toggleMenu() {
    const menu = document.getElementById('mobileNav');
    const burger = document.getElementById('hamburger');
    menu.classList.toggle('open');
    burger.classList.toggle('open');
    const isOpen = menu.classList.contains('open');
    burger.setAttribute('aria-expanded', isOpen);
    burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  // fechar menu ao clicar em link mobile
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileNav').classList.remove('open');
      document.getElementById('hamburger').classList.remove('open');
    });
  });

  /* 5. NAV shadow + scroll progress */
  window.addEventListener('scroll', () => {
    document.getElementById('nav').style.boxShadow =
      window.scrollY > 20 ? '0 4px 40px rgba(0,0,0,0.25)' : 'none';
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct  = docH > 0 ? (window.scrollY / docH) * 100 : 0;
    document.getElementById('scrollProgress').style.width = pct + '%';
  });

  /* 6. TITLE TAB */
  document.addEventListener('visibilitychange', () => {
    const lang = html.getAttribute('data-lang');
    document.title = document.visibilityState === 'visible'
      ? 'ByLara — Lucas Lara'
      : lang === 'pt' ? 'Volte logo! 👋' : 'Come back! 👋';
  });

  /* 7. GSAP — hero reveal + scroll-triggered section reveals (respeita prefers-reduced-motion) */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    function runHeroReveal() {
      const hero = document.querySelector('#home .hero-inner');
      if (!hero) return;
      const els = hero.querySelectorAll('.hero-label, .hero-brand, .hero-byline, .hero-role, .hero-tagline, .hero-desc, .hero-cta, .hero-visual');
      gsap.from(els, { y: 28, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', delay: 0.05 });
    }

    function initGsapScrollReveals() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const fromY = 36;
      const fromOpacity = 0;
      const duration = 0.65;
      const ease = 'power2.out';
      const start = 'top 88%';

      gsap.from('.about-heading', { scrollTrigger: { trigger: '#bio', start }, y: fromY, opacity: fromOpacity, filter: 'blur(4px)', duration, ease, clearProps: 'filter' });
      gsap.from('.about-photo-wrap', { scrollTrigger: { trigger: '#bio', start }, y: fromY, opacity: fromOpacity, filter: 'blur(4px)', duration, ease, delay: 0.08, clearProps: 'filter' });
      gsap.from('.skill-tag', { scrollTrigger: { trigger: '.skills-grid', start }, y: 20, opacity: fromOpacity, duration: 0.5, stagger: 0.05, ease });

      gsap.from('.services-heading', { scrollTrigger: { trigger: '#services', start }, y: fromY, opacity: fromOpacity, filter: 'blur(4px)', duration, ease, clearProps: 'filter' });
      /* service-card sem GSAP: evita cards ficarem invisíveis (opacity 0); só o título faz reveal */

      gsap.from('.projects-header', { scrollTrigger: { trigger: '#projects', start }, y: fromY, opacity: fromOpacity, filter: 'blur(4px)', duration, ease, clearProps: 'filter' });
      gsap.from('.projects-carousel-wrap', { scrollTrigger: { trigger: '#projects', start }, y: 28, opacity: fromOpacity, filter: 'blur(4px)', duration, delay: 0.06, ease, clearProps: 'filter' });
      gsap.from('.project-soon-card', { scrollTrigger: { trigger: '#projects', start }, y: 24, opacity: fromOpacity, duration: 0.55, ease });

      gsap.from('.contact-heading', { scrollTrigger: { trigger: '#contact', start }, y: fromY, opacity: fromOpacity, filter: 'blur(4px)', duration, ease, clearProps: 'filter' });
      gsap.from('.contact-card', { scrollTrigger: { trigger: '#contact', start }, y: 28, opacity: fromOpacity, filter: 'blur(4px)', duration, delay: 0.1, ease, clearProps: 'filter' });
      gsap.from('.contact-options', { scrollTrigger: { trigger: '#contact', start }, y: 20, opacity: fromOpacity, duration: 0.5, stagger: 0.06, ease });
    }
    window.runHeroReveal = runHeroReveal;
    window.initGsapScrollReveals = initGsapScrollReveals;
  }

  /* renderiza os cards dinamicamente */
  function renderProjects() {
    const container = document.getElementById('projects-list');
    if (!container) return;

    let slides = '';

    // slides de projetos reais
    projects.forEach(p => {
      const statusBadge = p.status === 'wip'
        ? `<span style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;background:rgba(255,190,0,0.1);color:#febc2e;border:1px solid rgba(255,190,0,0.25);padding:3px 10px;border-radius:100px;">
            <span class="pt">⚡ em andamento</span><span class="en">⚡ in progress</span>
           </span>`
        : p.status === 'live'
        ? `<span style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;background:rgba(40,200,100,0.1);color:#28c864;border:1px solid rgba(40,200,100,0.25);padding:3px 10px;border-radius:100px;">
            <span class="pt">● ao vivo</span><span class="en">● live</span>
           </span>`
        : '';

      const ctaLink = p.status === 'live' && p.url
        ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="project-link">
            <span class="pt">Ver site ao vivo</span><span class="en">View live site</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
           </a>`
        : p.contact
        ? `<a href="${p.contact.url}" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            ${p.contact.handle}
           </a>`
        : '';

      slides += `
      <div class="carousel-slide">
        <div class="project-featured">
          <div class="project-mockup">
            <div class="browser-frame">
              <div class="browser-bar">
                <div class="browser-dots">
                  <div class="browser-dot" style="background:#ff5f57"></div>
                  <div class="browser-dot" style="background:#febc2e"></div>
                  <div class="browser-dot" style="background:#28c840"></div>
                </div>
                <div class="browser-url">${p.mockupUrl}</div>
              </div>
              <div class="browser-content">
                <div class="mock-hero-bar" style="background:linear-gradient(135deg,#1a0a0f,${p.mockupAccent});position:relative;overflow:hidden;">
                  <span class="mock-hero-text">${p.mockupName}</span>
                  ${p.status === 'wip' ? '<div style="position:absolute;top:6px;right:8px;font-size:9px;letter-spacing:0.12em;text-transform:uppercase;background:rgba(255,190,0,0.15);color:#febc2e;border:1px solid rgba(255,190,0,0.3);padding:2px 8px;border-radius:100px;">em andamento</div>' : ''}
                </div>
                <div class="mock-row">
                  <div class="mock-card"><div class="mock-line accent"></div><div class="mock-line"></div><div class="mock-line short"></div></div>
                  <div class="mock-card"><div class="mock-line accent"></div><div class="mock-line"></div><div class="mock-line short"></div></div>
                  <div class="mock-card"><div class="mock-line accent"></div><div class="mock-line"></div><div class="mock-line short"></div></div>
                </div>
                <div class="mock-row">
                  <div class="mock-card" style="flex:2;"><div class="mock-line" style="height:40px;background:rgba(200,80,100,0.15);border-radius:6px;"></div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="project-info">
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
              <div class="project-category">
                <span class="pt">${p.categoryPT}</span><span class="en">${p.categoryEN}</span>
              </div>
              ${statusBadge}
            </div>
            <h3 class="project-title">${p.name}</h3>
            <p class="project-problem">
              <span class="pt">${p.descPT}</span>
              <span class="en">${p.descEN}</span>
            </p>
            <div class="project-impact">
              <div class="project-impact-label">
                <span class="pt">${p.status === 'live' ? p.impactLabelLivePT : p.impactLabelWipPT}</span>
                <span class="en">${p.status === 'live' ? p.impactLabelLiveEN : p.impactLabelWipEN}</span>
              </div>
              <div class="project-impact-text" style="font-size:13px;font-weight:400;font-family:'DM Mono',monospace;">
                <span class="pt">${p.status === 'live' ? p.impactLivePT : p.impactWipPT}</span>
                <span class="en">${p.status === 'live' ? p.impactLiveEN : p.impactWipEN}</span>
              </div>
            </div>
            <div class="project-footer">
              <div class="project-techs">
                ${p.tags.map(t => `<span class="project-tech">${t}</span>`).join('')}
              </div>
              ${ctaLink}
            </div>
          </div>
        </div>
      </div>`;
    });

    // slide "em breve" — aparece enquanto tiver menos de 3 projetos
    if (projects.length < 3) {
      slides += `
      <div class="carousel-slide">
        <div class="project-featured project-placeholder">
          <div class="project-mockup placeholder-mockup">
            <div class="placeholder-skeleton">
              <div class="ph-bar"></div>
              <div class="ph-row">
                <div class="ph-block"></div>
                <div class="ph-block"></div>
                <div class="ph-block"></div>
              </div>
              <div class="ph-wide"></div>
            </div>
          </div>
          <div class="project-info">
            <div style="display:flex;align-items:center;gap:10px;">
              <span class="soon-badge"><span class="pt">em breve</span><span class="en">coming soon</span></span>
            </div>
            <div class="soon-title"><span class="pt">Próximo cliente</span><span class="en">Next client</span></div>
            <p class="project-problem">
              <span class="pt">Novo case em desenvolvimento. Acompanhe pelo LinkedIn para não perder.</span>
              <span class="en">New case in development. Follow on LinkedIn so you don't miss it.</span>
            </p>
            <div class="project-footer">
              <div class="project-techs"></div>
              <a href="https://linkedin.com/in/lucasmlara" target="_blank" rel="noopener noreferrer" class="project-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>`;
    }

    const totalSlides = projects.length + (projects.length < 3 ? 1 : 0);

    let dotsHtml = '';
    for (let i = 0; i < totalSlides; i++) {
      dotsHtml += `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`;
    }

    const controlsHtml = totalSlides > 1 ? `
    <div class="carousel-controls">
      <button class="carousel-btn" id="carouselPrev" aria-label="Projeto anterior">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="carousel-dots">${dotsHtml}</div>
      <button class="carousel-btn" id="carouselNext" aria-label="Próximo projeto">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>` : '';

    container.innerHTML = `
    <div class="projects-carousel-wrap">
      <div class="projects-carousel-track">
        <div class="projects-carousel" id="projectsCarousel">${slides}</div>
      </div>
      ${controlsHtml}
    </div>
    <div class="projects-soon">
      <div class="project-soon-card">
        <span class="soon-badge"><span class="pt">em breve</span><span class="en">coming soon</span></span>
        <div class="soon-title"><span class="pt">Quer ser o próximo?</span><span class="en">Want to be next?</span></div>
        <p class="soon-desc">
          <span class="pt">Seu negócio pode ser o próximo case aqui. Me chama e a gente conversa.</span>
          <span class="en">Your business could be the next case here. Reach out and let's talk.</span>
        </p>
        <a href="#contact" class="btn-primary" style="font-size:12px;padding:10px 20px;">
          <span class="pt">Quero um site →</span><span class="en">I want a site →</span>
        </a>
      </div>
    </div>`;

    // carousel logic
    if (totalSlides > 1) {
      let current = 0;
      const carousel = document.getElementById('projectsCarousel');
      const dots = container.querySelectorAll('.carousel-dot');

      function goTo(idx) {
        current = ((idx % totalSlides) + totalSlides) % totalSlides;
        carousel.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
      }

      document.getElementById('carouselPrev').addEventListener('click', () => goTo(current - 1));
      document.getElementById('carouselNext').addEventListener('click', () => goTo(current + 1));
      dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

      // swipe support
      let startX = 0;
      const track = carousel.parentElement;
      track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
      track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
      });
    }

    // re-aplica hover do cursor nos novos elementos
    container.querySelectorAll('a, button, .project-featured').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  window.addEventListener('load', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const splashSeen = sessionStorage.getItem('splashSeen');
    if (prefersReducedMotion || splashSeen) {
      dismissSplash();
    } else {
      sessionStorage.setItem('splashSeen', '1');
      document.body.classList.add('splash-active');
      runLogoAnimation();
    }
    renderProjects();
    if (typeof window.initGsapScrollReveals === 'function') window.initGsapScrollReveals();
  });


  /* ── FAQ ACCORDION ── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');

    const toggle = () => {
      const isOpen = item.classList.contains('is-open');
      item.classList.toggle('is-open', !isOpen);
      answer.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
    };

    btn.addEventListener('click', toggle);
    btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });

  /* ── CURSOR ── */
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, summary, .service-card, .project-featured').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '0.6'; });

  /* ── WHATSAPP FLOAT — lift above footer ── */
  const waBtn = document.querySelector('.whatsapp-float');
  const footerEl = document.querySelector('footer');
  if (waBtn && footerEl) {
    new IntersectionObserver(([entry]) => {
      waBtn.style.bottom = entry.isIntersecting
        ? (footerEl.offsetHeight + 16) + 'px'
        : '24px';
    }, { threshold: 0 }).observe(footerEl);
  }

