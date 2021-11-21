import React, { useEffect, useState, } from 'react';
import { Button } from '@material-ui/core';

const CustomerOrders = (props) => {

    const [orders, setOrders] = useState(null);

    useEffect(() => {
        fetchOrders();
        // Next comment stops a warning. Works fine without the comment aswell
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [props.selectedCustomer])

    const fetchOrders = async () => {
        fetch(`http://localhost:5000/orders/${props.selectedCustomer}`).then(res => res.json()).then(data => setOrders(data))
    }

    return (
        <div className="my-container">
            <h1>Orders for {props.selectedCustomer}</h1>
            <table>
                <tr>
                    <th></th>
                    <th>Employee ID</th>
                    <th>Order Date</th>
                    <th>Required Date</th>
                    <th>Shipped Date</th>
                    <th>Shipped via</th>
                    <th>Freight</th>
                    <th>Ship Name</th>
                </tr>
                {orders && orders.map((item) =>
                    <tr>
                        <Button color="primary" variant="contained" onClick={() => props.displayOrder(item.OrderID, "details")}>View details</Button>
                        <td>{item.EmployeeID}</td>
                        <td>{item.OrderDate}</td>
                        <td>{item.RequiredDate}</td>
                        <td>{item.ShippedDate}</td>
                        <td>{item.ShipVia}</td>
                        <td>{item.Freight}</td>
                        <td>{item.ShipName}</td>
                    </tr>
                )}
            </table>
        </div>
    )

}

export default CustomerOrders;