import React from "react";
import data from '../../../data/booksData';
import Layout from '../page';

const Payment = () =>{
    return (
        <Layout>
            <div className="Payment">
                <h5>Welcome: Username</h5>
                <div className="paymentTable">
                    <div className="tableWrapper">
                        <table className='table_content'>
                            <thead>
                                <tr className='trhead'>
                                    <th>Type of plan</th>
                                    <th>Amount</th>
                                    <th>Date & Time</th>
                                    <th>Transition Id</th>
                                    <th>Download Receipt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.title}</td>
                                        <td>{employee.description}</td>
                                        <td>{employee.date}</td>
                                        <td>{employee.transactionId}</td>
                                        <td>{employee.downloadLink}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Payment;