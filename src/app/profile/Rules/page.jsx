import React from "react";
import Layout from '../page';
const Rules = () =>
{
    return (
        <Layout>
            <div className="Rules">
                <h5>Welcome: Username</h5> 
                <div className="RandR">
                    <h2>Rules & Regulations</h2>
                    <ul>
                        <li>Silence should be strictly maintained in the library.</li>
                        <li>Misbehavior in the library is strictly prohibited.</li>
                        <li>Park your vehicle in the designated area to ensure safety and convenience for all visitors.</li>
                        <li>Keep your mobile phone on silent mode while inside the library to minimize disruption for others. Ensure that your phone is set to silent mode upon entry to prevent disturbances during study sessions.</li>
                        <li>Keep the library clean by using designated bins for trash disposal, ensuring a pleasant environment for all.</li>
                        <li>
                        Please take care of your belongings. The library management is not responsible for any loss.</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Rules;