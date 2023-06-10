const { default: axios } = require("axios");

const instance = axios.create({
  baseURL: 'https://',
  timeout: 1000,
});