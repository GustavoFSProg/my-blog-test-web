import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Post from './Pages/Post/Post'
import RegisterPost from './Pages/RegisterPost/RegisterPost'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post" component={Post} />
        <Route path="/register" component={RegisterPost} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
