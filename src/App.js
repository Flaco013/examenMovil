import React, { useState } from "react";
import "./App.css";
import DataTable from "./DataTable";

function App() {
  const initialFormData = {
    name: "",
    lastName: "",
    secondLastName: "",
    cellphone: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [tableData, setTableData] = useState([]);
  const [showDataTable, setShowDataTable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (formData.name.trim() === "") {
      validationErrors.name = "Name is required";
    }

    if (formData.lastName.trim() === "") {
      validationErrors.lastName = "Last Name is required";
    }

    if (formData.secondLastName.trim() === "") {
      validationErrors.secondLastName = "Second Last Name is required";
    }

    if (formData.cellphone.trim() === "") {
      validationErrors.cellphone = "Cellphone is required";
    } else if (!/^\d{10}$/.test(formData.cellphone)) {
      validationErrors.cellphone = "Cellphone must be 10 digits";
    }

    if (Object.keys(validationErrors).length === 0) {
      const newData = { ...formData };
      setTableData([...tableData, newData]);
      setFormData(initialFormData); // Reset form data to initial values
      setShowDataTable(true);
    } else {
      setFormData({ ...formData });
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData); // Reset form data to initial values
    setShowDataTable(false);
  };

  return (
    <div className="App">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="secondLastName">Second Last Name:</label>
          <input
            type="text"
            id="secondLastName"
            name="secondLastName"
            value={formData.secondLastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="cellphone">Cellphone:</label>
          <input
            type="text"
            id="cellphone"
            name="cellphone"
            value={formData.cellphone}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
      {showDataTable && <DataTable data={tableData} />}
    </div>
  );
}

export default App;
