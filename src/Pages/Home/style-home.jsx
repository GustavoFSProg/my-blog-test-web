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
export const Text = styled.p`
  text-align: right;
  width: 50%;
  font-family: 'Roboto 500';
  font-size: 1.5rem;
  list-style: none;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 26%;
  margin-top: 10px;
  margin-bottom: 10px;
`
