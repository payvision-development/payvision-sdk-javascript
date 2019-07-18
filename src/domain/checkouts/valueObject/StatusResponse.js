const pv_StatusResponseBody = require('./StatusResponseBody')
const pv_StatusResponseHeader = require('./StatusResponseHeader')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_StatusResponse extends ValueObject {
  constructor({
    body,
    description,
    header,
    result,
  } = {},
  isResponse) {
    super()
    this.importValue('description', description, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('result', result, { type: 'number', required: isResponse ? false : true, isArray: false })
    this.body = body instanceof pv_StatusResponseBody ? body : new pv_StatusResponseBody(body, isResponse)
    this.header = header instanceof pv_StatusResponseHeader ? header : new pv_StatusResponseHeader(header, isResponse)
  }
  
  getBody() {
    return this.body
  }
  
  getDescription() {
    return this.description
  }
  
  getHeader() {
    return this.header
  }
  
  getResult() {
    return this.result
  }
  

}

module.exports = pv_StatusResponse
