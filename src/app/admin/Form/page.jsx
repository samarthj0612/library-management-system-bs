import React from 'react';
import Layout from'../../admin/page';
import data from '../../data/booksData';
import Link from 'next/link';

const Form = ()=>{
    return (
        <Layout>
            <form action="/" method='Post'>
            <div className='formBox'>
                <div className='heading'>
                    <h3>Welcome to your Library</h3>
                    <h5>Krishna Nagar Bhopal</h5>
                    <table border={2} className='table_content'>
                        <thead>
                            <tr className='trhead'>
                                <th>Student Name</th>
                                <th>Joining Date</th>
                                <th>Plan Type</th>
                                <th>Transition Id</th>
                                <th>Amount</th>
                                <th>Student Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(employee => (
                                <tr key={employee.id}>
                                <td>{employee.title}</td>
                                <td>{employee.description}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <div className='formEnd'>
                        <h5>Add Student</h5>
                        <Link href={`/`}>
                            <button>
                                Registration Form
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            </form>
        
        </Layout>
    )
}

export default Form;