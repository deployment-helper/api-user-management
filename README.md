# User Management

User Management Backend service

## Local Development

<!-- TODO Architecure daigram required -->

- Run Mongodb db

Application using docker based mongodb instance. Mongodb command to run.

`docker-compose up`

Mongodb configuration can be find in file `src/config/index.ts`

- Run Development Server

`npm run dev`

- Generate Github token for a client id
  https://codesandbox.io/s/github-login-z84u9

### Environment variables

**GOOGLE_APPLICATION_CREDENTIALS**

This environment variable is used for sign-in to GCP account

Export `GOOGLE_APPLICATION_CREDENTIALS` environment variable

`export GOOGLE_APPLICATION_CREDENTIALS='<service-account-key-file>'`

**DB_USER_NAME**

This is environment variable is used to provide `database user`

**DB_PASWORD**

This environment variable is used to provide `database password`

**DB_DOMAIN**

This environment variable is used to provide `database server`

**DATABASE_NAME**

This environment variable is used to provided `database name`

Export `DATABASE_NAME` environment variable in monst of the casees it is similar to GCP project name.

**DEBUG**

This is a boolen flag used to enable and disable `express.js` debugging.

**CORS_WHITE_LIST**

This environment variable is used for white listing the URLs for `CROS` requests.

**JWT_EXPIRE_TIME**

This environment variable is used to configure jwt token expire time.

**JWT_SECRET**

This environment variable is used to configure JWT secret.

**FORGOT_PASSWORD_JWT_EXPIRE_TIME**

This environment variable is used for setting expire time for forgot password token.

**SEND_GRID_API_KEY**

This environment variable is used for send grid service authentication.

**SEND_GRID_FROM_EMAIL**

This environment variable is used for setting `from email address` for sending emails.

**RESET_PASSWORD_ENDPOINT**

This environment variable is used to configure webapp reset password endpoint.
