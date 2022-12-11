import styled from 'styled-components'

const PageAnimation = styled.div`
  &.page-animation {
    &-enter {
      transition: ${props => props.time || 1}ms opacity;
      opacity: 0;
    }

    &-enter-active {
      opacity: 1;
    }

    &-exit {
      display: none;
    }
  }
`

export default PageAnimation
