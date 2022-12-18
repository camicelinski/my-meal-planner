import styled from 'styled-components'

const StyledDailyMealPlan = styled.div`
  padding: 5px;
  margin: auto;  

  @media screen and (min-width: 768px) {
    width: cal(100% - 40px);
    padding: 10px 30px;
    max-width: 1024px;
  }

  .meal-info {
    display: flex;
    flex-wrap: wrap;    
    align-items: center;
    padding: 20px 0;    
    position: relative;

    @media screen and (min-width: 768px) {
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }

  .meal-info-container {
    border-top: 1px solid var(--border-calendar);
  }

  .meal-info-container:first-child {
    border-top: none;
  }

  .meal-info .meal-type,
  .meal-info .meal-servings {
    width: 20%;
  }
  
  .meal-servings {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      font-size: 0.85rem;
      text-align: right;
      margin-right: 10px;
    }
  }

  .meal-type {
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.05rem;

    @media screen and (min-width: 768px) {
      margin-left: 10px;
    }
  }

  .meal-note {
    font-size: 0.85rem;
    margin-top: 5px;
  }

  .meal-info .meal-name-and-note {
    width: 100%;
    margin-right: 30px;

    @media screen and (min-width: 768px) {
      width: 60%;      
      margin-right: 0;
    }
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

  .deleteMealItem {
    position: absolute;
    bottom: 20px;
    right: 0;

    @media screen and (min-width: 768px) {
      position: static;
      margin-left: 12px;
    }
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

  button {
    width: 100%;
    border: 0;
    color: var(--text-secondary);
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;    
    font-size: 0.9rem;
    width: 100%;
    margin: 3px 0;
    background-color: var(--bg-calendar);
  }

  button:hover {
    background-color: var(--border-calendar);
  }

  .btn-container {
    margin-top: 15px;
  }

  .btn-remove {
    color: var(--text-white);
    background-color: var(--color-theme);
    transition: var(--transition-style);
  }

  .btn-remove:hover {
    background-color: var(--btn-theme-hover);
  }
`

export default StyledDailyMealPlan
