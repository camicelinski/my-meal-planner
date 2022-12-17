import styled from 'styled-components'

const StyledMealSmallIcon = styled.div`  
  .miniEvent {
    background: #1f86ef;
    color: white;
    padding: 3px;
    margin: 2px;
    height: 1em;
    width: 1em;
    display: inline-block;
    border-radius: 50%;
    cursor: pointer;
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
`

export default StyledMealSmallIcon
