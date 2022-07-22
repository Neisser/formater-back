const { getJsonData, getJsonList } = require('./files.service')

async function getData(req, res, next) {
  try {
    const {fileId} = req.query;
    const data =  await getJsonData(fileId);
    res.status(200).json(data)
  } catch (err) {
    res.status(400).json({
      success: false,
      err
    })
  }
}

async function getList(req, res, next){
  try {
    const data =  await getJsonList();
    res.status(200).json(data)
  } catch (err) {
    res.status(400).json({
      success: false,
      err
    })
  }
}

module.exports = { getData, getList }