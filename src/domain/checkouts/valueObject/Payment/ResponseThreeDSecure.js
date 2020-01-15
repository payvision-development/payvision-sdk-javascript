const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseThreeDSecure extends ValueObject {
  constructor({
    enrollmentResult,
    validationResult,
  } = {},
  isResponse) {
    super()
    this.importValue('enrollmentResult', enrollmentResult, { type: 'string', required: isResponse ? false : false, isArray: false })
    this.importValue('validationResult', validationResult, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getEnrollmentResult() {
    return this.enrollmentResult
  }
  
  getValidationResult() {
    return this.validationResult
  }
  

}

module.exports = pv_ResponseThreeDSecure
