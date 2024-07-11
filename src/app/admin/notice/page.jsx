import React from 'react';
import Layout from '../page';

const Notice = () =>{
    return (
        <Layout>
            <div className='notice-box'>
                <form action="/" method='post'>
                    <div>
                        <label htmlFor="date" style={{color:"black"}}>Date:</label>
                        <input type="date" id='date' style={{border:'2px solid black'}} />
                    </div>
                    <div className='input-2'>
                        < input type="text" placeholder='Write message here'/>
                    </div>
                        <button style={{backgroundColor:"red",padding:'10px 20px',fontSize:'22px'}}>Save</button>
                </form>
            </div> 
        </Layout>
    
    )
}

export default Notice;