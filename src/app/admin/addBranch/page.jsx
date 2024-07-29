'use client';
import React, { useState } from 'react';
import Layout from '../page';


const AddBranch = () => {
    const [branchName, setBranchName] = useState('');
    const [branchImage, setBranchImage] = useState(null);
    const [branchLocation, setBranchLocation] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('branchName', branchName);
        formData.append('branchImage', branchImage);
        formData.append('branchLocation', branchLocation);

        try {
            const response = await fetch('http://localhost:3001/library/add', {
                method: 'POST',
                body: formData,
            }); 
            console.log(formData)

            if (response.ok) {
                alert('Branch successfully added');
            } else {
                alert('Something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong');
        }
    };

    return (
        <Layout>
            <div className="admin-panel">
                <h1>Welcome to the Admin Panel</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="branchName">Branch Name:</label>
                        <input
                            type="text"
                            id="branchName"
                            name="branchName"
                            value={branchName}
                            onChange={(e) => setBranchName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="branchImage">Branch Image:</label>
                        <input
                            type="file"
                            id="branchImage"
                            name="branchImage"
                            onChange={(e) => setBranchImage(e.target.files[0])}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="branchLocation">Branch Location:</label>
                        <input
                            type="text"
                            id="branchLocation"
                            name="branchLocation"
                            value={branchLocation}
                            onChange={(e) => setBranchLocation(e.target.value)}
                        />
                    </div>
                    <button type="submit">Add Branch</button>
                </form>
            </div>
        </Layout>
    );
};

export default AddBranch;
