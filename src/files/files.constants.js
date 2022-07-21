const fileListReq = {
  method: 'get',
  url: 'https://echo-serv.tbxnet.com/v1/secret/files',
  headers: { 
    'Authorization': 'Bearer aSuperSecretKey'
  }
};

const SingleFileReq = (fileId) => ({
  method: 'get',
  url: `https://echo-serv.tbxnet.com/v1/secret/file/${fileId}`,
  headers: { 
    'Authorization': 'Bearer aSuperSecretKey'
  }
})

module.exports = {fileListReq, SingleFileReq}