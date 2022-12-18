import styled from 'styled-components'

const StyledNavigation = styled.div`
  width: 100%;
  
  .navigation {
    padding: 10px 8px 14px 8px;
    border-bottom: 1px solid var(--border-calendars);
    display: flex;
    align-items: center;
  }

  .navigation div {
    display: inline-block;
    width: 33.33%;
  }

  .navigation .monthAndYear {
    text-align: center;
    color: var(--text-secondary);
  }

  .navigation .monthAndYear a {
    text-decoration: none;
    display: inline-block;
    padding: 0 10px;
    background: #27bc27;
    border-radius: 5px;
    color: white;
    margin-left: 10px;
    text-shadow: 0 0px 2px #727272;
  }

  .navigation .monthAndYear .month {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .navigation .back, 
  .navigation .forward {
    cursor: pointer;
    font-size: 0.9rem;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
  }

  .navigation .back .icon, 
  .navigation .forward .icon {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text-secondary);
  }

  .navigation .back .month, 
  .navigation .forward .month {
    margin: 0 5px;
  }

  .navigation .back {
    text-align: left;
    justify-content: flex-start;
  }

  .navigation .forward {
    text-align: right;
    justify-content: flex-end;
  }
`

export default StyledNavigation
