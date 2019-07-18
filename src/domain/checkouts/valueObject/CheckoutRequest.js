const pv_CheckoutRequestBody = require('./CheckoutRequestBody')
const pv_RequestHeader = require('./Request/Header')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutRequest extends ValueObject {
  constructor({
    body,
    header,
  } = {},
  isResponse) {
    super()
    this.body = body instanceof pv_CheckoutRequestBody ? body : new pv_CheckoutRequestBody(body, isResponse)
    this.header = header instanceof pv_RequestHeader ? header : new pv_RequestHeader(header, isResponse)
  }
  
  getBody() {
    return this.body
  }
  
  getHeader() {
    return this.header
  }
  

}

module.exports = pv_CheckoutRequest
