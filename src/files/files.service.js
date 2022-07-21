const { SingleFileReq, fileListReq } = require('./files.constants')
const { sendRequest } = require('../drivers/axios')
const { csvToObj, errRequest, emptyFiles, mergeArrays, undefinedRows, getFileName } = require('./files.utils')

async function getFileList(){
  const data = await sendRequest(fileListReq);
  return data;
}

async function getFileData(fileId) {
  const data = await sendRequest(SingleFileReq(fileId));
  return data;
}

async function getMultipleFileData(files, reqSingle) {
  if(!files) throw new Error('files not found')
  const promises = files.map(fileId => reqSingle(fileId))
  return await Promise.all(promises);
}

function processData(payload) {
  const fileData = payload.filter(errRequest).filter(emptyFiles)
  
  const arr = fileData.map(i=>{
    return {
      file: getFileName(i),
      lines: csvToObj(i)
    }
  })
  console.log(arr)
  return arr;
}

module.exports = { getFileList, getFileData, getMultipleFileData, processData }