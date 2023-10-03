import "./DataTable.css"
export default function DataTable({
  columns,
  data,
  canClickRows = false,
  canEditRows = false,
  canDeleteRows = false,
  onSelectRow = () => console.log("Select row clicked"),
  onEditRow = () => console.log("Edit row clicked"),
  onDeleteRow = () => console.log("Delete row clicked"),
}) {
  console.log("RENDER DATA TABLE")
  const handleRowClick = (event, index) => {
    event.stopPropagation()
    onSelectRow(index)
  }
  const handleEdit = (event, index) => {
    event.stopPropagation()
    onEditRow(index)
  }
  const handleDelete = (event, index) => {
    event.stopPropagation()
    onDeleteRow(index)
  }
  return (
    <>
      <table
        style={{ marginBottom: "10px", width: "100%", textAlign: "center" }}
        className={`table ${canClickRows && "table-hover"}`}
      >
        <thead>
          <tr>
            <th>#</th>
            {columns?.length &&
              columns.map((column) => <th key={column.key}>{column.label}</th>)}

            {(canEditRows || canDeleteRows) && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data?.length &&
            data?.map((item, index) => (
              <tr
                key={index}
                className="table-row-item"
                onClick={(e) => handleRowClick(e, index)}
              >
                <td className="table-cell-item">{index + 1}</td>
                {columns.map((column) => (
                  <td key={`${column.key}${index}`}>{item[column.key]}</td>
                ))}
                {(canEditRows || canDeleteRows) && (
                  <td className="table-cell-item table-actions">
                    {canEditRows && (
                      <button onClick={(e) => handleEdit(e, index)}>
                        Edit
                      </button>
                    )}
                    {canDeleteRows && (
                      <button onClick={(e) => handleDelete(e, index)}>
                        Delete
                      </button>
                    )}
                  </td>
                )}
                {canDeleteRows && <td className="table-cell-item"></td>}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}
