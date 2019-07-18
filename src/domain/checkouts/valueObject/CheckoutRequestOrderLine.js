const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutRequestOrderLine extends ValueObject {
  constructor({
    currencyCode,
    description,
    discountAmount,
    itemAmount,
    productCode,
    productName,
    purchaseType,
    quantity,
    sequenceNumber,
    shippingAmount,
    taxPercentage,
    totalAmount,
  } = {},
  isResponse) {
    super()
    this.importValue('currencyCode', currencyCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('description', description, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('discountAmount', discountAmount, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('itemAmount', itemAmount, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('productCode', productCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('productName', productName, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('purchaseType', purchaseType, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('quantity', quantity, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('sequenceNumber', sequenceNumber, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('shippingAmount', shippingAmount, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('taxPercentage', taxPercentage, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('totalAmount', totalAmount, { type: 'number', required: isResponse ? false : false, isArray: false })
  }
  
  getCurrencyCode() {
    return this.currencyCode
  }
  
  getDescription() {
    return this.description
  }
  
  getDiscountAmount() {
    return this.discountAmount
  }
  
  getItemAmount() {
    return this.itemAmount
  }
  
  getProductCode() {
    return this.productCode
  }
  
  getProductName() {
    return this.productName
  }
  
  getPurchaseType() {
    return this.purchaseType
  }
  
  getQuantity() {
    return this.quantity
  }
  
  getSequenceNumber() {
    return this.sequenceNumber
  }
  
  getShippingAmount() {
    return this.shippingAmount
  }
  
  getTaxPercentage() {
    return this.taxPercentage
  }
  
  getTotalAmount() {
    return this.totalAmount
  }
  

}

module.exports = pv_CheckoutRequestOrderLine
