import { NavLink, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import NotFound from "../pages/NotFound"
import BookRoutes from "../routes/BookRoutes"
import PostList from "../pages/PostList"
import UserList from "../pages/UserList"
import UserList2 from "../pages/UserList2"
import NavBar from "../components/NavBar/NavBar"

function AppRoutes() {
  return (
    <>
      <NavBar>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/users">
              Users
            </NavLink>
          </li>
          {/* <li>
            <Link to="/users2">Users2</Link>
          </li> */}
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users2" element={<UserList2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
