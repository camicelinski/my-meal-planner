export class MealPlannerAPI {
  constructor () {
    this.url = 'http://localhost:3005'
  }

  load (additionalPath) {
    return this._fetch(additionalPath)
  }

  add (additionalPath, data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }

    return this._fetch(additionalPath, options)
  }

  remove (additionalPath, id) {
    const options = { method: 'DELETE' }
    return this._fetch(`${additionalPath}/${id}`, options)
  }

  update (id, data) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }
    return this._fetch(options, `/${id}`)
  }

  filter (field, value) {
    const options = {
      method: 'GET'
    }
    return this._fetch(options, `?${field}_like=${value}`)
  }

  _fetch (additionalPath = '', options) {
    const url = this.url + additionalPath
    return fetch(url, options)
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
        return Promise.reject(resp)
      })
      .catch((err) => console.log(err))
  }
}

export default MealPlannerAPI
