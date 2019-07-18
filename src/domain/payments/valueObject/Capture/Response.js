const pv_CaptureResponseBody = require('../Capture/ResponseBody')
const pv_CaptureResponseHeader = require('../Capture/ResponseHeader')
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
    this.body = body instanceof pv_CaptureResponseBody ? body : new pv_CaptureResponseBody(body, isResponse)
    this.header = header instanceof pv_CaptureResponseHeader ? header : new pv_CaptureResponseHeader(header, isResponse)
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
