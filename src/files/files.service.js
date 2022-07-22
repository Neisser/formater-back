const { getFileList, getFileData, getMultipleFileData, processData } = require('./files.model')

async function getJsonData() {
  const { files } = await getFileList();
  const filedata = await getMultipleFileData(files, getFileData);
  const processedData = processData(filedata);
  return processedData;
}

async function getJsonList() {
  const {files} = await getFileList();
  return files;
}

module.exports = { getJsonData, getJsonList }