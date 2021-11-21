import React, { useEffect, useState, } from 'react';
import { Button } from '@material-ui/core';


const Customers = (props) => {

    const [data, setData] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/users").then(res => res.json()).then(data => setData(data));
    }, [])


    const showCustomerOrders = (id, str) => {
        props.displayCustomerOrders(id, str);
    }


    return (
        <div className="my-container">
            <table>
                <tr>
                    <th></th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Phone</th>
                    <th>Adress</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Postal Code</th>
                </tr>
                {data && data.map((item) =>
                    <tr>
                        <Button color="primary" variant="contained" onClick={() => showCustomerOrders(item.CustomerID, "orders")}>View orders</Button>
                        <td>{item.CompanyName}</td>
                        <td>{item.ContactName}</td>
                        <td>{item.ContactTitle}</td>
                        <td>{item.Phone}</td>
                        <td>{item.Address}</td>
                        <td>{item.City}</td>
                        <td>{item.Country}</td>
                        <td>{item.PostalCode}</td>
                    </tr>
                )}
            </table>
        </div >
    )

}


export default Customers;