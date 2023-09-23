import React from "react";

function DataTable({ formData }) {
  return (
    <div>
      <h2>Contact Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Second Last Name</th>
            <th>Cellphone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.name}</td>
            <td>{formData.lastName}</td>
            <td>{formData.secondLastName}</td>
            <td>{formData.cellphone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
