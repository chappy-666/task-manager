FROM node:22.15.0-bullseye

RUN apt-get update && \
    npm install -g @angular/cli

RUN echo 'source <(ng completion script)' >> /root/.bashrc