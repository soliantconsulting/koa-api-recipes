# Auth0

This example shows you how to implement Auth0 for a completely private API configured via AppConfig. It should also be
applicable to most other OAuth2 providers.

Instead of using the jwt middleware globally, you might opt into only using it for specific routes to keep other routes
publicly available.

It is assumed that you have the following configuration present:

```toml
[jwt]
issuer = "your-auth0-domain"
audience = "your-api-audience"
```

For further information check out the documentation of [koa-jwt](https://www.npmjs.com/package/koa-jwt).
