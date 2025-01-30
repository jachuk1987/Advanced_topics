import React, { useState } from "react";
import { Table, Input, Select, Button, Modal, Form, Switch, Space } from "antd";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "antd/dist/reset.css";

const { Option } = Select;

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", department: "HR", role: "Manager", salary: 60000, status: "Active" },
    { id: 2, name: "Jane Smith", department: "IT", role: "Developer", salary: 75000, status: "Inactive" },
  ]);

  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterEmployees(e.target.value, department, status);
  };

  const handleDepartmentChange = (value) => {
    setDepartment(value);
    filterEmployees(search, value, status);
  };

  const handleStatusChange = (checked) => {
    setStatus(checked ? "Active" : "Inactive");
    filterEmployees(search, department, checked ? "Active" : "Inactive");
  };

  const filterEmployees = (search, department, status) => {
    let filtered = employees;
    if (search) filtered = filtered.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()));
    if (department !== "All") filtered = filtered.filter(emp => emp.department === department);
    if (status) filtered = filtered.filter(emp => emp.status === status);
    setFilteredEmployees(filtered);
  };

  const handleEdit = (record) => {
    setIsEditing(true);
    setCurrentEmployee(record);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this employee?",
      onOk: () => setEmployees(employees.filter(emp => emp.id !== id))
    });
  };

  const handleModalOk = (values) => {
    if (isEditing) {
      setEmployees(employees.map(emp => emp.id === currentEmployee.id ? { ...emp, ...values } : emp));
    } else {
      setEmployees([...employees, { id: employees.length + 1, ...values }]);
    }
    setIsModalOpen(false);
    setIsEditing(false);
    setCurrentEmployee(null);
  };

  return (
    <div style={{ padding: 20 }}>
      <Space style={{ marginBottom: 16 }}>
        <Input placeholder="Search by name" onChange={handleSearch} style={{ width: 200 }} />
        <Select defaultValue="All" onChange={handleDepartmentChange} style={{ width: 120 }}>
          <Option value="All">All Departments</Option>
          <Option value="HR">HR</Option>
          <Option value="IT">IT</Option>
        </Select>
        <Switch checkedChildren="Active" unCheckedChildren="Inactive" onChange={handleStatusChange} />
        <Button type="primary" onClick={() => { setIsEditing(false); setIsModalOpen(true); }}>Add Employee</Button>
      </Space>

      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          rowData={filteredEmployees}
          columnDefs={[
            { headerName: "ID", field: "id" },
            { headerName: "Name", field: "name" },
            { headerName: "Department", field: "department" },
            { headerName: "Role", field: "role" },
            { headerName: "Salary", field: "salary" },
            { headerName: "Status", field: "status" },
            {
              headerName: "Actions",
              cellRendererFramework: (params) => (
                <Space>
                  <Button onClick={() => handleEdit(params.data)}>Edit</Button>
                  <Button danger onClick={() => handleDelete(params.data.id)}>Delete</Button>
                </Space>
              )
            }
          ]}
          pagination={true}
          paginationPageSize={10}
        />
      </div>

      <Modal title={isEditing ? "Edit Employee" : "Add Employee"} open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
        <Form initialValues={currentEmployee} onFinish={handleModalOk}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}> <Input /> </Form.Item>
          <Form.Item name="department" label="Department" rules={[{ required: true }]}> 
            <Select> <Option value="HR">HR</Option> <Option value="IT">IT</Option> </Select> 
          </Form.Item>
          <Form.Item name="role" label="Role" rules={[{ required: true }]}> <Input /> </Form.Item>
          <Form.Item name="salary" label="Salary" rules={[{ required: true }]}> <Input type="number" /> </Form.Item>
          <Form.Item name="status" label="Status" valuePropName="checked"> <Switch checkedChildren="Active" unCheckedChildren="Inactive" /> </Form.Item>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default EmployeeDashboard;
