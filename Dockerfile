FROM node:20.9.0-bullseye-slim AS build-stage

WORKDIR /usr/src/app

COPY --chown=node:node . . 

RUN npm ci

RUN npm run build

USER node

ENV NODE_ENV=production

CMD ["npm", "run", "start"]