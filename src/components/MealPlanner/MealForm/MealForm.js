/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import FormField from './FormField'
import Modal from '../../General/Modal'

import MealPlannerAPI from '../../../modules/mealPlanner/mealPlanner.api'
import { setFieldValue, clearFields } from '../../../modules/form/form.actions'
import { getMyMeals } from '../../../modules/mealPlanner/mealPlanner.actions'

import validateForm from '../../../helpers/validateForm'
import { dateToInputFormat } from '../../../helpers/calendarHelpers'

import formFields from '../../../data/formFields'

const MealForm = ({ setIsLoading, setShowingMealForm, addMeal, editMeal, withMeal, setViewingMeal, preselectedDate }) => {
  const newMeal = withMeal || {}
  if (!withMeal && !!preselectedDate) {
    newMeal.date = dateToInputFormat(preselectedDate)
  }

  const values = useSelector((state) => state.form)

  const [errors, setErrors] = React.useState([])

  const dispatch = useDispatch()

  const mealPlannerAPI = new MealPlannerAPI()

  React.useEffect(() => {
    dispatch(getMyMeals())
  }, [])

  const handleInputChange = (e, name, type) => {
    dispatch(setFieldValue(name, e.target.value))
  }

  const renderFormFields = () => {
    return formFields.map((field) => {
      const { name, label, type, placeholder, options, required } = field
      return (
        <FormField
          key={name}
          name={name}
          label={label}
          type={type}
          value={values[name]}
          placeholder={placeholder || null}
          options={options}
          required={required}
          onChange={(e) => handleInputChange(e, name, type)}
          errors = {errors}
        />
      )
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validateForm(values)
    setErrors(err)
    if (err.length === 0) {
      setIsLoading(true)
      mealPlannerAPI.add('/meals', values).then(() => dispatch(getMyMeals()))
      dispatch(clearFields())
      setShowingMealForm({ visible: false })
      setIsLoading(false)
    }
  }

  return (
    <Modal
      onClose={() => setShowingMealForm({ visible: false })}
      title={`${withMeal ? 'Edit meal' : 'Add a new meal'}`}
    >
      <form
        className={'form'}
        noValidate
      >
        {renderFormFields()}

        {withMeal
          ? (
            <div className={'btn-container'}>
              <button onClick={() => editMeal(values)}>Edit meal</button>
              <button
                className={'close'}
                onClick={() => {
                  setShowingMealForm({ visible: false })
                  setViewingMeal(values)
                }}
              >
                Cancel (go back to meal view)
              </button>
            </div>
            )
          : (
            <div className={'btn-container'}>
              <button
                onClick={handleSubmit}
                type={'submit'}
              >
                Add meal
              </button>
              <button
                className={'close'}
                onClick={() => setShowingMealForm({ visible: false })}
              >
                Cancel (go back to calendar)
              </button>
            </div>
            )}
      </form>
    </Modal>
  )
}

export default MealForm
