# Fluxo de Autenticação com Expo e Clerk

Este projeto demonstra um fluxo de autenticação usando Expo e Clerk em uma aplicação React Native.

## Funcionalidades

- Login com Google OAuth
- Rotas protegidas para usuários autenticados
- Rotas públicas para usuários não autenticados
- Exibição do perfil do usuário

## Tecnologias Utilizadas

- [Expo](https://expo.dev/)
- [Clerk](https://clerk.com/) para autenticação
- [React Native](https://reactnative.dev/)
- [Expo Router](https://docs.expo.dev/routing/introduction/) para navegação

## Estrutura do Projeto

- `src/app/_layout.tsx`: Componente de layout principal com o provedor Clerk e lógica de roteamento inicial
- `src/app/(public)/index.tsx`: Tela pública de login com Google OAuth
- `src/app/(auth)/index.tsx`: Tela inicial protegida exibindo informações do usuário

## Como Começar

1. Clone o repositório
2. Instale as dependências: `npm install` ou `yarn install`
3. Configure sua conta Clerk e obtenha a chave publicável
4. Crie um arquivo `.env` no diretório raiz e adicione sua chave do Clerk:
   ```
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=sua_chave_aqui
   ```
5. Execute o projeto: `npx expo start`

## Uso

- Quando o aplicativo iniciar, ele redirecionará para a tela pública de login para usuários não autenticados
- Após o login bem-sucedido, os usuários serão redirecionados para a tela inicial protegida
- Os usuários podem sair usando o botão "Sair" na tela inicial
