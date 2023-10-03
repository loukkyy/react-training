import Post from "../components/Post"
import useFetch from "../hooks/useFetch"

function PostList() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  )

  return (
    <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
      <h3>List of posts</h3>
      {loading ? (
        <span>Loading....</span>
      ) : (
        <ul style={{overflowY: "auto", padding: "0.8rem",listStyle: "none", display: "flex", flexDirection: "column", gap: "10px"}}>
          {data &&
            data.map((post) => (
              <li key={post.id} style={{ backgroundColor: "var(--hover-background-color)", borderRadius: "0.5rem" }}>
                <Post title={post.title} body={post.body} />
              </li>
            ))}
          {error}
        </ul>
      )}
    </div>
  )
}

export default PostList
