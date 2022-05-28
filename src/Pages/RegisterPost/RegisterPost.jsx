import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'
import { Container, Input, Header, Button, Form } from './style-register'

function RegisterPost() {
  const [title, setTitle] = useState('')
  const [likes] = useState(0)
  const [views] = useState(0)
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState([])

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      data.append('title', title)
      data.append('text', text)
      data.append('author', author)
      data.append('description', description)
      data.append('likes', likes)
      data.append('views', views)
      data.append('image', image)

      await api.post(`/register`, data)

      history.push('/')

      return alert('Cadastro realizado com sucesso!')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <>
      <Container>
        <Header>
          <Link to="/">
            <span style={{ fontSize: '1.5rem' }}>Home</span>
          </Link>
          <br />
          <Link to="/post">
            <span style={{ fontSize: '1.5rem' }}>Post</span>
          </Link>
          <br />
          <Link to="/register">
            <span style={{ fontSize: '1.5rem' }}>Cadastrar</span>
          </Link>
        </Header>

        <div>
          <div>
            <div
              style={{
                color: '#0059b3',
                fontFamily: 'Roboto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1>Cadastrar Post</h1>
            </div>
            <br />
            <Form onSubmit={handleSubmit}>
              <Input
                type="file"
                id="image"
                className="botao-imagem"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label>Titulo do Post: </label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <label>Descrição: </label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>Post: </label>
              <textarea
                rows="22"
                cols="52"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                  borderRadius: '10px',
                  border: '1px solid lightgray',
                  background: '#ffffcc',
                }}
              />
              <br />

              <label>Autor: </label>
              <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
              <br />
              {/* {token ? (
                  <button className="confirm-Button" type="submit">
                    Cadastrar
                  </button>
                ) : (
                  <h2>Unautorized!!!</h2>
                )} */}

              <Button className="confirm-Button" type="submit">
                Cadastrar
              </Button>
              <br />
              <br />
            </Form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default RegisterPost
