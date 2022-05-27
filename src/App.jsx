import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from './api'
import { Container, Card, Text } from './style-app'
import moment from 'moment'

function App() {
  const [data, setData] = useState([])
  const [isButtonClicked, setIsButtonClicked] = useState()

  async function getPosts() {
    const { data } = await api.get('/get-all')

    console.log(data)

    setData(data)
  }

  function getDateWithoutTime(date) {
    return moment(date).format('DD/MM/YYYY')
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
    <Container>
      {data.map((item) => {
        return (
          <Card>
            <ul
              style={{
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
              <li style={{ listStyle: 'none', cursor: 'pointer' }}>
                <Link to="/post" onClick={() => handleViews(item.id)}>
                  <img src={item.image} alt="imagem" width="310" />
                </Link>
              </li>
              <br />
              <br />
              <li>
                <Link
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  to="/post"
                  onClick={() => handleViews(item.id)}
                >
                  <Text>{item.description}</Text>
                </Link>
              </li>
              <br />
              <br />
              <li>
                <strong>Data: {getDateWithoutTime(item.createdAt)}</strong>
              </li>
              <br />
              <li>
                <strong>Likes:</strong>
                {item.likes}
              </li>
              <br />
              <li>
                <strong>Views: __</strong>
                <Text>{item.views}</Text>
              </li>
            </ul>
          </Card>
        )
      })}
    </Container>
  )
}

export default App
