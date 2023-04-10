import React from 'react';

const Error = () => {
    return (
        <div className='container mt-5 text-center'>
            <img src="img/error.png" alt="" />
            <h1 className='mb-2'>404 Error</h1>
            <h3 className='my-2 text-danger'>Ouch! Page not found</h3>
        </div>
    );
};

export default Error;