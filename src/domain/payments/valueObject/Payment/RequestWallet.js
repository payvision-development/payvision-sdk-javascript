const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestWallet extends ValueObject {
  constructor({
    accountIdentifier,
    accountKey,
  } = {},
  isResponse) {
    super()
    this.importValue('accountIdentifier', accountIdentifier, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('accountKey', accountKey, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getAccountIdentifier() {
    return this.accountIdentifier
  }
  
  getAccountKey() {
    return this.accountKey
  }
  

}

module.exports = pv_RequestWallet
