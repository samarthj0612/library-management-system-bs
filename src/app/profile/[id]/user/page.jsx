"use client"

import React from "react";
import Layout from '../../page';
import { useParams } from 'next/navigation'
import data from '../../../../data/userData';

const User = () =>{
    const {id} = useParams();

    return (
        <Layout>
            <div className="profile">
            <div>This is this {id} user's profile</div>
                <h5>Welcome: Username</h5>
                <div className="profileBox">
                    <div className="profileImage">
                        <img src={data[0].image} alt="Profile" />
                    </div>
                    
                    <div className="profileData">
                        {data.map(item=>(
                            <div key={item.id}>
                                <h6>Name: {item.name}</h6>
                                <h6>Seat No: {item.seatNo}</h6>
                                <h6>Joining Date: {item.joiningDate}</h6>
                                <h6>Your Plan Type: {item.YourPlanType}</h6>   
                                <h6>Renewal Date: {item.RenewalDate}</h6> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default User;
