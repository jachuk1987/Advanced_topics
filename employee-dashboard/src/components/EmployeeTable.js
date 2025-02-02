import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "antd";

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  const columns = [
    { headerName: "ID", field: "id", sortable: true },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Department", field: "department", filter: true },
    { headerName: "Role", field: "role" },
    { headerName: "Salary", field: "salary", sortable: true },
    { headerName: "Status", field: "status" },
    { 
      headerName: "Actions",
      field: "actions",
      cellRendererFramework: (params) => (
        <>
          <Button onClick={() => onEdit(params.data)}>Edit</Button>
          <Button danger onClick={() => onDelete(params.data.id)}>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact rowData={employees} columnDefs={columns} modules={[ClientSideRowModelModule]} pagination={true} paginationPageSize={10} />
    </div>
  );
};

export default EmployeeTable;
