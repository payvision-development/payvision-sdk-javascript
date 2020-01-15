const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestQr extends ValueObject {
  constructor({
    generate,
    size,
  } = {},
  isResponse) {
    super()
    this.importValue('generate', generate, { type: 'boolean', required: isResponse ? false : true, isArray: false })
    this.importValue('size', size, { type: 'number', required: isResponse ? false : false, isArray: false })
  }
  
  getGenerate() {
    return this.generate
  }
  
  getSize() {
    return this.size
  }
  

}

module.exports = pv_RequestQr
