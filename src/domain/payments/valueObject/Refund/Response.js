const pv_RefundResponseBody = require('../Refund/ResponseBody')
const pv_RefundResponseHeader = require('../Refund/ResponseHeader')
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
    this.body = body instanceof pv_RefundResponseBody ? body : new pv_RefundResponseBody(body, isResponse)
    this.header = header instanceof pv_RefundResponseHeader ? header : new pv_RefundResponseHeader(header, isResponse)
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
