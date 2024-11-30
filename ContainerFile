FROM node:alpine
WORKDIR /app
COPY server.js .
RUN mkdir static && echo "<h1>Static Content</h1>" > static/index.html
CMD ["node", "server.js"]

