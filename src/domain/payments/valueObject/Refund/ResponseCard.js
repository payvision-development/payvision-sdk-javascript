const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseCard extends ValueObject {
  constructor({
    approvalCode,
    expiryMonth,
    expiryYear,
    firstSixDigits,
    holderName,
    lastFourDigits,
  } = {},
  isResponse) {
    super()
    this.importValue('approvalCode', approvalCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('expiryMonth', expiryMonth, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('expiryYear', expiryYear, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('firstSixDigits', firstSixDigits, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('holderName', holderName, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('lastFourDigits', lastFourDigits, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getApprovalCode() {
    return this.approvalCode
  }
  
  getExpiryMonth() {
    return this.expiryMonth
  }
  
  getExpiryYear() {
    return this.expiryYear
  }
  
  getFirstSixDigits() {
    return this.firstSixDigits
  }
  
  getHolderName() {
    return this.holderName
  }
  
  getLastFourDigits() {
    return this.lastFourDigits
  }
  

}

module.exports = pv_ResponseCard
