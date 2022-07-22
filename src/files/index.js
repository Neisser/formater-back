const { getData, getList } = require('./files.controller')

function files (router) {
  router.get('/data', getData)

  router.get('/list', getList)

  return router
}

module.exports = { files }
