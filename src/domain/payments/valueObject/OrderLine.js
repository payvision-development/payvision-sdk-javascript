const ValueObject = require('../../../infrastructure/ValueObject')

class pv_OrderLine extends ValueObject {
  constructor({
    description,
    productCode,
    purchaseType,
    quantity,
    taxPercentage,
    totalAmount,
  } = {},
  isResponse) {
    super()
    this.importValue('description', description, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('productCode', productCode, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('purchaseType', purchaseType, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('quantity', quantity, { type: 'number', required: isResponse ? false : true, isArray: false })
    this.importValue('taxPercentage', taxPercentage, { type: 'number', required: isResponse ? false : true, isArray: false })
    this.importValue('totalAmount', totalAmount, { type: 'number', required: isResponse ? false : true, isArray: false })
  }
  
  getDescription() {
    return this.description
  }
  
  getProductCode() {
    return this.productCode
  }
  
  getPurchaseType() {
    return this.purchaseType
  }
  
  getQuantity() {
    return this.quantity
  }
  
  getTaxPercentage() {
    return this.taxPercentage
  }
  
  getTotalAmount() {
    return this.totalAmount
  }
  

}

module.exports = pv_OrderLine
