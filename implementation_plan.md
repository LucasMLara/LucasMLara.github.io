# Implementation Plan — Apply Copy Audit ByLara

This plan outlines the steps to apply the technical and copywriting improvements suggested in the [copy_audit_bylara.md](file:///c:/Users/PC/Documents/LucasMLara.github.io/copy_audit_bylara.md) file to the Lucas Lara Portfolio. The goal is to shift the positioning from a "Front-end Developer" to a "Result-driven Specialist in Site Conversion and AI".

## Proposed Changes

### 1. Metadata & SEO
- **File:** [index.html](file:///c:/Users/PC/Documents/LucasMLara.github.io/index.html)
- Update `<title>` to `Site que Gera Clientes | ByLara — Lucas Lara | Serra, ES`.
- Update `<meta name="description">` with the new conversion-focused copy (PT and EN).
- Update Open Graph and Twitter meta tags.
- Update JSON-LD `jobTitle` and `@type`.

### 2. Hero Section
- **File:** [index.html](file:///c:/Users/PC/Documents/LucasMLara.github.io/index.html)
- Change label above H1 to "Resultado. Não portfólio."
- Update H2 tagline to "Não vendo site. Vendo clientes novos para o seu negócio."
- Update Hero description to focus on the pain point of losing clients.
- Update CTAs: "Quero atrair mais clientes →" and "Ver casos reais".
- Update floating experience badge to "3 clientes · resultados reais".

### 3. About Section
- **File:** [index.html](file:///c:/Users/PC/Documents/LucasMLara.github.io/index.html)
- Update H2 to "Não sou desenvolvedor. Sou o cara que faz o seu negócio crescer online."
- Rewrite bio paragraphs to be more result-oriented.
- **[DELETE]** Remove the tech stacks list (HTML, React, etc.) as per audit recommendation ("Technology doesn't sell to final clients").
- Replace with the suggested result-line: "Seus clientes não vão te perguntar qual tecnologia eu usei. Vão perguntar: 'como você achou esse cara?'"

### 4. Services Section
- **File:** [index.html](file:///c:/Users/PC/Documents/LucasMLara.github.io/index.html)
- Update H2 to "O que você ganha trabalhando comigo."
- Rewrite all 5 service cards (Custom Site, AI Agent, WhatsApp, SEO, Maintenance) with the new copy.
- Update service tags to business-friendly terms like "High conversion", "Google-friendly".
- Update the "Need something different?" card CTA to "Contar meu desafio →".

### 5. Projects/Cases Section
- **File:** [script.js](file:///c:/Users/PC/Documents/LucasMLara.github.io/script.js)
- Update `projects` array with the new persuasive summaries and descriptions for:
    - Teuller Moraes Adv
    - Instituto Mariana Menegardo
    - Jazz Lourenço
- Focus descriptions on Problem -> Solution -> Result.

### 6. Contact Section & Global
- **File:** [index.html](file:///c:/Users/PC/Documents/LucasMLara.github.io/index.html)
- Update H2 to "Pronto para parar de perder clientes online?"
- Update description and form card titles/CTAs.
- Update "What happens next" list with the new copy.
- **File:** [index.html](file:///c:/Users/PC/Documents/LucasMLara.github.io/index.html) & [script.js](file:///c:/Users/PC/Documents/LucasMLara.github.io/script.js) (if needed)
- Update all WhatsApp links to include pre-filled messages based on context.

### 7. New Section: FAQ
- **File:** [index.html](file:///c:/Users/PC/Documents/LucasMLara.github.io/index.html) & [style.css](file:///c:/Users/PC/Documents/LucasMLara.github.io/style.css)
- Add a new FAQ section before the contact section to address common objections (price, time, tech knowledge).

## Verification Plan

### Automated Tests
- I will use `grep` to verify that old strings (like "Front-end Developer") are replaced by the new ones in the final files.
- Validate the HTML structure for the new FAQ section.

### Manual Verification
- **Visual Check:** Use the browser tool to verify the layout remains balanced with the new text lengths.
- **Link Check:** Click on CTAs and WhatsApp buttons to ensure they lead to the correct anchors or URLs with the correct pre-filled messages.
- **Responsiveness:** Check if the new FAQ section and longer descriptions don't break the mobile layout.
