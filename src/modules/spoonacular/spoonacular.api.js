class SpoonacularAPI {
  url = 'https://api.spoonacular.com/recipes'
  key = '79f02f4be50147b08fa604369eee1cad'
  keymeuceu = 'f88ceda720b349d39340db4552581345'
  keycami = '77f512dfac8d4076bb4aa7d86ec3718c'

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
