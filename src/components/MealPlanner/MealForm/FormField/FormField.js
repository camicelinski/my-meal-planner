import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'
// import { getCurrenciesList } from '../../modules/exchangerates/exchangerates.actions'
import Error from '../Error'
import { getRecipesList } from '../../../../modules/spoonacular/spoonacular.actions'
import StyledFormField from './FormField.styled'
import StyledLink from '../../../../styled/components/Link.styled'

const FormField = (props) => {
  const { name, label, type, placeholder, options, required, value, onChange, errors } = props

  const dispatch = useDispatch()
  const activeClass = 'active'

  const getRecipesData = () => {
    dispatch(getRecipesList(''))
  }

  const showErrors = () => {
    return (
      errors.map((error, index) => {
        return (
          error && error.field.name === name ?
            <Error
              key={index}
              text={error.text}
            />
            :
            ''
        )
      })
    )
  }

  const renderFormField = () => {
    return (
      <StyledFormField>
        <label htmlFor={name}>
          {label}
        </label>
        <input
          name={name}
          type={type}
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          disabled={name === 'name'}
        />
        {showErrors()}
      </StyledFormField>
    )
  }

  // ALTERNATIVE SOLUTION TO GENERATE OPTIONS IN SELECT CURRENCY
  // const dispatch = useDispatch()
  // dispatch(getCurrenciesList())
  // const options = useSelector((state) => state.exchangerates.currenciesList)

  if (type === 'select') {
    return (
      <StyledFormField>
        <label htmlFor={name}>
          {label}
        </label>
        <select
          id={name}
          value={value}
          required={required}
          onChange={onChange}
        >
          {options.map((option) => {
            return (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            )
          })}
        </select>
        {showErrors()}
      </StyledFormField>
    )
  } else if (name === 'name') {
    return (
      <>
        {renderFormField()}
        <div className={'btn-container'}>
          <StyledLink
            activeClassName={activeClass}
            to={'/recipes/1'}
          >
            <button>Select from My Recipes</button>
          </StyledLink>
          <StyledLink
            activeClassName={activeClass}
            to={'/find-recipe/1'}
          >
            <button onClick={getRecipesData}>Get New Recipe</button>
          </StyledLink>
        </div>
      </>
    )
  } else {
    return (
      <>
        {renderFormField()}
      </>
    )
  }
}

FormField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  required: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  onChange: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.object)
}

export default FormField
