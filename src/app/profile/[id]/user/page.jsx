"use client";
import React, { useEffect, useState } from "react";
import Layout from '../page';
import { useParams } from "next/navigation";
// import './User.css'; // Import CSS for styling

const User = () => {
    const [studentData, setStudentData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = useParams();

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/${id}/user`); // Update the studentId dynamically as needed
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setStudentData(data.studentDetails);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStudentData();
    }, [studentId]);

    return (
        <Layout>
            <div className="profile">
                <div className="profileContainer">
                    {/* Show loading spinner/message only within the profile container */}
                    {loading ? (
                        <div className="loadingContainer">
                            <div>Loading...</div>
                        </div>
                    ) : error ? (
                        <div className="errorContainer">
                            <div>Error: {error}</div>
                        </div>
                    ) : (
                        <div className="profileBox">
                            <div className="profileImage">
                                <img src={studentData.image} alt="Profile" />
                            </div>
                            <div className="profileData">
                                <div key={studentData.id}>
                                    <h5>Welcome: {studentData.name}</h5>
                                    <h6>Seat No: {studentData.seatNo}</h6>
                                    <h6>Joining Date: {studentData.joiningDate}</h6>
                                    <h6>Your Plan Type: {studentData.YourPlanType}</h6>   
                                    <h6>Renewal Date: {studentData.RenewalDate}</h6> 
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default User;