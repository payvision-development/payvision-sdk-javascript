const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestThreeDSecure extends ValueObject {
  constructor({
    avv,
    checkEnrollment,
    eci,
    xid,
  } = {},
  isResponse) {
    super()
    this.importValue('avv', avv, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('checkEnrollment', checkEnrollment, { type: 'boolean', required: isResponse ? false : false, isArray: false })
    this.importValue('eci', eci, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('xid', xid, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getAvv() {
    return this.avv
  }
  
  getCheckEnrollment() {
    return this.checkEnrollment
  }
  
  getEci() {
    return this.eci
  }
  
  getXid() {
    return this.xid
  }
  

}

module.exports = pv_RequestThreeDSecure
