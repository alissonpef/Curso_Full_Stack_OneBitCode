# Tutorial: Como Fazer Commits no Git

## Índice
1. [Primeira Vez Configurando o Git](#primeira-vez-configurando-o-git)
2. [Fazendo o Primeiro Commit](#fazendo-o-primeiro-commit)
3. [Commits Após a Configuração Inicial](#commits-após-a-configuração-inicial)

---

## Primeira Vez Configurando o Git

1. **Configure seu nome e e-mail (necessário para commits):**
   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seu_email@example.com"
   ```

2. **Inicialize o repositório Git na pasta do projeto:**
   ```bash
   git init
   ```

3. **Adicione o repositório remoto (se já existir):**
   ```bash
   git remote add origin https://github.com/usuario/repositorio.git
   ```

4. **Baixe as alterações remotas, se houver (para evitar conflitos):**
   ```bash
   git pull origin main --rebase
   ```

---

## Fazendo o Primeiro Commit

1. **Adicione os arquivos que deseja rastrear:**
   ```bash
   git add .
   ```
   > Isso adicionará todos os arquivos ao "staging area". Use `git add <nome_do_arquivo>` para adicionar arquivos específicos.

2. **Crie o commit com uma mensagem descritiva:**
   ```bash
   git commit -m "Mensagem explicativa do commit"
   ```

3. **Envie as alterações para o repositório remoto:**
   ```bash
   git push -u origin main
   ```

---

## Commits Após a Configuração Inicial

1. **Atualize seu repositório local com as mudanças remotas (opcional, mas recomendado):**
   ```bash
   git pull origin main --rebase
   ```

2. **Adicione novos arquivos ou alterações:**
   ```bash
   git add .
   ```

3. **Crie um commit:**
   ```bash
   git commit -m "Descrição das alterações realizadas"
   ```

4. **Envie as alterações para o repositório remoto:**
   ```bash
   git push
   ```

---

## Observações

- **Verificando o status do repositório:**  
   Antes de adicionar ou fazer commits, é uma boa prática verificar o estado do repositório:
   ```bash
   git status
   ```

- **Editando mensagens de commits antigos:**  
   Caso precise corrigir um commit recente, você pode usar:
   ```bash
   git commit --amend -m "Nova mensagem de commit"
   ```

- **Resolvendo conflitos:**  
   Se ocorrerem conflitos ao fazer o `git pull`, você precisará resolvê-los manualmente, como descrito no tutorial acima.
