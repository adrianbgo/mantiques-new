declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      MONGODB_DB: string;
      DEV_URL: string;
      PROD_URL: string;
      STRIPE_SECRET_KEY: string;
    }
  }
}

export {};
