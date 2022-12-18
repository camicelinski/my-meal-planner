import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import AnimatedSwitch from '../AnimatedSwitch.js'
import Header from '../Header'
import Footer from '../Footer'

import StyledApp from './App.styled.js'
import GlobalStyle from '../../styled/GlobalStyle'
import ResetStyle from '../../styled/ResetStyle'

export const App = () => {
  return (
    <Router>
      <ResetStyle />
      <GlobalStyle />
      <StyledApp className={'App'}>
        <div className={'content-wrapper'}>
          <Header />
          <AnimatedSwitch />
        </div>
        <Footer />
      </StyledApp>
    </Router>
  )
}

export default App
