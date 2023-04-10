import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const companies = useLoaderData()
    return (
        <div>
            {
                companies.map(company => <AppliedJob key={company.id} company={company}></AppliedJob>)
            }
        </div>

    );
};

export default AppliedJobs;