import React from 'react'

import StyledLoader from './Loader.styled'

const Loader = () => {
  return (
    <StyledLoader>
      <div className={'overlay'} />
      <div className={'loader'}>
        <div className={'lds-roller'}>
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>
    </StyledLoader>
  )
}

export default Loader
