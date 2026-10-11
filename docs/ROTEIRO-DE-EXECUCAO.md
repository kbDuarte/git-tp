# Roteiro para terminar a atividade

Repositório de trabalho atual: https://github.com/kbDuarte/git-tp  
Aluno A: Kauan Borges Duarte  
Aluno B: Milla — GitHub: https://github.com/milla444  
Roteiro de referência: https://github.com/EngenhariaSoftwareAtual/gestao-codigo-fonte

Este documento organiza o que falta executar. Siga as etapas no computador e só marque como concluída depois de verificar o resultado. As capturas precisam mostrar a execução real; não copie saídas de exemplo para usar como prova.

## 0. Confirmar o repositório correto

O roteiro do professor pede que o Aluno A faça um fork do repositório modelo `EngenhariaSoftwareAtual/scm-modelo`, convide o Aluno B e que ambos trabalhem nesse repositório compartilhado. O repositório atual `kbDuarte/git-tp` é o repositório de trabalho já preparado, mas confirme se ele satisfaz a exigência de fork. Se o professor exige o fork literal, será necessário criar o fork correto e repetir/aplicar nele as mudanças.

## 1. Preparar o computador

No terminal do VS Code, confira:

```bash
git --version
git config user.name
git config user.email
```

Configure nome e e-mail localmente dentro do repositório, se necessário:

```bash
git config user.name "Kauan Borges Duarte"
git config user.email "seu-email-cadastrado-no-GitHub"
git config pull.rebase false
```

Use o e-mail associado à sua conta GitHub. Não mostre tokens nem senhas nos prints.

## 2. Convidar Milla como colaboradora

No repositório que será entregue, abra **Settings → Collaborators → Add people**, pesquise `milla444` e envie o convite. Milla precisa aceitar o convite pela conta dela. Depois tire a captura da lista de colaboradores com a conta dela visível. O arquivo de evidências não substitui o convite real.

## 3. Clonar e conferir o remoto

Se ainda não houver clone local:

```bash
git clone https://github.com/kbDuarte/git-tp.git
cd git-tp
git remote -v
git status
```

Se a pasta já estiver clonada, entre nela e execute apenas os três últimos comandos. Não clone por cima de uma pasta existente. Se o fork correto do professor for criado, use a URL desse fork no lugar da URL acima.

## 4. Registrar uma alteração local

Abra o projeto no VS Code e faça uma pequena alteração útil no `index.html`. Depois:

```bash
git status
git diff
git add index.html
git commit -m "Ajusta texto da página"
git push origin main
git log --oneline -5
```

Use uma alteração que você queira manter. Não faça commits vazios só para produzir uma captura.

## 5. Demonstrar fetch e pull

```bash
git fetch origin
git status
git log --oneline --graph --all -10
```

Para demonstrar o recebimento de uma atualização, combine com Milla que ela faça uma alteração real e envie para a branch compartilhada; depois execute:

```bash
git pull origin main
git status
```

Se não houver novos commits remotos, o pull pode informar que a branch já está atualizada. Isso registra o comando, mas não demonstra uma nova alteração recebida.

## 6. Demonstrar merge automático

Combine com Milla para que duas alterações diferentes sejam feitas em paralelo sem editar as mesmas linhas. Depois busque as referências e integre conforme o roteiro do laboratório:

```bash
git fetch origin
git log --oneline --graph --all
```

Se for preciso integrar uma branch local, confirme qual branch contém a alteração antes de usar `git merge <nome-da-branch>`. Ao final, registre o histórico com bifurcação e commit de merge.

## 7. Criar e resolver um conflito de CSS

Faça isso numa branch de teste, nunca diretamente na `main`. Antes:

```bash
git status
git switch main
git pull origin main
git switch -c teste/conflito-css
```

Combine com Milla para que duas alterações diferentes atinjam a mesma linha de `style.css`. Depois que os históricos divergirem, tente integrar a outra branch. Quando o Git apontar conflito, abra o arquivo e decida qual estilo final manter. Apague os marcadores `<<<<<<<`, `=======` e `>>>>>>>`.

Depois de conferir o resultado:

```bash
git status
git diff
git add style.css
git commit -m "Resolve conflito de estilos"
git push -u origin teste/conflito-css
```

Os comandos exatos para provocar o conflito dependem da ordem das alterações. Se a saída for diferente, pare e confira `git status` antes de continuar.

## 8. Branch, Pull Request e revisão real

- Crie uma branch a partir da `main` atual.
- Faça uma alteração pequena, commit e push.
- Abra um PR para `main`.
- Solicite revisão de Milla.
- Milla deve ler **Files changed**, deixar um comentário específico e aprovar (ou pedir ajustes).
- Responda ao comentário e integre o PR depois da revisão.
- Atualize a cópia local com `git switch main` e `git pull origin main`.

Não simule o usuário da colega nem faça aprovação em nome dela.

## 9. PR com conflito

Para mostrar o conflito antes e a resolução depois no mesmo PR, duas branches precisam alterar a mesma região de `index.html`; uma delas entra primeiro na `main`, e a outra fica divergente. Abra o PR da segunda branch, capture o aviso de conflito, resolva o conflito na branch proposta, faça push e confira que o aviso desapareceu. Depois da revisão real, integre o PR e registre a tela final.

## 10. Testar git revert

Escolha um commit recente de uma alteração simples que já foi enviada ao GitHub. Anote o hash real:

```bash
git log --oneline -10
git revert <hash-do-commit-de-teste>
git push origin main
git log --oneline -5
```

Substitua o texto entre sinais de menor/maior pelo hash real. O `revert` cria um novo commit que desfaz a mudança selecionada sem apagar o commit anterior. Confira cuidadosamente o que será revertido antes de confirmar.

## 11. Conferência final

```bash
git switch main
git pull origin main
git status
git log --oneline --graph --all
```

Abra `index.html` no navegador e confira a página. Salve as capturas reais na pasta `evidencias/`, usando a numeração de `docs/PLANO-DE-EVIDENCIAS.md`. Preencha `docs/ENTREGA-EVIDENCIAS.md` e exporte o documento individual como `SCM_Kauan_Borges_Duarte.pdf`.

**Atenção:** a atividade exige colaboração e revisão reais. Os documentos deixam a entrega organizada, mas as etapas locais, o convite/aceite, o conflito, o revert e as capturas precisam ser executados.
