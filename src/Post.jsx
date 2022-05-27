import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from './api'

function Post() {
  const [datas, setDatas] = useState([])
  const [isButtonClicked, setIsButtonClicked] = useState()
  const [author, setAuthor] = useState('')
  const [comment, setComent] = useState('')
  // const [post_id, setPostId] = useState('')

  const id = localStorage.getItem('PostId')

  async function getPost() {
    const id = localStorage.getItem('PostId')

    console.log(id)
    const { data } = await api.get(`/get-post/${id}`)

    console.log(data)

    setDatas(data)

    return data
  }

  async function handleLike(id) {
    await api.put(`/likes/${id}`)
    setIsButtonClicked(true)
  }

  async function handleComment(e) {
    e.preventDefault()

    alert('Entrou!')

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

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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
          <strong>Post:</strong>
          {datas.text}
        </li>
        <br />
        <br />
        <li>
          <strong>datas:</strong>
          {datas.createdAt}
        </li>
        <br />
        <li>
          <strong>Likes:</strong>
          {datas.likes}
          <button disabled={isButtonClicked} onClick={() => handleLike(datas.id)}>
            Like
          </button>
        </li>
        <br />
        <li>
          <strong>Views: __</strong>
          {datas.views}
        </li>
      </ul>
      <form onSubmit={handleComment}>
        Comentarios
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Post
