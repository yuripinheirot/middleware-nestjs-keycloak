
# Pokemon Project

A simple pokedex based in NodeJS, Express, Typescript, Docker and MySql :D


## Authors

- [@yuripinheirot](https://github.com/yuripinheirot)


## Installation
Prerequisites: Node 17, Docker, Docker-compose

Install pokemon-project-back with npm

Automatic installation
```bash
  cd pokemon-project-back
  npm run installation
```

Manual installation
```bash
  cd pokemon-project-back
  npm install

  cd docker
  sudo docker-compose up -d 

  cd..
  npx prisma migrate dev --name init
```

Start application
```bash
  npm run debug
```
## API Reference

#### Get pokedex

```http
  GET /pokedex
```

#### Add pokedex

```http
  POST /pokedex
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `pokemon` | `string` | **Required**. Pokemon name to add |

#### Remove pokedex

```http
  POST /pokedex
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `pokemon` | `string` | **Required**. Pokemon name to remove |
