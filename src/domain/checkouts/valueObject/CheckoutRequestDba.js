const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutRequestDba extends ValueObject {
  constructor({
    city,
    countryCode,
    email,
    name,
    phoneNumber,
    shortName,
    stateCode,
    street,
    subMerchantId,
    zip,
  } = {},
  isResponse) {
    super()
    this.importValue('city', city, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('countryCode', countryCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('email', email, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('name', name, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('phoneNumber', phoneNumber, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('shortName', shortName, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('stateCode', stateCode, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('street', street, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('subMerchantId', subMerchantId, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('zip', zip, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getCity() {
    return this.city
  }
  
  getCountryCode() {
    return this.countryCode
  }
  
  getEmail() {
    return this.email
  }
  
  getName() {
    return this.name
  }
  
  getPhoneNumber() {
    return this.phoneNumber
  }
  
  getShortName() {
    return this.shortName
  }
  
  getStateCode() {
    return this.stateCode
  }
  
  getStreet() {
    return this.street
  }
  
  getSubMerchantId() {
    return this.subMerchantId
  }
  
  getZip() {
    return this.zip
  }
  

}

module.exports = pv_CheckoutRequestDba
