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
  height: 45px;
  background: lightgrey;
  color: black;
  border-radius: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
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
export const Input = styled.input`
  width: 100%;
  background: #ffffcc;
  border-radius: 15px;
  height: 2rem;
  margin-top: 8px;
  margin-bottom: 28px;
  border: 1px solid lightgray;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 26%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
