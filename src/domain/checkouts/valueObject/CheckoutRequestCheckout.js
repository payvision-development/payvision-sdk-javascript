const pv_OneClick = require('./OneClick')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutRequestCheckout extends ValueObject {
  constructor({
    brandIds,
    returnUrl,
    oneClick,
    threeDSecure,
    tokenize,
  } = {},
  isResponse) {
    super()
    this.importValue('brandIds', brandIds, { type: 'number', required: isResponse ? false : true, isArray: true })
    this.importValue('returnUrl', returnUrl, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('threeDSecure', threeDSecure, { type: 'boolean', required: isResponse ? false : false, isArray: false })
    this.importValue('tokenize', tokenize, { type: 'string', required: isResponse ? false : false, isArray: false })
    if (oneClick != null) this.oneClick = oneClick instanceof pv_OneClick ? oneClick : new pv_OneClick(oneClick, isResponse)
  }
  
  getBrandIds() {
    return this.brandIds
  }
  
  getReturnUrl() {
    return this.returnUrl
  }
  
  getOneClick() {
    return this.oneClick
  }
  
  getThreeDSecure() {
    return this.threeDSecure
  }
  
  getTokenize() {
    return this.tokenize
  }
  

}

module.exports = pv_CheckoutRequestCheckout
