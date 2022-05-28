import React, { useEffect } from 'react'
import { useState } from 'react'
import { GrLike } from 'react-icons/gr'
import api from '../../services/api'
import { Container, Button, Text, Header } from './style-post'
import moment from 'moment'
import { Link } from 'react-router-dom'

function Post() {
  const [datas, setDatas] = useState([])
  const [isButtonClicked, setIsButtonClicked] = useState()
  const [author, setAuthor] = useState('')
  const [comment, setComent] = useState('')
  const [commentary, setCommentary] = useState([])

  const id = localStorage.getItem('PostId')

  async function getPost() {
    console.log(id)
    const { data } = await api.get(`/get-post/${id}`)

    console.log(data)

    setDatas(data)

    return data
  }

  function getDateWithoutTime(date) {
    return moment(date).format('DD/MM/YYYY')
  }

  async function getComments() {
    const id = localStorage.getItem('PostId')

    const { data } = await api.get(`/get-comments/${id}`)

    console.log(data)
    setCommentary(data)
    return data
  }

  async function handleLike(id) {
    await api.put(`/likes/${id}`)
    setIsButtonClicked(true)
  }

  async function handleComment(e) {
    e.preventDefault()

    try {
      const id = localStorage.getItem('PostId')

      const data = { post_id: id, comment: comment, author: author }

      // await api.post(`/comments-register/${id}`, data)
      await api.post(`/comments/${id}`, data)

      return alert('Comentario enviado!!')
    } catch (error) {
      return alert('ERRO!!', error)
    }
  }

  useEffect(() => {
    getPost()
  }, [datas])

  getComments()

  return (
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
      <ul
        style={{
          display: 'flex',
          width: '40%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          listStyle: 'none',
        }}
      >
        <br />
        <br />
        <li>
          <strong>
            <h1>{datas.title}</h1>
          </strong>
        </li>
        <br />
        <br />
        <li>
          <img src={datas.image} alt="imagem" width="480" />
        </li>
        <br />
        <br />
        <li>
          <Text>{datas.text}</Text>
        </li>
        <br />
        <br />
        <li>
          <strong> Data: {getDateWithoutTime(datas.createdAt)} </strong>
        </li>
        <br />
        <li>
          <strong>Likes:</strong>
          {datas.likes}
          <Button disabled={isButtonClicked} onClick={() => handleLike(datas.id)}>
            <GrLike size={21} />
          </Button>
        </li>
        <br />
        <li>
          <strong>Views: __</strong>
          {datas.views}
        </li>
      </ul>
      <div style={{ width: '37%' }}>
        {commentary.map((item) => {
          return (
            <>
              <div>
                <p>
                  {' '}
                  <strong>Autor:</strong>{' '}
                </p>
                <p> {item.author} </p>
                <strong>Comentario:</strong>
                <p> {item.comment} </p>
                <br />
                <br />
              </div>
            </>
          )
        })}
      </div>
      <form onSubmit={handleComment}>
        Comentarios{' '}
        <p>
          Autor:
          <input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ width: '24rem', height: '1.4rem', marginLeft: '8px' }}
            type="text"
          />
        </p>
        <p>Comentario:</p>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComent(e.target.value)}
          cols="53"
          rows={14}
        ></textarea>
        <br />
        <Button type="submit">Enviar</Button>
      </form>
      <br />
      <br />
      <br />
    </Container>
  )
}

export default Post
