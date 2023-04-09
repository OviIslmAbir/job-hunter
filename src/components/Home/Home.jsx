import React, { useEffect, useState } from 'react';
import Job from '../jobCatagory/Job';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../featuredJobs/FeaturedJobs';

const Home = () => {
    const [jobs , setJobs] = useState([])
    useEffect(()=>{
        fetch('job.json')
          .then(res => res.json())
          .then(data => setJobs(data))
    },[])
    const companies = useLoaderData()
    return (
        <div className='container my-3'>
            {/* banner section start */}
            <div className="row align-items-center mt-lg-0 mt-5">
                <div className="col-lg-6">
                    <h1>One Step Closer To <span style={{color:"#7E90FE"}}>Your Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} className='btn text-white'>Get Started</button>
                </div>
                <div className="col-lg-6">
                    <img className='img-fluid' src='img/banner.png' alt="" />
                </div>
            </div>
            {/* banner section end */}

            {/* job category start */}
            <div className='mt-5'>
                <div className='text-center'>
                    <h1>Job Category List</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="row">
                     {
                        jobs.map(job => <Job key={job.id} job={job}></Job>)
                     }
                </div>
            </div>
            {/* job category end */}

            {/* Featured Jobs start */}
            <div className='mt-5'>
                <div className='text-center'>
                    <h1>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    {
                        companies.map(company => <FeaturedJobs key={company.id} company={company}></FeaturedJobs>)
                    }
                </div>
            </div>
            {/* Featured Jobs end */}

        </div>
    );
};

export default Home;