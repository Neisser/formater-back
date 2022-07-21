const { getFileList, getFileData, getMultipleFileData, processData } = require('./files.service')

async function getData(req, res, next) {
  try {
    const { files } = await getFileList();
    const filedata = await getMultipleFileData(files, getFileData);
    const processedData = processData(filedata);

    res.status(200).json(processedData)
  } catch (err) {
    res.status(400).json({
      success: false,
      err
    })
  }
}

module.exports = { getData }