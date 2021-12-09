FROM node:16.13.1-alpine3.14
# Install bash
RUN apk update && apk add bash && apk add curl

# Create /opt
RUN mkdir -p /opt/app
WORKDIR /opt/app
# Add entrypoint script
ADD docker-entrypoint.sh /opt/
RUN chmod +x /opt/docker-entrypoint.sh
RUN dos2unix /opt/docker-entrypoint.sh
# Install packages using Yarn
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules
# Copy the files to container
COPY package.json package-lock.json /opt/app/
COPY *.js /opt/app/
RUN find /opt/app/ -type f -print0 | xargs -0 dos2unix
