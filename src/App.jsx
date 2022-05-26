import { useEffect } from 'react'
import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import api from './api'

function App() {
  const [data, setData] = useState([])

  async function getPosts() {
    const { data } = await api.get('/get-all')

    console.log(data)

    setData(data)
  }

  async function handleLike(id) {
    await api.put(`/likes/${id}`)
  }

  async function handleViews(id) {
    await api.put(`/views/${id}`)
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
            <li>
              <img src={item.image} alt="imagem" width="200" />
            </li>
            <br />
            <br />
            <li>
              <strong>Post:</strong>
              {item.text}
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
              <button onClick={() => handleLike(item.id)}>Like</button>
            </li>
            <br />
            <li>
              <strong>Views</strong>
              {item.views}
              <button onClick={() => handleViews(item.id)}>Views</button>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default App
