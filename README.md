# Tyk Experimentation

The results of me playing around with Tyk for a day or so
to evaluate it as an API gateway.

## Bootstrapping

```
docker-compose up -d redis
docker-compose up app
```

Issue yourself a token with `./issue_token` and reload config
with `curl -H "x-tyk-autorization: abc123" -s http://localhost:8080/tyk/reload/group`.

## Config layout

The example API is defined in `apps/example.json` and Javascript middleware is
found in `middleware/*.js`. `policies.json` defines access policies.
