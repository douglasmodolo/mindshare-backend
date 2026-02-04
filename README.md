Aqui está o conteúdo formatado e pronto para ser salvo como um arquivo **README.md**.

# 🧠 MindShare - Sistema de Gerenciamento de Ideias

O **MindShare** é uma plataforma desenvolvida como projeto de pós-graduação, focada no gerenciamento e votação de ideias. A aplicação utiliza uma arquitetura baseada em **GraphQL** para permitir que usuários interajam com sugestões, realizem votações dinâmicas e gerenciem o ciclo de vida de pensamentos criativos de forma eficiente.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias de ponta:

* **Runtime & Linguagem:** Node.js com TypeScript para tipagem estática e segurança.
* **API:** Apollo Server 5 & Type-GraphQL (abordagem *code-first* para o schema).
* **Servidor Web:** Express 5.
* **Injeção de Dependência:** TypeDI.
* **Banco de Dados & ORM:** Prisma com adaptador para LibSQL/Turso.
* **Segurança:** JWT para autenticação e Bcryptjs para hashing de senhas.

---

## 🛠️ Funcionalidades (Aula 01)

Nesta etapa inicial, o foco foi a implementação do núcleo de engajamento da aplicação:

* **WatchService & WatchResolver:** Implementação da lógica de negócio e queries/mutations para monitoramento de interações.
* **Sistema de Votos (Toggle):** Lógica inteligente de mutação que verifica a existência de um voto prévio para decidir entre adicionar ou remover a interação (voto) do usuário.
* **Relacionamentos Complexos:** Integração entre os modelos de `User` e `Idea`, permitindo a contagem de votos e a identificação de autores.
* **Schema & Doc Automática:** Geração automática do schema GraphQL facilitando a consulta da documentação via Playground/Sandbox.

---

## 📦 Como Executar o Projeto

1. **Clonar o repositório:**
  ```bash
  git clone [https://github.com/seu-usuario/mindshare.git](https://github.com/seu-usuario/mindshare.git)
  cd mindshare

  ```

2. **Instalar as dependências:**
  ```bash
  npm install

  ```


3. **Configurar variáveis de ambiente:**
Crie um arquivo `.env` na raiz do projeto e configure sua `DATABASE_URL` e segredos de JWT.

4. **Rodar as migrações do banco:**
  ```bash
  npx prisma migrate dev

  ```


5. **Iniciar em modo de desenvolvimento:**
  ```bash
  npm run dev

  ```

---

  
