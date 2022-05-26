import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Post from './Post'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/post" component={Post} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
