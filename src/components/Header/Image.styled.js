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
    width: 364px;
    height: 180px;
    // -radius: 50%;
    // height: 135px;
  }

  &.hidden {
    display: none;
  }
`

export default StyledImage
