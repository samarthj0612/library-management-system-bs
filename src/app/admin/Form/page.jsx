import React from 'react';
import Layout from '../../admin/page';
import data from '../../../data/studentsData';
import Link from 'next/link';

const Form = () => {
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
                                {data.map(student => (
                                    <tr key={student.id}>
                                        <td>{student.studentName}</td>
                                        <td>{student.joiningDate}</td>
                                        <td>{student.planType}</td>
                                        <td>{student.transitionId}</td>
                                        <td>{student.amount}</td>
                                        <td>{student.studentDetails}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='formEnd'>
                            <h5>Add Student</h5>
                            <Link href={`/registration`}>
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

