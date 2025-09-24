FROM node:20.9.0-bullseye-slim AS build-stage

WORKDIR /usr/src/app

COPY --chown=node:node . . 

RUN echo "Listing components folder:" && ls -R /usr/src/app/src/components

RUN npm ci

RUN npm run build

USER node

ENV NODE_ENV=production

CMD ["npm", "run", "start"]