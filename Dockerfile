## Configure Docker for react
FROM node:alpine

ARG VITE_BACKEND_URL
ARG VITE_APP_URL

ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV VITE_APP_URL=$VITE_APP_URL

# Create app directory
WORKDIR /app

#Enable corepack
RUN npx corepack enable

# Install app dependecies
COPY package*.json ./

RUN pnpm install

# Bundle app source
COPY . .

EXPOSE 3001

CMD ["pnpm", "start"]
