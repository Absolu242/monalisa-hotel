import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import About from "./Pages/About/About"
import Rooms from "./Pages/Rooms/Rooms"
import Blog from "./Pages/Blog/Blog"
import Post from "./Pages/Post/Post"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import Reservation from "./Pages/Reservation/Reservation"
import Room from "./Pages/Room/Room"
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/rooms" component={Room} />
          <Route path="/rooms/:roomId" component={Room} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:postId" component={Post} />
          <Route path="/contact" component={Contact} />
          <Route path="/reservation" component={Reservation} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
