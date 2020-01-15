const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutRequestBillingAddress extends ValueObject {
  constructor({
    city,
    countryCode,
    houseNumber,
    houseNumberSuffix,
    stateCode,
    street,
    streetInfo,
    zip,
  } = {},
  isResponse) {
    super()
    this.importValue('city', city, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('countryCode', countryCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('houseNumber', houseNumber, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('houseNumberSuffix', houseNumberSuffix, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('stateCode', stateCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('street', street, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('streetInfo', streetInfo, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('zip', zip, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getCity() {
    return this.city
  }
  
  getCountryCode() {
    return this.countryCode
  }
  
  getHouseNumber() {
    return this.houseNumber
  }
  
  getHouseNumberSuffix() {
    return this.houseNumberSuffix
  }
  
  getStateCode() {
    return this.stateCode
  }
  
  getStreet() {
    return this.street
  }
  
  getStreetInfo() {
    return this.streetInfo
  }
  
  getZip() {
    return this.zip
  }
  

}

module.exports = pv_CheckoutRequestBillingAddress
