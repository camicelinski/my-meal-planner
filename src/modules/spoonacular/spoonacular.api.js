class SpoonacularAPI {
  url = 'https://api.spoonacular.com/recipes'
  key = '107b9170dd4e4a1b90adcd0d06f9b086'

  getRecipes = (phrase) => {
    return this._fetch(`/complexSearch?query=${phrase}&apiKey=${this.key}&instructionsRequired=true&addRecipeInformation=true&sort=popularity&sortDirection=desc&number=10`)
  }

  getRecipe = (id) => {
    return this._fetch(`/${id}/information?includeNutrition=false&apiKey=${this.key}`)
  }

  handleErrors (resp) {
    if (!resp.ok) {
      throw Error(resp.statusText)
    }

    return resp
  }

  _fetch (additionalPath = '') {
    const url = this.url + additionalPath

    return fetch(url)
      .then(this.handleErrors)
      .then((resp) => resp.json())
  }
}

export default SpoonacularAPI
