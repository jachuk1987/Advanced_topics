import React from "react";
import { Modal, Form, Input, Select, Button } from "antd";

const { Option } = Select;

const EmployeeForm = ({ visible, onCancel, onSubmit, employee }) => {
  return (
    <Modal title={employee ? "Edit Employee" : "Add Employee"} open={visible} onCancel={onCancel} footer={null}>
      <Form onFinish={onSubmit} initialValues={employee}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: "Enter name" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="department" label="Department">
          <Select>
            <Option value="HR">HR</Option>
            <Option value="IT">IT</Option>
          </Select>
        </Form.Item>
        <Form.Item name="role" label="Role">
          <Input /> 
        </Form.Item>
        <Form.Item name="salary" label="Salary">
          <Input type="number" />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select>
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit">Save</Button>
      </Form>
    </Modal>
  );
  
};

export default EmployeeForm;
