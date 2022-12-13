export function loadMealsAction (meals, type) {
  return {
    type: 'loadMeals',
    payload: { meals, type }
  }
}

export function saveMealAction (meal, type) {
  return {
    type: 'saveMeal',
    payload: { meal, type }
  }
}

export function removeMealAction (id, type) {
  return {
    type: 'removeMeal',
    payload: { id, type }
  }
}

export function updateMealAction (id, meal, type) {
  return {
    type: 'updateMeal',
    payload: { id, meal, type }
  }
}
