const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseToken extends ValueObject {
  constructor({
    displayHint,
    newToken,
    token,
  } = {},
  isResponse) {
    super()
    this.importValue('displayHint', displayHint, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('newToken', newToken, { type: 'boolean', required: isResponse ? false : true, isArray: false })
    this.importValue('token', token, { type: 'string', required: isResponse ? false : true, isArray: false })
  }
  
  getDisplayHint() {
    return this.displayHint
  }
  
  getNewToken() {
    return this.newToken
  }
  
  getToken() {
    return this.token
  }
  

}

module.exports = pv_ResponseToken
