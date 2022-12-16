import styled from 'styled-components'

const StyledDailyMealPlan = styled.div`
  padding: 10px 30px;
  margin: auto;
  width: cal(100% - 40px);
  max-width: 1024px;

  .meal-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid var(--border-calendar);
  }

  .meal-info:last-child {
    border-bottom: none;
  }

  .meal-info .meal-type,
  .meal-info .meal-servings {
    width: 20%;
  }

  .meal-type {
    margin-left: 10px;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
  }

  .meal-note {
    font-size: 0.85rem;
    margin-top: 5px;
  }

  .meal-info .meal-name-and-note {
    width: 60%;
  }

  .breakfast {
    color: var(--meal-breakfast);
  }

  .elevenses {
    color: var(--meal-elevenses);
  }

  .lunch {
    color: var(--meal-lunch);
  }

  .snacks {
    color: var(--meal-snacks);
  }

  .dinner {
    color: var(--meal-dinner);
  }

  .meal-servings {
    font-size: 0.85rem;
    text-align: right;
    margin-right: 10px;
  }

  .deleteMealItem {
    margin-left: 12px;
  }

  .btn.deleteMeal {
    max-width: 100px;
    border: 0;
    color: var(--text-secondary);
    padding: 10px;
    font-size: 0.85rem;
    cursor: pointer;
    border-radius: var(--radius-secondary);
    background: var(--bg-calendar);
    transition: var(--transition-style);
  }

  .btn.deleteMeal:hover {
    background: var(--border-calendar);
  }
`

export default StyledDailyMealPlan
