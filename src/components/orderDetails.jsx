import React, { useEffect, useState, } from 'react';

const OrderDetails = (props) => {

    const [orderDetails, setOrderDetails] = useState();

    useEffect(() => {
        fetchOrderDetails();
        // Next comment stops a warning. Works fine without the comment aswell
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [props.selectedOrder])


    const fetchOrderDetails = () => {
        fetch(`http://localhost:5000/order/${props.selectedOrder}`).then(res => res.json()).then(data => setOrderDetails(data));
    }

    return (
        <div className="my-container" >
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Discount</th>
                </tr>
                {orderDetails && orderDetails.map((item) =>
                    <tr>
                        <td>{item.ProductName}</td>
                        <td>{item.UnitPrice}</td>
                        <td>{item.quantity}</td>
                        <td>{item.Discount}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default OrderDetails;