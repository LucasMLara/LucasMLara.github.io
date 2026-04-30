# Onboarding — Salão Dornelles
## Questionário completo para reunião com o cliente

> **Como usar**: levar para a reunião e preencher ao vivo. Cada item tem uma nota de onde a informação vai (Supabase, prompt, config n8n, infra). Nenhuma dessas respostas vai ficar gravada no prompt do agente — tudo que é dinâmico vai no Supabase.

---

## 1. Dados do estabelecimento

| # | Pergunta | Resposta | Destino |
|---|----------|----------|---------|
| 1.1 | Nome oficial do salão | | Supabase / KB |
| 1.2 | Endereço completo (rua, número, bairro, cidade) | | Supabase / KB |
| 1.3 | Link do Google Maps | | Supabase / KB |
| 1.4 | Instagram / redes sociais (se houver) | | KB |
| 1.5 | Site (se houver) | | KB |
| 1.6 | O salão tem estacionamento? Como é o acesso? | | KB |
| 1.7 | Qual o número do WhatsApp principal do salão (produção)? | | Config n8n |
| 1.8 | Tem número de WhatsApp de teste (para homologação antes de ligar em produção)? | | Config n8n |

---

## 2. Horários de funcionamento

| # | Pergunta | Resposta | Destino |
|---|----------|----------|---------|
| 2.1 | Quais dias da semana o salão funciona? | | Supabase / config |
| 2.2 | Horário de abertura e fechamento (por dia, se diferente) | | Supabase / config |
| 2.3 | Tem intervalo de almoço? Qual horário? | | Supabase / config |
| 2.4 | Funciona em feriados? Com restrições? | | KB |
| 2.5 | Qual a antecedência mínima para agendar? (ex: mínimo 2h antes) | | Config n8n / prompt |
| 2.6 | Qual a antecedência máxima? (ex: máximo 30 dias no futuro) | | Config n8n |
| 2.7 | Quanto tempo de folga deixar entre atendimentos? (ex: 15 min de limpeza/troca) | | Config n8n |

---

## 3. Profissionais

> Estas informações vão para o **Supabase** (tabela `profissionais`) — o agente consulta via ferramenta. Não entram no prompt.

Para cada profissional:

| Campo | Prof. 1 | Prof. 2 | Prof. 3 | ... |
|-------|---------|---------|---------|-----|
| Nome completo | | | | |
| Apelido / como o agente vai chamá-lo | | | | |
| Slug/ID (ex: "cesar", "julio") | | | | |
| Está ativo atualmente? | | | | |
| Dias que trabalha (se diferente do salão) | | | | |
| Horário próprio (se diferente do salão) | | | | |

> **Nota**: não existe Google Calendar por profissional. O salão tem **um único Calendar** (ver seção 10). O `slug/ID` do profissional é gravado em cada evento criado — é assim que o sistema sabe quem está ocupado em cada slot.

---

## 4. Serviços e precificação

> Estas informações vão para o **Supabase** (tabelas `servicos` + `profissional_servicos`) — o agente consulta via ferramenta. Não entram no prompt.

Para cada serviço:

| Campo | Serv. 1 | Serv. 2 | Serv. 3 | ... |
|-------|---------|---------|---------|-----|
| Nome do serviço | | | | |
| Categoria (corte, coloração, estética...) | | | | |
| Duração (em minutos) | | | | |
| Preço (R$) | | | | |
| Quem faz? (nome dos profissionais) | | | | |
| Tem variação de preço por profissional? | | | | |

**Perguntas complementares:**

| # | Pergunta | Resposta |
|---|----------|----------|
| 4.1 | Tem serviços combinados (ex: corte + barba)? Quais e qual duração/preço? | |
| 4.2 | Tem serviços com preço variável (ex: coloração por tamanho de cabelo)? Como o agente deve lidar? | |
| 4.3 | Algum serviço requer consulta prévia antes de agendar? | |
| 4.4 | Tem serviços que exigem materiais antecipados (ex: levar foto de referência)? | |

