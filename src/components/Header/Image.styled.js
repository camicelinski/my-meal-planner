import styled from 'styled-components'

const StyledImage = styled.img`
  border: none;

  &.post_img,
  &.post_small_img,
  &.about-us_img {
    max-width: 100%;
  }

  &.bg {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -99;
    width: 409.5px;
    height: 202.5px;
  }

  &.hidden {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    &.bg {
      width: 546px;
      height: 270px;
    }
  }
`

export default StyledImage
