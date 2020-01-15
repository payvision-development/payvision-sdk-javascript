const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseToken extends ValueObject {
  constructor({
    displayHint,
    token,
  } = {},
  isResponse) {
    super()
    this.importValue('displayHint', displayHint, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('token', token, { type: 'string', required: isResponse ? false : true, isArray: false })
  }
  
  getDisplayHint() {
    return this.displayHint
  }
  
  getToken() {
    return this.token
  }
  

}

module.exports = pv_ResponseToken
