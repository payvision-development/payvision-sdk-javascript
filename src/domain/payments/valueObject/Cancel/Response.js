const pv_CancelResponseBody = require('../Cancel/ResponseBody')
const pv_CancelResponseHeader = require('../Cancel/ResponseHeader')
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
    this.body = body instanceof pv_CancelResponseBody ? body : new pv_CancelResponseBody(body, isResponse)
    this.header = header instanceof pv_CancelResponseHeader ? header : new pv_CancelResponseHeader(header, isResponse)
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
