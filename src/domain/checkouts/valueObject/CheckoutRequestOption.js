const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutRequestOption extends ValueObject {
  constructor({
    brandName,
    cartBorderColor,
    countryRestriction,
    headerImage,
    locale,
    minAgeRestriction,
    noShipping,
    processingType,
    quantity,
  } = {},
  isResponse) {
    super()
    this.importValue('brandName', brandName, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('cartBorderColor', cartBorderColor, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('countryRestriction', countryRestriction, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('headerImage', headerImage, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('locale', locale, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('minAgeRestriction', minAgeRestriction, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('noShipping', noShipping, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('processingType', processingType, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('quantity', quantity, { type: 'number', required: isResponse ? false : false, isArray: false })
  }
  
  getBrandName() {
    return this.brandName
  }
  
  getCartBorderColor() {
    return this.cartBorderColor
  }
  
  getCountryRestriction() {
    return this.countryRestriction
  }
  
  getHeaderImage() {
    return this.headerImage
  }
  
  getLocale() {
    return this.locale
  }
  
  getMinAgeRestriction() {
    return this.minAgeRestriction
  }
  
  getNoShipping() {
    return this.noShipping
  }
  
  getProcessingType() {
    return this.processingType
  }
  
  getQuantity() {
    return this.quantity
  }
  

}

module.exports = pv_CheckoutRequestOption
