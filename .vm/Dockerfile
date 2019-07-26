FROM node:10.16

RUN apt-get update && apt-get install -y curl ruby-dev ruby-compass

WORKDIR /var/www/html

COPY ./ ./

RUN gem update --system && gem install singularitygs breakpoint
RUN npm install

RUN compass compile
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "serve"]