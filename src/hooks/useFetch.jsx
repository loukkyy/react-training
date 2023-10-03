import { useEffect, useRef, useState } from "react"
import axios from "axios"

function useFetch(url, initialOptions = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState(initialOptions)
  const effectRan = useRef(false)
  useEffect(() => {
    console.log("FETCHING")
    setLoading(true)
    axios
      .get(url, options)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
    return () => (effectRan.current = true)
  }, [url, options])
  return { data, loading, error, options, setOptions }
}

export default useFetch
