import React from "react";

const Customers = ({ customers }) => (
  <section>
    <h2>All customers</h2>
    <input type="text" placeholder="Search..." />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default Customers;
