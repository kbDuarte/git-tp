# Laboratório de Gestão de Código-Fonte — Git e GitHub

**Aluno:** Kauan Borges Duarte  
**Repositório:** [kbDuarte/git-tp](https://github.com/kbDuarte/git-tp)  
**Disciplina:** Engenharia de Software  
**Projeto demonstrativo:** DevLab — landing page estática em HTML, CSS e JavaScript.

## Objetivo

Praticar os principais fluxos de controle de versão: ciclo de commit, sincronização remota, branches, Pull Requests, revisão, resolução de conflitos e reversão segura.

O roteiro de referência é o [Laboratório — Gerenciamento de Código-Fonte com Git e GitHub](https://github.com/EngenhariaSoftwareAtual/gestao-codigo-fonte).

## Estrutura

- `index.html` — página principal da DevLab.
- `style.css` — identidade visual responsiva.
- `script.js` — pequenos comportamentos da interface.
- `docs/PLANO-DE-EVIDENCIAS.md` — checklist das evidências solicitadas.
- `evidencias/` — local para guardar capturas reais do trabalho.

## Como visualizar

Abra `index.html` diretamente no navegador. Não há dependências de build; a fonte DM Sans/Manrope é carregada externamente, com fontes alternativas caso não haja conexão.

## Fluxo de trabalho recomendado

1. Sincronize a branch principal antes de iniciar: `git switch main` e `git pull origin main`.
2. Crie uma branch descritiva para cada mudança: `git switch -c feature/nome-da-mudanca`.
3. Revise o que será registrado com `git status` e `git diff`.
4. Faça commits pequenos e claros.
5. Envie a branch e abra um Pull Request para `main`.
6. Revise as alterações, registre comentários reais e só então integre.
7. Use `git revert` para desfazer mudanças já compartilhadas.

## Pull Requests e histórico do exercício

- [PR #1 — Adiciona seção Sobre](https://github.com/kbDuarte/git-tp/pull/1) — merged.
- [PR #2 — Adiciona link Sobre ao menu](https://github.com/kbDuarte/git-tp/pull/2) — merged.
- [PR #3 — Tentativa com branch desatualizada](https://github.com/kbDuarte/git-tp/pull/3) — fechado sem merge após identificar conflitos.
- [PR #4 — Adiciona seção Contato](https://github.com/kbDuarte/git-tp/pull/4) — merged após reaplicar a alteração sobre a `main` atual.

## Estado das evidências

O plano está em [docs/PLANO-DE-EVIDENCIAS.md](docs/PLANO-DE-EVIDENCIAS.md) e o registro de execução em [docs/REGISTRO-DE-EXECUCAO.md](docs/REGISTRO-DE-EXECUCAO.md). As capturas precisam ser feitas a partir das telas reais após cada etapa. Nenhuma captura foi anexada automaticamente; ações de dupla e revisões por colega continuam pendentes de execução real.

## Limitações importantes

O roteiro de referência pressupõe duas pessoas, duas cópias locais e colaboração por convite. Uma única conta pode preparar o site e branches, mas não substitui as evidências de duas pessoas executando `fetch`, `pull`, revisão e aprovação. Se a disciplina exigir a dupla, convide o colega e documente a participação efetiva.
