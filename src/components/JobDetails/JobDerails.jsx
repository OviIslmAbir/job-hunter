import React from 'react';
import { useLoaderData, useParams  } from 'react-router-dom';

const JobDerails = () => {
    const dynamic = useParams()
    const companies = useLoaderData()
    const company = companies.find(company => company.id  === dynamic.jobsId)
    return (
        <div className='container'>
              
        </div>
    );
};

export default JobDerails;