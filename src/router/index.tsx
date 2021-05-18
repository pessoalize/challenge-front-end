import { Switch, Route } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard'
import { Product } from '../pages/Product'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/products/:id" exact component={Product} />
    </Switch>
  )
}