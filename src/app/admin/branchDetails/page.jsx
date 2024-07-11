import React from 'react';
import Layout from '../page';
import Data from '../../../data/branchData';
import Image from 'next/image';
import Link from 'next/link';

const Notice = () =>{
    return (
        <Layout>
            <div className='branch'>
            {Data.map((item) => (
            <div className='branch1' key={item.id}>
                <Link href={`/admin/Form`}>
                    <Image 
                     src={item.img}
                     height={150}
                     width={350}
                     style={{borderRadius: "10px 10px 0px 0px"}}
                     />{item.name}
                </Link>

                    <p>{item.description}</p>
            </div>
          ))}
            </div>
        </Layout>
    
    )
}

export default Notice;