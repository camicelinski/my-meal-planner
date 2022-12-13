import formFields from '../data/formFields'
import { getCurrentDate } from './helperFunctions'

const validateForm = (values) => {
  const errors = []
  const currentDate = getCurrentDate()

  formFields.forEach(field => {
    const { name, type, required, regExp, err } = field
    const value = values[name]

    if (required) {
      if (value.length === 0) {
        errors.push({
          text: 'this field is mandatory',
          field: field
        })
      } else if (type === 'number' && (value <= 0 || isNaN(value))) {
        errors.push({
          text: err,
          field: field
        })
      }
    }

    if (regExp && value.length > 0) {
      const reg = new RegExp(regExp)
      if (!reg.test(value)) {
        errors.push({
          text: err,
          field: field
        })
      }
    }

    if (type === 'date' && value > currentDate) {
      errors.push({
        text: err,
        field: field
      })
    }
  })

  return errors
}

export default validateForm
