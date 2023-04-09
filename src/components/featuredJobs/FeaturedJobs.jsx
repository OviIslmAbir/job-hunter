import React from 'react';

const FeaturedJobs = (props) => {
    const {name, image, jobPost} = props.company
    return (
        <div>
            <div class="col">
                <div style={{border:"none"}} class="card shadow p-3 h-100">
                <img style={{width:"150px", height:"60px"}} src={image} class="card-img-top ps-2" alt="..."/>
                <div style={{height:"250px"}} class="card-body mt-2">
                    <h4 className='card-title'>{jobPost.name}</h4>
                    <h6 class="card-text text-secondary">{name}</h6>
                    <div className='my-4'>
                        <span className='border border-danger me-2 p-2 rounded  '>{jobPost.work}</span>
                        <span className='border border-danger p-2  rounded'>Full Time</span>
                    </div>
                    <div className='d-flex gap-4'>
                       <p class="card-text">{jobPost.location}</p>
                       <p class="card-text">Salary: {jobPost.salary}</p>
                    </div>
                    <button style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} className='btn'>View details</button>
                </div>
                </div>
             </div>
        </div>
    );
};

export default FeaturedJobs;