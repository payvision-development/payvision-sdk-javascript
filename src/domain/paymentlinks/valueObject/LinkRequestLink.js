const ValueObject = require('../../../infrastructure/ValueObject')

class pv_LinkRequestLink extends ValueObject {
  constructor({
    brandIds,
    returnUrl,
    duration,
    expirationTime,
  } = {},
  isResponse) {
    super()
    this.importValue('brandIds', brandIds, { type: 'number', required: isResponse ? false : true, isArray: true })
    this.importValue('returnUrl', returnUrl, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('duration', duration, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('expirationTime', expirationTime, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getBrandIds() {
    return this.brandIds
  }
  
  getReturnUrl() {
    return this.returnUrl
  }
  
  getDuration() {
    return this.duration
  }
  
  getExpirationTime() {
    return this.expirationTime
  }
  

}

module.exports = pv_LinkRequestLink
