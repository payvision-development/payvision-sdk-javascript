const ValueObject = require('../../../infrastructure/ValueObject')

class pv_StatusResponseHeader extends ValueObject {
  constructor({
    requestTimestamp,
    requestCode,
  } = {},
  isResponse) {
    super()
    this.importValue('requestTimestamp', requestTimestamp, { type: 'datetime', required: isResponse ? false : true, isArray: false })
    this.importValue('requestCode', requestCode, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getRequestTimestamp() {
    return this.requestTimestamp
  }
  
  getRequestCode() {
    return this.requestCode
  }
  

}

module.exports = pv_StatusResponseHeader
