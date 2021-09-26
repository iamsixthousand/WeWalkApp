FROM alpine:3.14

RUN apk add --no-cache \
    nodejs \
    npm \
  && npm install -g json-server

COPY ./we-walk-web/data/db.json ./

EXPOSE 8000

ENTRYPOINT ["npx"]
CMD ["json-server", "--watch", "db.json", "--host", "0.0.0.0", "--port", "8000"]
