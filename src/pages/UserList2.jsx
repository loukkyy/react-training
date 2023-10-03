import { useCallback, useEffect, useState } from "react"
import DataTable from "../components/DataTable/DataTable"
import axios from "axios"

function UserList2() {
  const [fetchLimit, setFetchLimit] = useState(2)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchUsers = async (options) => {
    const url = "https://jsonplaceholder.typicode.com/users"
    const response = await axios.get(url, options)
    return response.data.map((user) => {
      const nameArr = user.name.split(" ")
      return {
        firstName: nameArr[0],
        lastName: nameArr[1],
        username: user.username,
        email: user.email,
      }
    })
  }

  useEffect(() => {
    setLoading(true)
    // setTimeout(() => {
    fetchUsers({ params: { _limit: fetchLimit } })
      .then((users) => setUsers(users))
      .catch((error) => setError(error.message))
      .finally(setLoading(false))
    // }, 1000)
  }, [fetchLimit])

  console.log("render UserList")
  // why is data null at first render?
  console.log(users)

  const columns = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
  ]

  const showMore = useCallback(() => {
    setFetchLimit((prev) => prev + 2)
  }, [])

  if (error) {
    return (
      <>
        <h3>Ooops something went wrong</h3>
        <p>{error}</p>
      </>
    )
  }
  return (
    <>
      <h1>Users</h1>
      <DataTable columns={columns} data={users} />
      <button onClick={showMore}>{loading ? "Loading..." : "Show More"}</button>
    </>
  )
}

export default UserList2
