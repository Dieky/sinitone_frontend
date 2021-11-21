import './App.css';
import React, { useState } from 'react';
import Customers from './components/customers';
import { Button } from '@material-ui/core';
import CustomerOrders from './components/customerOrders';
import OrderDetails from './components/orderDetails';
import Container from '@material-ui/core/Container';


function App() {

  const [customersIsActive, setCustomersIsActive] = useState(true);

  const [customerIsSelected, setCustomerIsSeleced] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState();

  const [orderIsSelected, setOrderIsSelected] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState();

  // for each component set selected hook to false and add a case which sets it to true 
  const handleActiveDisplay = (str) => {
    setCustomersIsActive(false);
    setCustomerIsSeleced(false);
    setOrderIsSelected(false);
    switch (str) {
      case "customers":
        setCustomersIsActive(true);
        break;
      case "orders":
        setCustomerIsSeleced(true);
        break;
      case "details":
        setOrderIsSelected(true);
        break;
      default:
        break;
    }
  }

  const displayCustomers = (str) => {
    handleActiveDisplay(str);
  }


  const displayCustomerOrders = (id, str) => {
    setSelectedCustomer(id);
    displayCustomers(str);
    // setCustomerIsSeleced(!customerIsSelected);
  }

  const displayOrder = (id, str) => {
    displayCustomers(str);
    setSelectedOrder(id);
  }


  return (
    <Container maxWidth="md">
      <div className="App">
        <Button onClick={() => displayCustomers("customers")}>Show customers</Button>
        {customersIsActive && <Customers displayCustomerOrders={displayCustomerOrders} />}
        {customerIsSelected && <CustomerOrders displayOrder={displayOrder} selectedCustomer={selectedCustomer} />}
        {orderIsSelected && <OrderDetails selectedOrder={selectedOrder} />}
      </div>
    </Container>
  );
}

export default App;
