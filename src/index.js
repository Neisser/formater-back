const { files } = require('./files')
function setRoutes(router) {
  /* GET home page. */
  router.use('/json', (req,res)=>res.json({version: '1.0.0'}))
  router.use('/files', files(router));

  return router;
}

module.exports = { setRoutes };
