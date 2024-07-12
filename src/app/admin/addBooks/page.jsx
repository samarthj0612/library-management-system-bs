import React from 'react';
import Layout from '../page';
import BooksData from '../../../data/booksData';

const Notice = () =>{
    return (
        <Layout>
            <div className='books-details'>
            {BooksData.map((item) => (
            <div className="book-tabs" key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
            </div>
          ))}
            </div>
        </Layout>
    
    )
}

export default Notice;