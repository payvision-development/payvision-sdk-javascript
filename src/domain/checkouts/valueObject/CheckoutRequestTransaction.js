const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutRequestTransaction extends ValueObject {
  constructor({
    amount,
    authorizationMode,
    currencyCode,
    trackingCode,
    countryCode,
    descriptor,
    invoiceId,
    languageCode,
    notifyUrl,
    purchaseId,
    source,
    storeId,
    type,
  } = {},
  isResponse) {
    super()
    this.importValue('amount', amount, { type: 'number', required: isResponse ? false : true, isArray: false })
    this.importValue('authorizationMode', authorizationMode, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('currencyCode', currencyCode, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('trackingCode', trackingCode, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('countryCode', countryCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('descriptor', descriptor, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('invoiceId', invoiceId, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('languageCode', languageCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('notifyUrl', notifyUrl, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('purchaseId', purchaseId, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('source', source, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('storeId', storeId, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('type', type, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getAmount() {
    return this.amount
  }
  
  getAuthorizationMode() {
    return this.authorizationMode
  }
  
  getCurrencyCode() {
    return this.currencyCode
  }
  
  getTrackingCode() {
    return this.trackingCode
  }
  
  getCountryCode() {
    return this.countryCode
  }
  
  getDescriptor() {
    return this.descriptor
  }
  
  getInvoiceId() {
    return this.invoiceId
  }
  
  getLanguageCode() {
    return this.languageCode
  }
  
  getNotifyUrl() {
    return this.notifyUrl
  }
  
  getPurchaseId() {
    return this.purchaseId
  }
  
  getSource() {
    return this.source
  }
  
  getStoreId() {
    return this.storeId
  }
  
  getType() {
    return this.type
  }
  

}

module.exports = pv_CheckoutRequestTransaction
