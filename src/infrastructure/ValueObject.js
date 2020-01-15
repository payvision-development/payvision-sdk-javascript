/* eslint no-restricted-globals: 0 */
class ValueObject {
  importValue(name, value, options) {
    const type = options.type || 'any'
    const required = options.required || false
    const isArray = options.isArray || false
    this[name] = value
    if (value == null) {
      if (required) {
        throw new Error(`Property [${name}] is required on [${this.constructor.name}]`)
      }
      return value
    }

    if (isArray && !Array.isArray(value)) {
      throw new Error(`Property [${name}] expected an array, got [${typeof value}] on [${this.constructor.name}]`)
    }
    const wrapper = isArray ? value : [value]

    const values = wrapper.map(val => {
      let result = val
      switch (type) {
        case 'string':
          if (typeof val !== 'string') {
            throw new Error(`Property [${name}] expected a string, got [${typeof val}] [${val}] on [${this.constructor.name}]`)
          }
          break
        case 'number':
          result = Number(val)
          if (isNaN(result)) {
            throw new Error(`Property [${name}] expected a number, got [${typeof val}] [${val}] on [${this.constructor.name}]`)
          }
          break
        case 'boolean':
          if (typeof val !== 'boolean') {
            throw new Error(`Property [${name}] expected a boolean, got [${typeof val}] [${val}] on [${this.constructor.name}]`)
          }
          break
        case 'date':
        case 'datetime':
          if (process.env.TARGET_ENVIRONMENT === 'RHINO') {
            // For Rhino we use the date string as is because Date compatibility is lacking there.
            // Since we don't actually use the data in the sdk we can leave it to the end user how it wants to use the date.
            result = val
          } else {
            result = new Date(val)
            if (isNaN(result)) {
              throw new Error(`Property [${name}] expected a date, got [${typeof val}] [${val}] on [${this.constructor.name}]`)
            }
          }
          break
        default:
      }
      return result
    })

    return isArray ? values : values[0]
  }
}

module.exports = ValueObject
