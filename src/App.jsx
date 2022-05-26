import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from './api'

function App() {
  const [data, setData] = useState([])
  const [isButtonClicked, setIsButtonClicked] = useState()

  async function getPosts() {
    const { data } = await api.get('/get-all')

    console.log(data)

    setData(data)
  }

  async function handleLike(id) {
    await api.put(`/likes/${id}`)

    setIsButtonClicked(true)
  }

  async function handleViews(id) {
    await api.put(`/views/${id}`)

    localStorage.setItem('PostId', id)
  }

  useEffect(() => {
    getPosts()
  }, [data])

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
      {data.map((item) => {
        return (
          <ul
            style={{
              display: 'flex',
              width: '40%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              listStyle: 'none',
            }}
            key={item.id}
          >
            <br />
            <br />
            <li>
              <strong>
                <h1>{item.title}</h1>
              </strong>
            </li>
            <br />
            <br />
            <li style={{ cursor: 'pointer' }}>
              <Link to="/post" onClick={() => handleViews(item.id)}>
                <img src={item.image} alt="imagem" width="310" />
              </Link>
            </li>
            <br />
            <br />
            <li>
              <strong>Post:</strong>
              <Link style={{ cursor: 'pointer' }} to="/post" onClick={() => handleViews(item.id)}>
                {item.description}
              </Link>
            </li>
            <br />
            <br />
            <li>
              <strong>Data:</strong>
              {item.createdAt}
            </li>
            <br />
            <li>
              <strong>Likes:</strong>
              {item.likes}
              {/* <button disabled={isButtonClicked} onClick={() => handleLike(item.id)}>
                Like
              </button> */}
            </li>
            <br />
            <li>
              <strong>Views: __</strong>
              {item.views}
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default App
