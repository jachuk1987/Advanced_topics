let employeeData = [
    { id: 1, name: "John Doe", department: "HR", role: "Manager", salary: 60000, status: "Active" },
    { id: 2, name: "Jane Smith", department: "IT", role: "Developer", salary: 75000, status: "Inactive" },
  ];
  
  export const getEmployees = () => [...employeeData];
  
  export const addEmployee = (employee) => {
    employee.id = employeeData.length + 1;
    employeeData.push(employee);
  };
  
  export const updateEmployee = (id, updatedEmployee) => {
    employeeData = employeeData.map((emp) =>
      emp.id === id ? { ...emp, ...updatedEmployee } : emp
    );
  };
  
  export const deleteEmployee = (id) => {
    employeeData = employeeData.filter((emp) => emp.id !== id);
  };
  