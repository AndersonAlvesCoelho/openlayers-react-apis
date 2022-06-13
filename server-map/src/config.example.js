const dev = {
  BASE_URL: "",
};

const prod = {
  BASE_URL: "",
};

const config =
  process.env.NODE_ENV && process.env.NODE_ENV.trim() == "development"
    ? dev
    : prod;

export default {
  // Adicionar valores comuns aqui
  BASE_URL: process.env.BASE_URL,

  ...config,
};
