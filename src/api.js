import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-blog-last.herokuapp.com/',
})

export default api
