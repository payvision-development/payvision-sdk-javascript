const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestTransaction extends ValueObject {
  constructor({
    amount,
    trackingCode,
    currencyCode,
    returnUrl,
    tokenize,
    token,
    storeId,
    source,
    payTimeout,
    purchaseId,
    brandId,
    notifyUrl,
    languageCode,
    invoiceId,
    descriptor,
    countryCode,
    type,
  } = {},
  isResponse) {
    super()
    this.importValue('amount', amount, { type: 'number', required: isResponse ? false : true, isArray: false })
    this.importValue('trackingCode', trackingCode, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('currencyCode', currencyCode, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('returnUrl', returnUrl, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('tokenize', tokenize, { type: 'boolean', required: isResponse ? false : false, isArray: false })
    this.importValue('token', token, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('storeId', storeId, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('source', source, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('payTimeout', payTimeout, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('purchaseId', purchaseId, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('brandId', brandId, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('notifyUrl', notifyUrl, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('languageCode', languageCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('invoiceId', invoiceId, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('descriptor', descriptor, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('countryCode', countryCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('type', type, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getAmount() {
    return this.amount
  }
  
  getTrackingCode() {
    return this.trackingCode
  }
  
  getCurrencyCode() {
    return this.currencyCode
  }
  
  getReturnUrl() {
    return this.returnUrl
  }
  
  getTokenize() {
    return this.tokenize
  }
  
  getToken() {
    return this.token
  }
  
  getStoreId() {
    return this.storeId
  }
  
  getSource() {
    return this.source
  }
  
  getPayTimeout() {
    return this.payTimeout
  }
  
  getPurchaseId() {
    return this.purchaseId
  }
  
  getBrandId() {
    return this.brandId
  }
  
  getNotifyUrl() {
    return this.notifyUrl
  }
  
  getLanguageCode() {
    return this.languageCode
  }
  
  getInvoiceId() {
    return this.invoiceId
  }
  
  getDescriptor() {
    return this.descriptor
  }
  
  getCountryCode() {
    return this.countryCode
  }
  
  getType() {
    return this.type
  }
  

}

module.exports = pv_RequestTransaction
