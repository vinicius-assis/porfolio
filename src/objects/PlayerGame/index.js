import React from 'react'
import styled from 'styled-components'
import playerX from '../../img/X.png'
import playerO from '../../img/Circle.png'

const Image = styled.img.attrs(props => ({
  src: props.img === 'x' ? playerX : playerO,
  alt: `Image of player ${props.img.toUpperCase()}`
}))``

const Button = styled.button`
  background: none;
  border: none;
`

const PlayerGame = ({ player }) => (
  <Button>
    <Image img={player} />
  </Button>
)

export default PlayerGame