const axios = require('axios');

const axiosConfig = axios.create({
  baseURL: 'http://localhost:5000/'
});

module.exports = axiosConfig;