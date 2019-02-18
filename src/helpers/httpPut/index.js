const axios = require('axios');

const httpPut = (url, payload) => axios.put(url, payload);

module.exports = { httpPut };
