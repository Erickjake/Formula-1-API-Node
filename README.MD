# README: API Minimalista de Fórmula 1

## Visão Geral

Este projeto é uma API minimalista desenvolvida com [Fastify](https://www.fastify.io/). Ela fornece informações sobre equipes e pilotos de Fórmula 1. A API é projetada para ser leve e simples, sendo ideal para projetos relacionados a dados de Fórmula 1.

---

## Funcionalidades

- **Endpoints para Equipes e Pilotos**:
  - Obtenha uma lista de todas as equipes.
  - Obtenha uma lista de todos os pilotos.
  - Busque detalhes de um piloto específico pelo ID.
- **Suporte a CORS**: Permite requisições de qualquer domínio.
- **Integração com Fastify**: Otimizada para desempenho e simplicidade.

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

---

## Uso

### Inicie o Servidor

Execute o seguinte comando para iniciar o servidor:
```bash
npm start
```

O servidor será executado em `http://localhost:3000`.

---

## Endpoints

### 1. Obter Todas as Equipes
- **URL**: `/teams`
- **Método**: `GET`
- **Resposta**: JSON contendo uma lista de todas as equipes de Fórmula 1.

#### Exemplo de Resposta:
```json
{
  "teams": [
    {
      "id": 1,
      "name": "Red Bull Racing",
      "base": "Milton Keynes",
      "teamChief": "Christian Horner",
      "technicalChief": "Adrian Newey",
      "powerUnit": "Honda",
      "firstEntry": 2005,
      "worldChampionships": 4,
      "highestRaceFinish": "1 (x73)",
      "polePositions": 64
    },
    ...
  ]
}
```

---

### 2. Obter Todos os Pilotos
- **URL**: `/drivers`
- **Método**: `GET`
- **Resposta**: JSON contendo uma lista de todos os pilotos de Fórmula 1.

#### Exemplo de Resposta:
```json
{
  "drivers": [
    {
      "id": 1,
      "name": "Max Verstappen",
      "team": "Red Bull Racing"
    },
    ...
  ]
}
```

---

### 3. Obter Piloto por ID
- **URL**: `/drivers/:id`
- **Método**: `GET`
- **Parâmetros**:
  - `id`: O ID do piloto.
- **Resposta**:
  - `200 OK`: JSON contendo as informações do piloto.
  - `404 Not Found`: Mensagem de erro se o ID do piloto não existir.

#### Exemplo de Resposta (200 OK):
```json
{
  "driver": {
    "id": 1,
    "name": "Max Verstappen",
    "team": "Red Bull Racing"
  }
}
```

#### Exemplo de Resposta (404 Not Found):
```json
{
  "error": "Driver not found"
}
```

---

## Dependências

- **Fastify**: Framework principal para a construção da API.
- **@fastify/cors**: Habilita CORS na API.

Instale com:
```bash
npm install fastify @fastify/cors
```

---

## Personalização

Para adicionar mais dados ou endpoints:
1. Modifique os arrays `teams` e `drivers` no código.
2. Adicione novas rotas na seção `server.get()`.

---

## Licença

Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para usar, modificar e distribuir conforme necessário.

---

## Contribuição

Contribuições são bem-vindas! Caso tenha ideias ou melhorias, envie um pull request ou abra uma issue.

---

Divirta-se explorando o mundo da Fórmula 1 com esta API minimalista! 🏎️
