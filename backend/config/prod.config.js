module.exports = {
  DB_CLIENT: 'pg',
  DB_CONNECTION_STRING: `${process.env.DATABASE_URL}?sslmode=no-verify`,
  RATE_LIMITER_REDIS: process.env.REDIS_URL,
  CACHE_REDIS: process.env.REDIS_URL,
  EMAIL_FROM: process.env.MAILGUN_SMTP_LOGIN,
  EMAIL_SMTP_HOST: process.env.MAILGUN_SMTP_SERVER,
  EMAIL_SMTP_PORT: process.env.MAILGUN_SMTP_PORT,
  EMAIL_SMTP_USER: process.env.MAILGUN_SMTP_LOGIN,
  EMAIL_SMTP_PASSWORD: process.env.MAILGUN_SMTP_PASSWORD,
  KEY: process.env.DIRECTUS_KEY,
  SECRET: process.env.DIRECTUS_SECRET,
  STORAGE_LOCATIONS: 'local',
  STORAGE_LOCAL_DRIVER: 'local',
  STORAGE_LOCAL_ROOT: './uploads',
  REFRESH_TOKEN_COOKIE_NAME: 'saas_starter_prod_refresh_token',
};
