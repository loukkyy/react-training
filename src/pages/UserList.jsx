import ShowMoreDataTable from "../components/ShowMoreDataTable"

function UserList() {
  const columns = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
  ]

  const mapper = (user) => {
    const nameArr = user.name.split(" ")
    return {
      firstName: nameArr[0],
      lastName: nameArr[1],
      username: user.username,
      email: user.email,
    }
  }

  //   const dummyData = [
  //     { firstName: "John", lastName: "Doe" },
  //     { firstName: "Peter", lastName: "Pan" },
  //     { firstName: "Bob", lastName: "Sponge" },
  //     { firstName: "Bat", lastName: "Man" },
  //     { firstName: "Super", lastName: "Man" },
  //   ]
  return (
    <>
      <ShowMoreDataTable
        columns={columns}
        url="https://jsonplaceholder.typicode.com/users"
        mapper={mapper}
        onSelectRow={(data) => console.log(data)}
      />
    </>
  )
}

export default UserList
