const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseCard extends ValueObject {
  constructor({
    approvalCode,
    avsAuthorizationEntity,
    avsResult,
    cvvResult,
    expiryMonth,
    expiryYear,
    firstSixDigits,
    holderName,
    lastFourDigits,
    recurringAdvice,
    threeDResult,
  } = {},
  isResponse) {
    super()
    this.importValue('approvalCode', approvalCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('avsAuthorizationEntity', avsAuthorizationEntity, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('avsResult', avsResult, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('cvvResult', cvvResult, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('expiryMonth', expiryMonth, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('expiryYear', expiryYear, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('firstSixDigits', firstSixDigits, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('holderName', holderName, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('lastFourDigits', lastFourDigits, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('recurringAdvice', recurringAdvice, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('threeDResult', threeDResult, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getApprovalCode() {
    return this.approvalCode
  }
  
  getAvsAuthorizationEntity() {
    return this.avsAuthorizationEntity
  }
  
  getAvsResult() {
    return this.avsResult
  }
  
  getCvvResult() {
    return this.cvvResult
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
  
  getRecurringAdvice() {
    return this.recurringAdvice
  }
  
  getThreeDResult() {
    return this.threeDResult
  }
  

}

module.exports = pv_ResponseCard
