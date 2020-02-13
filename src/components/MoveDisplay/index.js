import React from 'react'
import styled from "styled-components";
import MovePlayer from '../../objects/MovePlayer';

const Wrapper = styled.section`
  margin-top: 50px;
  ${props => props.active ? 'transform: translateX(0)' : 'transform:translateX(1000%); position:absolute'};
  transition: transform 0.5s cubic-bezier(.65,-0.17,.38,1.54);

  @media (min-width: 740px) {
    position:absolute;
    left: 100%;
    margin-top: 0;
    transition: transform 0.5s linear;
  }
`

const MoveDisplay = ({ show, history, action }) => (
  <Wrapper active={show}>
    {history.map((item, key) => (<MovePlayer content={item} key={key} data={key} action={action} />))}
  </Wrapper>
)

export default MoveDisplay
