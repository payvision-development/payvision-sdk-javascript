const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseRedirect extends ValueObject {
  constructor({
    fields,
    method,
    url,
  } = {},
  isResponse) {
    super()
    this.importValue('fields', fields, { type: 'any', required: isResponse ? false : false, isArray: false })
    this.importValue('method', method, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('url', url, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getFields() {
    return this.fields
  }
  
  getMethod() {
    return this.method
  }
  
  getUrl() {
    return this.url
  }
  

}

module.exports = pv_ResponseRedirect
