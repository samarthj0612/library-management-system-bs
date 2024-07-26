import React from "react";
import Layout from '../page';

const Renew = () =>{
    return (
        <Layout>
            <div className="Renew">
                <h5>Welcome: Username</h5>
                <div className="RenewData">
                    <form action="/" method="post">
                    <div>
                        <label htmlFor="Renew1">Date:</label>
                        <input type="date" id="Renew1"/>
                    </div>
                    <div className="RenewButton">
                        <button type="submit" >Proceed Payment</button>
                    </div>
                    </form>
                </div>
            </div>

        </Layout>
    )
}

export default Renew;