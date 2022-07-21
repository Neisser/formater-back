const axios = require('axios')

async function sendRequest(config) {
  return await axios(config)
  .then(function (response) {
    return response.data;
  })
  .catch(function (err) {
    return err;
  });
}

module.exports = {sendRequest};