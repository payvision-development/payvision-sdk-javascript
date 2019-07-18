const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestCard extends ValueObject {
  constructor({
    cvv,
    expiryMonth,
    expiryYear,
    holderName,
    issueNumber,
    number,
  } = {},
  isResponse) {
    super()
    this.importValue('cvv', cvv, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('expiryMonth', expiryMonth, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('expiryYear', expiryYear, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('holderName', holderName, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('issueNumber', issueNumber, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('number', number, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getCvv() {
    return this.cvv
  }
  
  getExpiryMonth() {
    return this.expiryMonth
  }
  
  getExpiryYear() {
    return this.expiryYear
  }
  
  getHolderName() {
    return this.holderName
  }
  
  getIssueNumber() {
    return this.issueNumber
  }
  
  getNumber() {
    return this.number
  }
  

}

module.exports = pv_RequestCard
