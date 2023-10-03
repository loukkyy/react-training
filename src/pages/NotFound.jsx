import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
export default function NotFound() {
  const [showGoBack, setShowGoBack] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      // navigate("/")
      // navigate(-1)
      setShowGoBack(true)
    }, 1000)
  }, [navigate])
  return (
    <>
      <h1>NotFound</h1>
      {showGoBack && <Link to={-1}>Go back?</Link>}
    </>
  )
}
