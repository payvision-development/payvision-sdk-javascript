const pv_PaymentResponseBody = require('../Payment/ResponseBody')
const pv_PaymentResponseHeader = require('../Payment/ResponseHeader')
const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_Response extends ValueObject {
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
    this.body = body instanceof pv_PaymentResponseBody ? body : new pv_PaymentResponseBody(body, isResponse)
    this.header = header instanceof pv_PaymentResponseHeader ? header : new pv_PaymentResponseHeader(header, isResponse)
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

module.exports = pv_Response
