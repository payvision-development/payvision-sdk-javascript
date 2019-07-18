FROM node

# Set /app as working directory
WORKDIR /app

# Copy essential files to the working directory
COPY example /app/example/
COPY src /app/src/
COPY tests /app/tests/

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY webpack.config.js /app/webpack.config.js
COPY jest.config.js /app/jest.config.js

RUN npm install
