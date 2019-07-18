const pv_CheckoutResponseRedirect = require('./CheckoutResponseRedirect')
const pv_OneClick = require('./OneClick')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutResponseCheckout extends ValueObject {
  constructor({
    brandIds,
    checkoutId,
    expirationTime,
    redirect,
    oneClick,
    threeDSecure,
    tokenize,
  } = {},
  isResponse) {
    super()
    this.importValue('brandIds', brandIds, { type: 'number', required: isResponse ? false : true, isArray: true })
    this.importValue('checkoutId', checkoutId, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('expirationTime', expirationTime, { type: 'datetime', required: isResponse ? false : true, isArray: false })
    this.importValue('threeDSecure', threeDSecure, { type: 'boolean', required: isResponse ? false : false, isArray: false })
    this.importValue('tokenize', tokenize, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.redirect = redirect instanceof pv_CheckoutResponseRedirect ? redirect : new pv_CheckoutResponseRedirect(redirect, isResponse)
    if (oneClick != null) this.oneClick = oneClick instanceof pv_OneClick ? oneClick : new pv_OneClick(oneClick, isResponse)
  }
  
  getBrandIds() {
    return this.brandIds
  }
  
  getCheckoutId() {
    return this.checkoutId
  }
  
  getExpirationTime() {
    return this.expirationTime
  }
  
  getRedirect() {
    return this.redirect
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

module.exports = pv_CheckoutResponseCheckout
