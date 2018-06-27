import validate from 'validate.js'

export const validations = (constraints, props = {}) =>
  data => validate(data.toJS(), constraints, props) || {}
