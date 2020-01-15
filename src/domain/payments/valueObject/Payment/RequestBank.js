const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestBank extends ValueObject {
  constructor({
    accountHolderName,
    accountNumber,
    bankCode,
    bic,
    countryCode,
    dateCollection,
    dateMandateSigned,
    iban,
    issuerId,
    mandateId,
    name,
  } = {},
  isResponse) {
    super()
    this.importValue('accountHolderName', accountHolderName, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('accountNumber', accountNumber, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('bankCode', bankCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('bic', bic, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('countryCode', countryCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('dateCollection', dateCollection, { type: 'datetime', required: isResponse ? false : false, isArray: false })
    this.importValue('dateMandateSigned', dateMandateSigned, { type: 'datetime', required: isResponse ? false : false, isArray: false })
    this.importValue('iban', iban, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('issuerId', issuerId, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('mandateId', mandateId, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('name', name, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getAccountHolderName() {
    return this.accountHolderName
  }
  
  getAccountNumber() {
    return this.accountNumber
  }
  
  getBankCode() {
    return this.bankCode
  }
  
  getBic() {
    return this.bic
  }
  
  getCountryCode() {
    return this.countryCode
  }
  
  getDateCollection() {
    return this.dateCollection
  }
  
  getDateMandateSigned() {
    return this.dateMandateSigned
  }
  
  getIban() {
    return this.iban
  }
  
  getIssuerId() {
    return this.issuerId
  }
  
  getMandateId() {
    return this.mandateId
  }
  
  getName() {
    return this.name
  }
  

}

module.exports = pv_RequestBank
