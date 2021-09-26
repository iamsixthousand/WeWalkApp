# We Walk 

Проект собран при помощи [Create React App](https://github.com/facebook/create-react-app).

## Доступные команды


В первом терминале (папка we-walk-web) введите
### `npx json-server --watch data/db.json --port 8000` это запустит json-server

Откройте второй терминал из этой же папки и введите
### `npm start` это запустит живую дев сборку проекта

Откройте (откроется автоматически) [http://localhost:3000](http://localhost:3000) для просмотра в браузере.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Собирает проэкт в папку `build`\
Делает продакшн бандлы и оптимизирует приложение.

### Запуск приложения при помощи Docker

#### Сборка образов

```bash
docker build -t db:v1.0 -f json-server.Dockerfile .
docker build -t app:v1.0 -f app.Dockerfile .
```

### Запуск контейнеров

```bash
docker run --name db -d -p 8000:8000 db:v1.0
docker run --name app -d -p 3000:3000 app:v1.0
```

### Запуск приложения при помощи Docker Compose
```bash
$ docker compose up
```
