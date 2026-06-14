# 🐶 Dogs

Plataforma social em React para compartilhar fotos de cachorros, com fluxo de login e autenticação via WordPress REST API.

> ⚠️ Projeto em desenvolvimento

## 🚀 Tecnologias usadas

- React 19
- React Router DOM
- Vite
- ESLint
- PropTypes
- WordPress REST API

## 📁 Estrutura do projeto

- `src/main.jsx` - ponto de entrada da aplicação React
- `src/App.jsx` - componente raiz com roteamento e provider de contexto
- `src/useContext.jsx` - contexto de usuário, login, logout e manutenção de sessão
- `src/api.jsx` - funções de requisição para autenticação e dados de usuário
- `src/Components` - componentes React reutilizáveis e páginas
- `src/Hooks/useForm.jsx` - hook personalizado de formulário e validação
- `src/Assents` - ícones e imagens usados na interface

## 🧠 Arquitetura e fluxo

A aplicação usa um contexto global para armazenar o estado de autenticação do usuário. O fluxo principal é:

1. Usuário envia `username` e `password` no formulário de login.
2. A aplicação solicita um token JWT (`TOKEN_POST`).
3. Se o token for válido, ele é salvo no `localStorage`.
4. Um request adicional valida o token (`TOKEN_VALIDADE_POST`).
5. Se validado, a aplicação busca os dados do usuário (`USER_GET`).
6. O contexto atualiza e o usuário é redirecionado para a área autenticada.

## 🔀 Rotas

- `/` → `Home`
- `/login/*` → `Login`
  - `/login/` → `LoginForm`
  - `/login/criar` → `LoginCreat`
  - `/login/perdeu` → `LoginPasswordLost`
  - `/login/resetar` → `LoginPasswordReset`
- `/conta` → rota de conta do usuário (referenciada no fluxo de autenticação)

## 🔌 API utilizada

Base: `https://dogsapi.origamid.dev/json`

- `POST /jwt-auth/v1/token` - autentica usuário e retorna token JWT
- `POST /jwt-auth/v1/token/validate` - valida token JWT existente
- `GET /api/user` - busca dados do usuário autenticado

## ▶️ Como executar

```bash
npm install
npm run dev
```

### Outros scripts

- `npm run build` - gera build de produção
- `npm run preview` - visualiza build de produção localmente
- `npm run lint` - executa ESLint em todo o projeto

## 🧩 Componentes principais

- `Header` - barra de navegação com logo, botão de login e logout
- `Footer` - rodapé simples
- `LoginForm` - formulário de autenticação de usuário
- `LoginCreat` - placeholder para criação de usuário
- `LoginPasswordLost` - placeholder para recuperação de senha
- `LoginPasswordReset` - placeholder para reset de senha
- `Input` e `Button` - componentes de formulário reutilizáveis
- `useForm` - hook de validação de campos

## ✅ Status atual

- [x] Login básico funcional
- [x] Validação de token e auto login
- [ ] Implementar criação de conta
- [ ] Implementar recuperação de senha
- [ ] Implementar upload e feed de fotos
- [ ] Página de perfil `/conta`

## 💡 Pontos de atenção

- O componente `/conta` é referenciado, mas não está presente na base atual.
- `LoginCreat`, `LoginPasswordLost` e `LoginPasswordReset` ainda são placeholders.
- O estado de login é controlado por `UserContext` e `localStorage`.
- O projeto pode ser expandido com rotas privadas e proteção de páginas.

## 📌 Observações finais

Este README documenta o fluxo existente do projeto, os arquivos principais e o comportamento atual. Ele deve ser atualizado conforme novas funcionalidades forem implementadas.
