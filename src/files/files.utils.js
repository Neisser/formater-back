function csvToObj (str) {
  const rows = str.split('\n')
  const arrRows = rows.filter((item, index, arr) => {
    if (item.split(',').length === arr[0].split(',').length) return true
    return false
  }).map(i => i.split(',').slice(1, i.length))
  const data = arrRows.slice(1, arrRows.length).map(item => {
    const obj = {}
    arrRows[0].map((key, index) => {
      obj[key] = item[index]
    })
    return obj
  })
  return data
}

function getFileName (str) {
  const filename = str.split('\n')[1].split(',')[0]
  return filename
}

// Filters
const errRequest = (i) => (typeof i === 'string')
const emptyFiles = (i) => (i.split('\n').length > 1)
const undefinedRows = (i) => (i !== undefined)

// Reducers
const mergeArrays = (a, b) => [...a, ...b]

module.exports = { csvToObj, errRequest, emptyFiles, mergeArrays, undefinedRows, getFileName }
