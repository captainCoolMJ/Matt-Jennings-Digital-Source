FROM node:10.16

WORKDIR /var/www/html

COPY ./ ./

RUN npm install --production

EXPOSE 8080

CMD ["npm", "run", "serve"]