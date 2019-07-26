FROM ubuntu:16.04

RUN apt-get update && apt-get install -y nodejs npm ruby-dev ruby-compass

RUN ln -s `which nodejs` /usr/bin/node

WORKDIR /var/www/html

COPY ./ ./

RUN gem update --system && gem install singularitygs breakpoint
RUN npm install

RUN compass compile
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "serve"]