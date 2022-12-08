import types from './spoonacular.types'
import ExchangeratesAPI from './spoonacular.api'

const ratesAPI = new ExchangeratesAPI()

export const setCurrentRate = (rate) => {
  return {
    type: types.SET_CURRENT_RATE,
    payload: rate.toFixed(2)
  }
}

export const setRateByDate = (rate) => {
  return {
    type: types.SET_PRICE_BY_DATE,
    payload: rate.toFixed(2)
  }
}

export const setCurrenciesList = (rates) => {
  return {
    type: types.SET_CURRENCIES_LIST,
    payload: Object.keys(rates)
  }
}

export const getCurrentRate = (currency) => (dispatch, getState) => {
  ratesAPI.getRate(currency)
    .then((resp) => dispatch(setCurrentRate(resp.rates.PLN)))
}

export const getPriceByDate = (date, currency) => (dispatch, getState) => {
  ratesAPI.getRatebyDate(date, currency)
    .then((resp) => dispatch(setRateByDate(resp.rates.PLN)))
}

export const getCurrenciesList = () => (dispatch, getState) => {
  ratesAPI.getCurrenciesList()
    .then((resp) => dispatch(setCurrenciesList(resp.rates)))
}
