const pv_CheckoutResponseBody = require('./CheckoutResponseBody')
const pv_CheckoutResponseHeader = require('./CheckoutResponseHeader')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutResponse extends ValueObject {
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
    this.body = body instanceof pv_CheckoutResponseBody ? body : new pv_CheckoutResponseBody(body, isResponse)
    this.header = header instanceof pv_CheckoutResponseHeader ? header : new pv_CheckoutResponseHeader(header, isResponse)
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

module.exports = pv_CheckoutResponse
