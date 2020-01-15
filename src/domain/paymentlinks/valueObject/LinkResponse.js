const pv_LinkResponseBody = require('./LinkResponseBody')
const pv_BasicResponseHeader = require('./BasicResponseHeader')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_LinkResponse extends ValueObject {
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
    this.body = body instanceof pv_LinkResponseBody ? body : new pv_LinkResponseBody(body, isResponse)
    this.header = header instanceof pv_BasicResponseHeader ? header : new pv_BasicResponseHeader(header, isResponse)
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

module.exports = pv_LinkResponse
