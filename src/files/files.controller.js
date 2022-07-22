const { getJsonData } = require('./files.service')

async function getData(req, res, next) {
  try {
    const data =  await getJsonData();
    res.status(200).json(data)
  } catch (err) {
    res.status(400).json({
      success: false,
      err
    })
  }
}

module.exports = { getData }