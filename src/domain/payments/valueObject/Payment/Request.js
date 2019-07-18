const pv_PaymentRequestBody = require('../Payment/RequestBody')
const pv_RequestHeader = require('../Request/Header')
const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_Request extends ValueObject {
  constructor({
    action,
    body,
    header,
  } = {},
  isResponse) {
    super()
    this.importValue('action', action, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.body = body instanceof pv_PaymentRequestBody ? body : new pv_PaymentRequestBody(body, isResponse)
    this.header = header instanceof pv_RequestHeader ? header : new pv_RequestHeader(header, isResponse)
  }
  
  getAction() {
    return this.action
  }
  
  getBody() {
    return this.body
  }
  
  getHeader() {
    return this.header
  }
  

}

module.exports = pv_Request
