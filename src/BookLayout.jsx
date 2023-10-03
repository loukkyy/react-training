import { Link, Outlet } from "react-router-dom"
function BookLayout() {
  return (
    <ul style={{ listStyle: "none" }}>
      <li>
        <Link to="/books/1">Book 1</Link>
      </li>
      <li>
        <Link to="/books/2">Book 2</Link>
      </li>
      <Outlet context={{ value: "Hello world" }} />
    </ul>
  )
}

export default BookLayout
