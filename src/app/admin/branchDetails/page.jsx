import React from 'react';
import Layout from '../page';
import { branches } from '../../../data/homeData'; 
import Image from 'next/image';
import Link from 'next/link';

const BranchDetails = () => {
  return (
    <Layout>
      <div className='branch'>
        {branches.map((branch, index) => (
          <div key={index} className='branchContainer'>
            <Link href={`/admin/Form`}>
            <div className='imageOverlay'>
              <Image 
                src={branch.image}
                height={250}
                width={350}
                alt={`Image of ${branch.location}`}
              />
              <div>{branch.location}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default BranchDetails;
