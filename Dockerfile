FROM ubuntu

RUN apt-get update -y
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install nodejs -y
CMD nodejs -v

COPY helloworld.js /

CMD ["nodejs","server.js"]
