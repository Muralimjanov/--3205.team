# Используем Node.js 18 в качестве базового образа
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код проекта в контейнер
COPY . .

# Открываем порт 3000 для бэкенда
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "run", "start:prod"]
