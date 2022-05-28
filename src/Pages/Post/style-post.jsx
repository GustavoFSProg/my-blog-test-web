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
  width: 100%;
  height: auto;
  background: lightgrey;
  color: black;
  border-radius: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-top: 20px;
  transition: ease 0.7s;

  &:hover {
    background: white;
    color: lightgrey;
  }
`
export const Text = styled.p`
  width: 90%;
  font-family: 'Roboto 500';
  font-size: 1.2rem;
  list-style: none;
  margin-left: 45px;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 26%;
  margin-top: 10px;
  margin-bottom: 10px;
`
