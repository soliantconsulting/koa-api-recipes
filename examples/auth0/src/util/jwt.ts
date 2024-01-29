import { koaJwtSecret } from "jwks-rsa";
import type { Next, ParameterizedContext } from 'koa';
import baseJwt from "koa-jwt";
import { createConfiguredObjectGetter } from "../app-config/object-creator.js";

const getBaseJwt = createConfiguredObjectGetter(
    (appConfig) => appConfig.jwt,
    (config) => baseJwt({
        secret: koaJwtSecret({
            jwksUri: `${config.issuer}.well-known/jwks.json`,
            cache: true,
            cacheMaxEntries: 5,
            cacheMaxAge: 60 * 60 * 12,
        }),
        issuer: config.issuer,
        audience: config.audience,
    }),
);

const jwt = async (context: ParameterizedContext, next: Next) => getBaseJwt()(context, next);

export default jwt;
