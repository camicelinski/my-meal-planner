import types from './form.types'

export const setFieldValue = (name, value) => {
  return {
    type: types.SET_FIELD_VALUE,
    payload: { name, value }
  }
}

export const clearFields = () => {
  return {
    type: types.CLEAR_FIELDS
  }
}
