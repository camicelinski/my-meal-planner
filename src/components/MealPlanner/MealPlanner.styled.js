import styled from 'styled-components'

const StyledMealPlanner = styled.div`
  padding: 20px;
  
  .calendar {
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    width: cal(100% - 40px);
    max-width: 1024px;
    border: 2px solid var(--border-calendar);
    border-radius: var(--radius-primary);
    position: relative;
    background: rgba(255, 255, 255, 0.7);
  }

  .calendar a {
    color: grey;
  }

  .cell {
    padding: 5px;
    width: 14.2857%;
    height: 120px;
    font-size: 0.7em;
    border-right: 1px solid var(--bg-calendar);
  }

  .cell:nth-child(9) {
    border-left: none;    
    border-bottom-left-radius: var(--radius-primary);-moz-border-radius-bottom-left: var(--radius-primary);
    -webkit-border-bottom-left-radius: var(--radius-primary);  
  }

  .cell:last-child {
    border-right: none;    
    -moz-border-radius-bottom-right: var(--radius-primary);
    -webkit-border-bottom-right-radius: var(--radius-primary);
    border-bottom-right-radius: var(--radius-primary);
  }

  .cell .date {
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .date div {
    width: 1.5rem;
    height: 1.5rem;
  }

  .date div:first-child {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .date .day,
  .date .addEventOnDay {
    border-radius: 50%;
    padding: 5px;
  }

  .date .day {
    font-size: 1rem;

    @media screen and (min-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .current .date div:first-child {
    font-weight: bold;
    color: var(--color-theme);
  }

  .cell:hover .date div:first-child {
    background-color: var(--color-theme-hover);
  }
  
  .otherMonth {
    background: #f7f7f7;
  }

  .otherMonth .date {
    color: #bfbfbf;
  }

  .activedate {
    background-color: var(--bg-cell);
  }

  .small-icons {
    margin-bottom: 10px;
  }

  // BUTTON
  .addEventOnDay {
    color: var(--text-primary);
    text-decoration: none;
    background: var(--bg-calendar);
    transition: var(--transition-style);
  }

  .addEventOnDay:hover {
    background: var(--border-calendar);
  }

  .miniEvent {
    background: #1f86ef;
    color: white;
    padding: 3px;
    margin: 2px;
    height: 1em;
    width: 1em;
    display: inline-block;
    border-radius: 50%;
  }

  .miniEvent.breakfast {
    background: var(--meal-breakfast);
  }

  .miniEvent.elevenses {
    background: var(--meal-elevenses);
  }

  .miniEvent.lunch {
    background: var(--meal-lunch);
  }

  .miniEvent.snacks {
    background: var(--meal-snacks);
  }

  .miniEvent.dinner {
    background: var(--meal-dinner);
  }

  .dayLabel.cell {
    text-transform: uppercase;
    text-align: center;
    height: auto;
    padding: 5px 0;
    border: none;
    border-bottom: 1px solid var(--bg-calendar);
  }

  .addEvent {
    text-decoration: none;
    color: black;
    display: block;
    text-align: center;
    width: 100%;
    background: #3fb73f;
    border-bottom: 2px solid green;
    color: white;
    padding: 10px;
  }

  .form input,
  .form select {
    color: var(--text-secondary);
    font-size: 0.8rem;
    width: calc(100% - 16px);
    padding: 5px 8px;
    margin: 5px 0;
    border: 1px solid var(--border-calendar);
    border-radius: 4px;
    height: fit-content;
    background: var(--bg-input);
  }

  .form label {
    font-weight: bold;
    text-align: left;
    font-size: 0.75rem;
    display: block;
    padding: 8px 10px 0;
  }

  .form div {
    margin: 0;
  }

  button {
    width: 100%;
    border: 0;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
  }

  .form .btn-container {
    margin-top: 5px;
  }

  .form button {
    margin: 2px 0;
    font-size: 0.8rem;
    width: calc(100% - 16px);
    background-color: var(--color-theme);
    transition: var(--transition-style);
  }

  .form button:hover {
    background-color: var(--btn-theme-hover);
  }

  button.red {
    background: #c82727;
    border-bottom: 3px solid #a51616;
  }
  
  .feedback {
      position: absolute;
      width: 90%;
      padding: 16px 0;
      left: 5%;
      text-align: center;
      bottom: 5%;
      background: #3fb73f;
      border-bottom: 3px solid green;
      border-radius: 5px;
      text-align: center;
      color: white;
  }
`

export default StyledMealPlanner
