import { useOutletContext, useParams } from "react-router-dom"

function Book() {
  const { id } = useParams()
  const { value } = useOutletContext()
  return (
    <h1>
      Book {id} {value}
    </h1>
  )
}

export default Book
