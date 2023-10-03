import { Route, Routes } from "react-router-dom"
import BookLayout from "../BookLayout"
import BookList from "../pages/BookList"
import Book from "../pages/Book"

function BookRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
        </Route>
      </Routes>
    </>
  )
}

export default BookRoutes
