# Roteiro para terminar a atividade

Repositório atual: https://github.com/kbDuarte/git-tp

Este roteiro organiza o que falta executar. Faça os passos na ordem e só registre como concluído depois de verificar o resultado. Os comandos abaixo são para executar no seu computador, no terminal do VS Code.

## 1. Preparar o computador

Confira as ferramentas:

```bash
git --version
git config user.name
git config user.email
```

Configure nome/e-mail localmente dentro do repositório se ainda não estiverem configurados:

```bash
git config user.name "Seu nome completo"
git config user.email "seu-email-cadastrado-no-GitHub"
git config pull.rebase false
```

Use o e-mail associado à sua conta GitHub. Não compartilhe tokens nem senhas em prints.

## 2. Clonar e conferir o remoto

Escolha uma pasta onde possa guardar o projeto. Se ainda não houver clone, execute:

```bash
git clone https://github.com/kbDuarte/git-tp.git
cd git-tp
git remote -v
git status
```

Se a pasta já estiver clonada, entre nela e execute apenas os três últimos comandos. Não tente clonar por cima de uma pasta existente.

## 3. Registrar o primeiro ciclo local

Abra o projeto no VS Code e altere uma frase simples no `index.html`, por exemplo o texto de apresentação. Depois:

```bash
git status
git diff
git add index.html
git commit -m "Ajusta texto da página"
git push origin main
git log --oneline -5
```

Se a alteração não fizer sentido para o trabalho, edite um texto real que você queira manter. Não faça commits vazios apenas para produzir print.

## 4. Praticar fetch e pull

Primeiro, registre o estado atual e busque as referências do GitHub:

```bash
git fetch origin
git status
git log --oneline --graph --all -10
```

Para demonstrar `git pull` com uma atualização de verdade, faça uma alteração simples no GitHub (ou peça ao colega para fazer uma alteração combinada), depois rode:

```bash
git pull origin main
git status
```

Se não houver novos commits remotos, o pull pode informar que já está atualizado; isso é válido como comando executado, mas não demonstra recebimento de uma mudança nova. Combine a etapa com o colega conforme o roteiro.

## 5. Merge automático entre duas alterações

Esta etapa depende de dois históricos que avancem separadamente. Combine com o colega quem altera qual arquivo. Faça commit e push em uma mudança; no outro clone, faça outra mudança sem tocar nas mesmas linhas. Em seguida:

```bash
git fetch origin
git pull origin main
git log --oneline --graph --all
```

Se a sequência do professor exigir um merge local entre branches, crie/atualize a branch de trabalho e use `git merge <branch>` somente depois de confirmar qual branch contém a alteração que você quer integrar.

## 6. Reproduzir e resolver o conflito de CSS

Faça isso numa branch de teste, nunca direto na `main`. Antes de começar:

```bash
git status
git switch main
git pull origin main
git switch -c teste/conflito-css
```

Combine com o colega para que duas alterações diferentes atinjam a mesma linha de `style.css`. Registre e envie a primeira mudança; na outra branch/clone, altere a mesma linha de outro jeito e tente integrar os históricos. Quando o Git mostrar conflito, abra `style.css` no VS Code, escolha conscientemente o estilo final e remova os marcadores `<<<<<<<`, `=======` e `>>>>>>>`.

Depois da resolução:

```bash
git status
git diff
git add style.css
git commit -m "Resolve conflito de estilos"
git push -u origin teste/conflito-css
```

Os comandos exatos para iniciar o conflito dependem de qual pessoa enviou primeiro e de como as branches estão relacionadas. Se surgir uma mensagem diferente, pare e confira `git status` antes de executar mais comandos. Não copie uma saída fictícia para a entrega.

## 7. Branches, Pull Request e revisão

- Crie a branch de funcionalidade a partir da `main` atual.
- Faça uma mudança pequena e real, registre com commit e envie com `git push -u origin nome-da-branch`.
- Abra um Pull Request da branch de funcionalidade para `main`.
- Peça ao colega que leia a aba **Files changed**, deixe um comentário real e aprove (ou solicite ajustes).
- Responda ao comentário e integre o PR só depois da revisão.
- Atualize o clone com `git switch main` e `git pull origin main`.

Não simule o usuário do colega nem faça aprovação em nome dele. Se não houver uma dupla disponível, confirme com o docente como comprovar essa parte individualmente.

## 8. PR com conflito

O roteiro exige um PR que mostre conflito antes e o mesmo PR integrado depois. Para isso, duas branches precisam editar a mesma região de `index.html) e uma delas precisa entrar na `main` primeiro. A outra branch ficará divergente; abra o PR, registre a tela do aviso e resolva o conflito na branch proposta. Faça push, confira que o aviso sumiu, passe pela revisão e integre o PR.

Os PRs antigos deste repositório mostram tentativas anteriores, mas não garantem que a sequência exigida pelo roteiro esteja comprovada. Confira o estado real antes de usar uma tela como evidência.

## 9. Testar git revert

Escolha um commit recente de alteração simples que já esteja enviado ao GitHub. Anote o hash com `git log --oneline` e reverta o commit:

```bash
git log --oneline -10
git revert <hash-do-commit-de-teste>
git push origin main
git log --oneline -5
```

Substitua o texto entre sinais de menor/maior pelo hash real. Leia a mensagem antes de confirmar. Se abrir o editor de commit, salve e feche para concluir. O revert cria um commit novo que desfaz a mudança selecionada; não apaga o commit antigo.

## 10. Conferência final

```bash
git switch main
git pull origin main
git status
git log --oneline --graph --all
```

Abra `index.html` no navegador e confira menu, seções e estilo. Tire as capturas com o relógio do sistema visível e salve-as na pasta `evidencias/` com os nomes indicados no documento de entrega.

**Atenção:** o roteiro do docente descreve um trabalho em dupla e exige fork do repositório modelo, convite de colaborador e revisão real. O repositório `git-tp` pode servir de base de trabalho, mas confirme o requisito do fork antes de considerar essas etapas cumpridas.
