const ValueObject = require('../../../src/infrastructure/ValueObject')

describe('ValueObject', () => {
  let vo
  beforeEach(() => {
    vo = new ValueObject()
  })

  describe('validates', () => {
    it('required', () => {
      expect(() => vo.importValue('testVal', 123, { type: 'type', required: true })).not.toThrow()
      expect(() => vo.importValue('testVal', 123, { type: 'type', required: false })).not.toThrow()
      expect(() => vo.importValue('testVal', undefined, { type: 'type', required: false })).not.toThrow()
      expect(() => vo.importValue('testVal', undefined, { type: 'type', required: true })).toThrowErrorMatchingSnapshot()
    })

    it('type string', () => {
      expect(() => vo.importValue('testVal', '123', { type: 'string', required: true })).not.toThrow()
      expect(() => vo.importValue('testVal', '', { type: 'string', required: true })).not.toThrow()
      expect(() => vo.importValue('testVal', 123, { type: 'string', required: true })).toThrowErrorMatchingSnapshot()
      expect(() => vo.importValue('testVal', true, { type: 'string', required: true })).toThrowErrorMatchingSnapshot()
      expect(() => vo.importValue('testVal', true, { type: 'string', required: true })).toThrowErrorMatchingSnapshot()
    })
  })
})
