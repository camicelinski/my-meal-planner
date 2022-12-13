import styled from 'styled-components'

const StyledFormField = styled.div`
  font-size: 1rem;
  margin-right: 1rem;

  input,
  select {
    background: var(--text-secondary);
    border-radius: var(--radius-primary);
    border: none;
    color: var(--bg-primary);    
    letter-spacing: 0.1rem;
    outline: 1px solid transparent;
    padding: 10px;
    width: 100%;
    height: 2.4rem;
    
    :focus ~ label,    
    :valid ~ label {
      font-size: 0.9rem;
    }    
  }
  
  label {
    font-size: 0.95rem;
    color: var(--text-primary);
    left: 1px;
    letter-spacing: 1px;
    padding: 0 10px 10px;
  } 
  
`

export default StyledFormField
