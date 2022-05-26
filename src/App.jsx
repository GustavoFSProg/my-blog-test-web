import { useEffect } from 'react'
import { useState } from 'react'
import api from './api'

function App() {
  const [data, setData] = useState([])

  async function getPosts() {
    const { data } = await api.get('/get-all')

    console.log(data)

    setData(data)
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        width: '60%',
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
              width: '60%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={item.id}
          >
            <br />
            <br />
            <li>
              <strong>Titulo:</strong>
              {item.title}
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
            </li>
            <br />
            <li>
              <strong>Views</strong>
              {item.views}
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default App
