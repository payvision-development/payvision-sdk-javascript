const ValueObject = require('../../../infrastructure/ValueObject')

class pv_OneClick extends ValueObject {
  constructor({
    requireCvv,
    threeDSecure,
    tokens,
    useCustomerTokens,
  } = {},
  isResponse) {
    super()
    this.importValue('requireCvv', requireCvv, { type: 'boolean', required: isResponse ? false : false, isArray: false })
    this.importValue('threeDSecure', threeDSecure, { type: 'boolean', required: isResponse ? false : false, isArray: false })
    this.importValue('tokens', tokens, { type: 'string', required: isResponse ? false : false, isArray: true })
    this.importValue('useCustomerTokens', useCustomerTokens, { type: 'boolean', required: isResponse ? false : false, isArray: false })
  }
  
  getRequireCvv() {
    return this.requireCvv
  }
  
  getThreeDSecure() {
    return this.threeDSecure
  }
  
  getTokens() {
    return this.tokens
  }
  
  getUseCustomerTokens() {
    return this.useCustomerTokens
  }
  

}

module.exports = pv_OneClick
