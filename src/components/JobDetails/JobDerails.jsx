import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDerails = () => {
    const dynamic = useParams()
    const companies = useLoaderData()
    const company = companies.find(company => company.id  === dynamic.jobsId)
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Job details</h1>
            <div className="row">
                <div className="col-lg-7 mt-3">
                    <div>
                        <h1>{company.name}</h1>
                    </div>
                    <br />
                    <div>
                        <h3>Job Name : {company.jobPost.name}</h3>
                    </div>
                    <br />
                    <div>
                        <h4>Job Description :</h4>
                        <p>{company.jobPost.description}</p>
                    </div>
                    <br />
                    <div>
                        <h4>Educational Requirements :</h4>
                        <p>{company.jobPost.requirements}</p>
                    </div>
                    <br />
                    <div>
                        <h4>Experiences :</h4>
                        <p>{company.jobPost.Experiences}</p>
                    </div>
                </div>
                <div className="col-lg-5">

                </div>
            </div>
        </div>
    );
};

export default JobDerails;