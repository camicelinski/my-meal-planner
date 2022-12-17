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

  button {
    width: 100%;
    // background: #3fb73f;
    border: 0;
    // border-bottom: 3px solid green;
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
    // margin-top: 8px;
    color: var(--text-white);
    background-color: var(--color-theme);
    transition: var(--transition-style);
  }

  .btn-remove:hover {
    background-color: var(--btn-theme-hover);
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal {
    width: 30%;
    left: 35%;
  }

/*
  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .modal {
    background: var(--bg-primary);
    position: absolute;
    width: 50%;
    text-align: center;
    left: 25%;
    top: -180px;
    border-radius: var(--radius-primary);
  }

  .modal .inner {
    padding: 20px 30px 30px 30px;
  }

  .modal h3 {
    margin: 0;
    background: var(--color-theme-hover);
    padding: 12px;
    border-top-left-radius: var(--radius-primary);-moz-border-radius-top-left: var(--radius-primary);
    -webkit-border-top-left-radius: var(--radius-primary);
    border-top-right-radius: var(--radius-primary);-moz-border-radius-top-right: var(--radius-primary);
    -webkit-border-top-right-radius: var(--radius-primary);
  }

  .modal p {
    font-size: 0.8em;
    line-height: 1.5em;
  }

  .modal .close {
    // margin-top: 22px;
    font-size: 0.7em;
    background: var(--bg-calendar);
    color: var(--text-primary);
    // display: block;
    transition: var(--transition-style);
  }

  .modal .close:hover {
    background: var(--border-calendar);
  }

  .eventModal p {
    margin-bottom: 24px;
  }

  .eventModal p:first-of-type {
    margin-top: 0;
    margin-bottom: 0;
  }

  .eventModal .delete {
    display: block;
    background: #df3317;
    border-bottom: 2pxsolid #a90c0c;
    color: white;
    text-decoration: none;
    padding: 10px;
    font-size: 0.8em;
    border-radius: 3px;
    margin-bottom: 6px;
  }

  .eventModal button.red {
    margin-top: 8px;
  }
  */
`

export default StyledDailyMealPlan
