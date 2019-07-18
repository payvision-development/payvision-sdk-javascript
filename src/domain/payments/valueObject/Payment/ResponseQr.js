const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseQr extends ValueObject {
  constructor({
    resource,
  } = {},
  isResponse) {
    super()
    this.importValue('resource', resource, { type: 'string', required: isResponse ? false : true, isArray: false })
  }
  
  getResource() {
    return this.resource
  }
  

}

module.exports = pv_ResponseQr
