const ValueObject = require('../../../infrastructure/ValueObject')

class pv_Error extends ValueObject {
  constructor({
    code,
    message,
  } = {},
  isResponse) {
    super()
    this.importValue('code', code, { type: 'number', required: isResponse ? false : true, isArray: false })
    this.importValue('message', message, { type: 'string', required: isResponse ? false : true, isArray: false })
  }
  
  getCode() {
    return this.code
  }
  
  getMessage() {
    return this.message
  }
  

}

module.exports = pv_Error
