const { getData } = require('./files.controller')

function files(router){
  
  router.get('/data', getData)

  return router;
}

module.exports = { files }