import { useEffect, useState } from "react"
import axios from "axios"

function useFetch(url, initialOptions = {}) {
  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(undefined)
  const [options, setOptions] = useState(initialOptions)

  useEffect(() => {
    console.log("FETCHING")
    setLoading(true)
    const controller = new AbortController()
    const signal = controller.signal
    axios
      .get(url, { ...options, signal })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          setError(error.message)
        }
      })
      .finally(() => setLoading(false))
    return () => {
      // Cancel the request when the component unmounts
      controller.abort()
    }
  }, [url, options])
  return { data, loading, error, options, setOptions }
}

export default useFetch
