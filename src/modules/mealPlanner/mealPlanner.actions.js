export function loadMealsAction (meals) {
  return {
    type: 'loadMeals',
    payload: { meals }
  }
}

export function saveMealAction (meal) {
  return {
    type: 'saveMeal',
    payload: { meal }
  }
}

export function removeMealAction (id) {
  return {
    type: 'removeMeal',
    payload: { id }
  }
}

export function updateMealAction (id, meal) {
  return {
    type: 'updateMeal',
    payload: { id, meal }
  }
}
