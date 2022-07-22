const expect = require('chai').expect;

const { getJsonData } = require('../src/files/files.service')

describe('Files domain test', function (done) {
  it('Should get json data from files', async function() {
    // Arrange
    const dataFormat = {
      type: 'array',
      child: {
        type: 'object',
        keys: ['file', 'lines']
      }
    }

    // Act
    const data = await getJsonData();

    // Assert: response type
    expect(data).to.be.a(dataFormat.type)
    expect(data.length).to.be.greaterThan(0)
    expect(Object.keys(data[0])).to.have.ordered.members(dataFormat.child.keys)
  })
})