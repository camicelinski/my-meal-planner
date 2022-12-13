import formFields from '../../data/formFields'
import formTypes from './form.types'

function setInitState () {
  const objState = {}
  formFields.forEach((field) => {
    objState[field.name] = ''
  })
  return objState
}

const reducer = (state = setInitState(), action) => {
  switch (action.type) {
    case formTypes.SET_FIELD_VALUE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    case formTypes.CLEAR_FIELDS:
      state = setInitState()
      return state
    default:
      return state
  }
}

export default reducer
