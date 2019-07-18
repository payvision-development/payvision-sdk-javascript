const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseBank extends ValueObject {
  constructor({
    accountHolderName,
    accountNumber,
    bic,
    countryCode,
    iban,
    name,
  } = {},
  isResponse) {
    super()
    this.importValue('accountHolderName', accountHolderName, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('accountNumber', accountNumber, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('bic', bic, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('countryCode', countryCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('iban', iban, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('name', name, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getAccountHolderName() {
    return this.accountHolderName
  }
  
  getAccountNumber() {
    return this.accountNumber
  }
  
  getBic() {
    return this.bic
  }
  
  getCountryCode() {
    return this.countryCode
  }
  
  getIban() {
    return this.iban
  }
  
  getName() {
    return this.name
  }
  

}

module.exports = pv_ResponseBank
