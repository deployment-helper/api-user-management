console.log(`# Auto generated file
runtime: ${process.env.RUNTIME || "nodejs12"}
instance_class: ${process.env.INSTANCE_CLASS || "F1"}
automatic_scaling: 
    min_instances: ${process.env.MIN_INSTANCES || 1}
    max_instances: ${process.env.MAX_INSTANCES || 1}
    max_concurrent_requests: ${process.env.MAX_CONCURRENT_REQUESTS || 50}
env_variables:
    DATABASE_NAME: ${process.env.DATABASE_NAME}
    DB_USER_NAME: ${process.env.DB_USER_NAME}
    DB_PASWORD: ${process.env.DB_PASWORD}
    DB_DOMAIN: ${process.env.DB_DOMAIN}
    DEBUG: ${process.env.DEBUG}
    CORS_WHITE_LIST: ${process.env.CORS_WHITE_LIST}
    FORGOT_PASSWORD_JWT_EXPIRE_TIME: ${
      process.env.FORGOT_PASSWORD_JWT_EXPIRE_TIME
    }
    SEND_GRID_API_KEY: ${process.env.SEND_GRID_API_KEY}
    SEND_GRID_FROM_EMAIL: ${process.env.SEND_GRID_FROM_EMAIL}
    RESET_PASSWORD_ENDPOINT: ${process.env.RESET_PASSWORD_ENDPOINT}
`);
