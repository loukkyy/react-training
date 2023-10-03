import { useCallback, useRef } from "react"
import useFetch from "../hooks/useFetch"
import DataTable from "./DataTable/DataTable"

export default function ShowMoreDataTable({
  url,
  columns = [],
  fetchIncrement = 5,
  initialFetchLimit = 5,
  mapper,
  canClickRows = true,
  canEditRows = true,
  canDeleteRows = true,
  onSelectRow,
  onEditRow,
  onDeleteRow,
}) {
  const fetchLimit = useRef(initialFetchLimit)
  const { data, error, loading, options, setOptions } = useFetch(url, {
    params: { _limit: initialFetchLimit },
  })

  console.log("render UserList", data, loading)

  const handleSelectRow = (index) => {
    onSelectRow(data[index])
  }

  const showMore = useCallback(() => {
    fetchLimit.current += fetchIncrement
    setOptions({ ...options, params: { _limit: fetchLimit.current } })
  }, [options, setOptions, fetchIncrement])

  if (!data) return <p>Loading...</p>
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
      <DataTable
        columns={columns}
        data={data.map(mapper)}
        canClickRows={canClickRows}
        canEditRows={canEditRows}
        canDeleteRows={canDeleteRows}
        onSelectRow={handleSelectRow}
        onEditRow={onEditRow}
        onDeleteRow={onDeleteRow}
      />
      <button onClick={showMore}>{loading ? "Loading..." : "Show More"}</button>
    </>
  )
}
