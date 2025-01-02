# TypeScript Boilerplate

Um boilerplate inicial para projetos em TypeScript, projetado para fornecer uma base robusta e escalável para seus projetos.

## Recursos

- **TypeScript**: Linguagem com tipagem estática para JavaScript.
- **Configuração Inicial do TypeScript**: Configurações otimizadas no arquivo `tsconfig.json`.
- **ESLint**: Linter para manter a consistência e qualidade do código.
- **Prettier**: Formatação automática do código.
- **Scripts Pré-Configurados**: Scripts para compilação, linting e formatação.
- **Estrutura de Pastas Organizada**: Melhor gestão do código.

## Estrutura de Pastas

```
.
├── src
│   ├── index.ts
│   └── modules
├── dist
├── .eslintrc.json
├── .prettierrc
├── tsconfig.json
├── package.json
└── README.md
```

- **src**: Contém os arquivos fonte do projeto.
- **dist**: Contém os arquivos compilados.

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/Erickjake/BoilerPlate-Typescript-
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd typescript-boilerplate
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

- **Desenvolvimento**:
  ```bash
  npm run dev
  ```

- **Compilar para Produção**:
  ```bash
  npm run build
  ```

- **Lint**:
  ```bash
  npm run lint
  ```

- **Formatar Código**:
  ```bash
  npm run format
  ```

## Configuração

### tsconfig.json

O arquivo `tsconfig.json` é configurado para um bom equilíbrio entre desempenho e recursos. Altere conforme necessário para o seu projeto.

### ESLint

As regras do ESLint estão definidas em `.eslintrc.json`. Você pode personalizá-las para atender ao estilo de código desejado.

### Prettier

O arquivo `.prettierrc` contém as configurações para formatação automática. Personalize-o para suas preferências.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Fork este repositório.
2. Crie um branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça as alterações e commit:
   ```bash
   git commit -m "Minha feature"
   ```
4. Envie para seu fork:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