---

## 5. Políticas do salão

| # | Pergunta | Resposta | Destino |
|---|----------|----------|---------|
| 5.1 | Qual a política de cancelamento? (ex: cancelar até X horas antes) | | KB + prompt |
| 5.2 | Tem taxa de cancelamento tardio ou no-show? | | KB + prompt |
| 5.3 | O agente pode reagendar? Com quais regras? | | Prompt |
| 5.4 | Quantas vezes o cliente pode reagendar o mesmo horário? | | Prompt |
| 5.5 | Em caso de atraso do cliente, qual o tempo de tolerância? | | KB |
| 5.6 | O salão aceita walk-in (sem agendamento)? O agente deve mencionar isso? | | KB |

---

## 6. Pagamento e confirmação

| # | Pergunta | Resposta | Destino |
|---|----------|----------|---------|
| 6.1 | Quais formas de pagamento são aceitas? (PIX, cartão, dinheiro...) | | KB |
| 6.2 | O pagamento é feito no salão (pós-atendimento) ou antecipado? | | KB + prompt |
| 6.3 | Exige depósito/sinal para confirmar agendamento? Qual valor? | | Prompt |
| 6.4 | Tem chave PIX? Qual? | | KB |
| 6.5 | Emite nota fiscal / recibo? | | KB |
| 6.6 | Tem programa de fidelidade ou pacotes (ex: 10 cortes com desconto)? | | KB |

---

## 7. Persona do agente

| # | Pergunta | Resposta | Destino |
|---|----------|----------|---------|
| 7.1 | Como o agente vai se chamar? (ex: "Ana", "Bella", "Carol") | | Prompt |
| 7.2 | Tom de comunicação: formal, informal, descontraído, profissional? | | Prompt |
| 7.3 | O agente deve se apresentar como humano ou como assistente virtual? | | Prompt |
| 7.4 | Tem alguma frase de boas-vindas que o salão já usa? | | Prompt |
| 7.5 | Há assuntos que o agente NÃO deve falar? (ex: não comentar sobre preços de concorrentes) | | Prompt |
| 7.6 | O agente deve oferecer promoções proativamente ou só se perguntarem? | | Prompt |

---

## 8. Fluxo de atendimento e escalonamento humano

| # | Pergunta | Resposta | Destino |
|---|----------|----------|---------|
| 8.1 | Quem é o responsável que vai receber notificações de agendamentos? (nome) | | Config n8n |
| 8.2 | Tem grupo de WhatsApp para receber notificações? (ou é individual?) | | Config n8n |
| 8.3 | ID do grupo de WhatsApp para notificações (se houver) | | Config n8n |
| 8.4 | Em quais situações o agente deve chamar o humano? (ex: reclamação, dúvida fora do escopo, pedido especial) | | Prompt |
| 8.5 | Quando o responsável entra no chat, o agente deve ficar quieto por quanto tempo? (padrão: 12 minutos) | | Config n8n |
| 8.6 | O responsável quer receber um resumo quando o agente escalar? (nome, serviço, data sugerida) | | Prompt |

---

## 9. Base de conhecimento (KB — Supabase)

> Estas informações alimentam o Supabase (`knowledge_base`, `client_id = 'Dornelles'`). O agente consulta via tool `consultar_base` — nunca ficam no prompt.

| # | Pergunta | Resposta |
|---|----------|----------|
| 9.1 | Tem algum FAQ que o cliente normalmente pergunta? (listar as 5–10 perguntas mais comuns) | |
| 9.2 | O salão tem diferenciais que o agente deve destacar quando perguntado? | |
| 9.3 | Tem promoções ativas agora? Quais? | |
| 9.4 | Tem alguma política específica que o cliente precisa saber antes de vir? (ex: não atender crianças, exige máscara...) | |
| 9.5 | Tem algum produto ou linha que o salão usa e pode ser destacado? | |
| 9.6 | Como funciona o estacionamento / acesso ao salão? | |

