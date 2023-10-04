FROM node:16-slim
WORKDIR /usr/src/app
COPY docker/.npmrc ./package.json ./yarn.lock ./
RUN yarn install --only=production
RUN rm -f .npmrc
COPY dist/ ./dist/
EXPOSE 8080
ENV PORT 8080
CMD [ "node", "dist/index.js" ]
