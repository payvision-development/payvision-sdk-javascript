const ValueObject = require('../../../infrastructure/ValueObject')

class pv_BasicAddress extends ValueObject {
  constructor({
    ipAddress,
    birthDate,
    companyName,
    customerId,
    deviceType,
    email,
    familyName,
    givenName,
    httpUserAgent,
    identificationNumber,
    identificationTypeId,
    mobileNumber,
    phoneNumber,
    sex,
    taxNumber,
    type,
  } = {},
  isResponse) {
    super()
    this.importValue('ipAddress', ipAddress, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('birthDate', birthDate, { type: 'datetime', required: isResponse ? false : false, isArray: false })
    this.importValue('companyName', companyName, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('customerId', customerId, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('deviceType', deviceType, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('email', email, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('familyName', familyName, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('givenName', givenName, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('httpUserAgent', httpUserAgent, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('identificationNumber', identificationNumber, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('identificationTypeId', identificationTypeId, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('mobileNumber', mobileNumber, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('phoneNumber', phoneNumber, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('sex', sex, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('taxNumber', taxNumber, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('type', type, { type: 'number', required: isResponse ? false : false, isArray: false })
  }
  
  getIpAddress() {
    return this.ipAddress
  }
  
  getBirthDate() {
    return this.birthDate
  }
  
  getCompanyName() {
    return this.companyName
  }
  
  getCustomerId() {
    return this.customerId
  }
  
  getDeviceType() {
    return this.deviceType
  }
  
  getEmail() {
    return this.email
  }
  
  getFamilyName() {
    return this.familyName
  }
  
  getGivenName() {
    return this.givenName
  }
  
  getHttpUserAgent() {
    return this.httpUserAgent
  }
  
  getIdentificationNumber() {
    return this.identificationNumber
  }
  
  getIdentificationTypeId() {
    return this.identificationTypeId
  }
  
  getMobileNumber() {
    return this.mobileNumber
  }
  
  getPhoneNumber() {
    return this.phoneNumber
  }
  
  getSex() {
    return this.sex
  }
  
  getTaxNumber() {
    return this.taxNumber
  }
  
  getType() {
    return this.type
  }
  

}

module.exports = pv_BasicAddress
