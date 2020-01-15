const pv_LinkResponsePaymentBody = require('./LinkResponsePaymentBody')
const pv_LinkResponsePaymentHeader = require('./LinkResponsePaymentHeader')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_LinkResponsePayment extends ValueObject {
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
    this.body = body instanceof pv_LinkResponsePaymentBody ? body : new pv_LinkResponsePaymentBody(body, isResponse)
    this.header = header instanceof pv_LinkResponsePaymentHeader ? header : new pv_LinkResponsePaymentHeader(header, isResponse)
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

module.exports = pv_LinkResponsePayment