---

## 10. Google Calendar

> O salão usa **um único Google Calendar** para todos os profissionais. Cada evento registra o profissional responsável no título (ex: "Corte — César") e em um campo oculto (`extendedProperties`). O sistema filtra por esse campo para verificar disponibilidade por profissional.

| # | Pergunta | Resposta | Destino |
|---|----------|----------|---------|
| 10.1 | O salão já tem um Google Calendar para agendamentos? | | Config n8n |
| 10.2 | Se sim, consegue compartilhar o ID do Calendar? (Settings → Integrate calendar → Calendar ID) | | Config n8n |
| 10.3 | Se não, vamos criar um — o dono tem acesso a uma conta Google para isso? | | Config n8n |
| 10.4 | Eventos já existentes no Calendar devem bloquear slots? (ex: compromisso pessoal, folga de profissional) | | Config / Prompt |
| 10.5 | Quando um agendamento é criado, o cliente deve receber convite do Google Calendar? | | Config n8n |
| 10.6 | Qual o endereço do salão que deve aparecer nos eventos? | | Config n8n |
| 10.7 | O dono quer ver todos os agendamentos no Calendar ou prefere um Calendar separado para isso? | | Config n8n |

---

## 11. Infraestrutura técnica (preencher após reunião — perguntar só se necessário)

| # | Item | Resposta |
|---|------|----------|
| 11.1 | Instância Evolution API: mesma da ByLara/IMM ou nova? | |
| 11.2 | Redis: mesmo servidor ou separado? | |
| 11.3 | Supabase: mesmo projeto (nova tabela `client_id = 'Dornelles'`) ou projeto novo? | |
| 11.4 | Conta Google / service account para o Google Calendar API | |
| 11.5 | Instance name da Evolution API | |

---

## 12. Follow-up e lembretes (padrão — confirmar se o cliente quer)

| # | Pergunta | Resposta | Destino |
|---|----------|----------|---------|
| 12.1 | Quer follow-up automático para leads que pararam de responder? (padrão: 30min → 4h → 24h) | | Config n8n |
| 12.2 | Quer lembretes de confirmação antes do atendimento? (padrão: 24h antes e 2h antes) | | Config n8n |
| 12.3 | Os lembretes devem pedir confirmação ativa do cliente? (ex: "Confirme com SIM ou NÃO") | | Prompt |
| 12.4 | Se o cliente não confirmar, o que acontece? (cancela automaticamente? Avisa o responsável?) | | Prompt / Config |

---

## Decisões de arquitetura — registrar antes de implementar

> Preencher após reunião. Define o que vai e o que não vai no sprint1.

| Item | Decisão |
|------|---------|
| Profissionais e serviços: Supabase ou CONFIG_SALAO (JSON hardcoded) | **Supabase** — agente consulta via tool. Zero tokens de catálogo no prompt. |
| Tool de catálogo: separar `consultar_profissionais` e `consultar_agenda` ou uma única? | A definir |
| Agendamento presencial: apenas Google Calendar ou também planilha de controle? | A definir |
| Reagendamento: agente pode remendar diretamente ou escalona para humano? | A definir |
| Qualificação de venda antes do agendamento? | A definir — salão é diferente da ByLara, cliente já quer agendar |

---

## Checklist de entregáveis pós-reunião

- [ ] Tabela de profissionais preenchida (para popular Supabase — sem calendarId individual)
- [ ] Tabela de serviços preenchida (para popular Supabase)
- [ ] Relação profissional ↔ serviço mapeada
- [ ] Google Calendar ID **do salão** (único — ou acesso para criar)
- [ ] Grupo de WhatsApp para notificações criado e ID copiado
- [ ] Número de WhatsApp de teste confirmado
- [ ] Nome e tom da persona definidos
- [ ] Políticas (cancelamento, pagamento) redigidas para KB
- [ ] FAQ mínimo (5 perguntas) redigido para KB
