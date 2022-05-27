import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightcyan;
  width: 100%;
  height: auto;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #80ffbf;
  width: 55%;
  height: auto;
  flex-direction: column;
  list-style: none;
  margin-bottom: 20px;
  padding-bottom: 70px;
  border-radius: 40px;
`
export const Button = styled.button`
  width: 76%;
  height: auto;
  background: lightgrey;
  color: black;
  border-radius: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-top: 20px;
  transition: ease 0.7s;

  &:hover {
    background: blue;
  }
`
