import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from './api'

function Post() {
  const [datas, setDatas] = useState([])
  const [isButtonClicked, setIsButtonClicked] = useState()

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

  getPost()

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
    </div>
  )
}

export default Post
