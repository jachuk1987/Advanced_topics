import React, { useState } from "react";
import { Input, Select, Switch, Button, Modal } from "antd";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm";
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "../services/employeeService";

const { Option } = Select;

const Dashboard = () => {
  const [employees, setEmployees] = useState(getEmployees());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleAdd = () => {
    setEditingEmployee(null);
    setIsModalVisible(true);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure?",
      onOk: () => {
        deleteEmployee(id);
        setEmployees(getEmployees());
      },
    });
  };

  const handleSave = (values) => {
    if (editingEmployee) {
      updateEmployee(editingEmployee.id, values);
    } else {
      addEmployee(values);
    }
    setEmployees(getEmployees());
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={handleAdd}>Add Employee</Button>
      <EmployeeTable employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
      <EmployeeForm visible={isModalVisible} onCancel={() => setIsModalVisible(false)} onSubmit={handleSave} employee={editingEmployee} />
    </div>
  );
};

export default Dashboard;