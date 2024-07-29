"use client";

import React, { useEffect, useState } from "react";
import Layout from '../page';

const Renew = () => {
    const [renewalDates, setRenewalDates] = useState([]);
    const [error, setError] = useState('');
    const userId = 'exampleUserId'; // Replace with actual user ID

    useEffect(() => {
        const fetchRenewalDates = async () => {
            try {
                const response = await fetch('http://localhost:3001/library/:id/:studentId/notification/renewalDateReminder', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setRenewalDates(data.response);
                } else {
                    const data = await response.json();
                    setError(data.message);
                }
            } catch (err) {
                setError('Failed to fetch renewal dates. ' + err.message);
            }
        };

        fetchRenewalDates();
    }, [userId]);

    return (
        <Layout>
            <div className="Renew">
                <h5>Welcome: Username</h5>
                <div className="RenewData">
                    <form action="/" method="post">
                        <div>
                            <label htmlFor="Renew1">Date:</label>
                            <input type="date" id="Renew1" />
                        </div>
                        <div className="RenewButton">
                            <button type="submit">Proceed Payment</button>
                        </div>
                    </form>
                    {error && <p className="error">{error}</p>}
                    {renewalDates.length > 0 && (
                        <div className="RenewalDates">
                            <h6>Your Renewal Dates:</h6>
                            <ul>
                                {renewalDates.map((date, index) => (
                                    <li key={index}>{date}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Renew;