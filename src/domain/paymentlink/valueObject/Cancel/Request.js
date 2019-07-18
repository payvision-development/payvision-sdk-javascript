const pv_RequestHeader = require('../Request/Header')
const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_Request extends ValueObject {
  constructor({
    header,
  } = {},
  isResponse) {
    super()
    this.header = header instanceof pv_RequestHeader ? header : new pv_RequestHeader(header, isResponse)
  }
  
  getHeader() {
    return this.header
  }
  

}

module.exports = pv_Request
