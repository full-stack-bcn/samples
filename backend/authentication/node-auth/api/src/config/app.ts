export const { 
  NODE_ENVIRONMENT = 'development', 
  APP_PORT = 3000,
} = process.env;

export const IN_PROD = NODE_ENVIRONMENT === 'production';
