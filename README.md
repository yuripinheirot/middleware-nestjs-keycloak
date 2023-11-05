# PokeAPI NestJS Middleware

Este projeto é um middleware construído com NestJS que fornece uma endpoints otimizados para acessar a [Pokedex](https://pokeapi.co/](https://github.com/yuripinheirot/pokemon-project-front). Ele inclui uma série de características avançadas, desde mapeamentos com class-transformer, sistema de caching até autenticação com Keycloak.

### 🎨 Características

- **Mapeamento com Class-transformer**: Converte a saída dos endpoints da PokeAPI para uma forma mais utilizável e otimizada para o middleware.
- **Validação de Dados**: Utiliza o Class Validator para garantir que os dados de entrada sejam corretos antes de processá-los.
- **Sistema de Logging com Interceptors**: Identifica e registra falhas, facilitando a depuração e monitoramento do middleware.
- **Tipagem Forte com TypeScript**: Todo o projeto é escrito em TypeScript, garantindo a segurança e a robustez do código.
- **Testes**: Inclui testes de feature e unitários para assegurar a qualidade e a funcionalidade do middleware.
- **TypeORM com PostgreSQL**: Utiliza TypeORM para integração com um banco de dados PostgreSQL.
- **Sistema de Caching**: Otimiza as requisições e diminui os tempos de carregamento usando Redis como sistema de caching.
- **Rotas**:
	- **Pokémon**:
	    - `GET /pokemon/:nameOrId`: Consulta e retorna detalhes de um Pokémon específico, seja por nome ou ID.
	    - `GET /pokemon`: Lista todos os Pokémon disponíveis, perfeito para uma visão geral.
	- **Pokédex**:
	    - `GET /pokedex`: Acessa e retorna a Pokédex do usuário autenticado.
	    - `POST /pokedex`: Permite adicionar um Pokémon à Pokédex do usuário autenticado.
	    - `DELETE /pokedex`: Remove um Pokémon da Pokédex do usuário autenticado.
- **Autenticação com Keycloak**: Garante a segurança dos dados e das operações ao exigir autenticação via Keycloak.

### 🚀 Começando

### Pré-requisitos

- [Docker](https://docs.docker.com/engine/install/)
- [Docker compose](https://docs.docker.com/compose/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Instalação

1. Clone este repositório:
``` shell
git clone https://github.com/yuripinheirot/pokemon-project-back
```

2. Navegue até o diretório do projeto:
``` shell
cd pokemon-project-back
```

3. Instale as dependências:
``` shell
yarn
```

4. Execute o aplicativo localmente:
``` shell
docker compose up app
```

O aplicativo agora estará rodando em [http://localhost:3003](http://localhost:3003).

### 🛠️ Construído Com

- [NestJS](https://nestjs.com/): Um framework para construção de aplicações server-side eficientes, confiáveis e escaláveis em Node.js.
- [Axios](https://axios-http.com/): Cliente HTTP promissivo para o navegador e Node.js.
- [Class-transformer](https://github.com/typestack/class-transformer): Fornece uma maneira de realizar transformações de objeto para objeto. Utilizado para mapear os endpoints da PokeAPI.
- [Class-validator](https://github.com/typestack/class-validator): Validação e sanitização de classes/objetos em TypeScript/JavaScript.
- [Keycloak-connect](https://www.keycloak.org/): Autenticação robusta através da integração do Keycloak.
- [TypeScript](https://www.typescriptlang.org/): Código fonte do middleware escrito em TypeScript, assegurando robustez e clareza.
- [TypeORM](https://typeorm.io/): ORM para acesso ao PostgreSQL
- [Redis](https://redis.io/): Usado como sistema de cache, através de `cache-manager-redis-store`.
- [Jest](https://jestjs.io/): Framework de testes para JavaScript com foco na simplicidade.

### 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://chat.openai.com/c/LICENSE) para mais detalhes.

### 💬 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma `issue` ou enviar um `pull request`.
