FROM alpine:3.14

COPY ./ ./

WORKDIR ./we-walk-web

RUN apk add --no-cache \
    nodejs \
    npm \
  && npm install

EXPOSE 3000

ENTRYPOINT [ "npm" ]
CMD ["start", "--host", "0.0.0.0"]
