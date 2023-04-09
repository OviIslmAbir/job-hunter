import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FeaturedJobs = (props) => {
    const navigate = useNavigate()
    const {id ,name, image, jobPost} = props.company
    return (
        <div>
            <div className="col">
                <div style={{border:"none"}} className="card shadow p-3 h-100">
                <img style={{width:"150px", height:"70px"}} src={image} className="card-img-top" alt="..."/>
                <div style={{height:"250px"}} className="card-body mt-2">
                    <h4 className='card-title'>{jobPost.name}</h4>
                    <h6 className="card-text text-secondary">{name}</h6>
                    <div className='my-4'>
                        <span style={{border:"1px solid #7E90FE", color:"#7E90FE"}} className='me-2 p-2 rounded  '>{jobPost.work}</span>
                        <span style={{border:"1px solid #7E90FE", color:"#7E90FE"}} className='p-2  rounded'>Full Time</span>
                    </div>
                    <div className='d-flex gap-4'>
                       <p className="card-text">{jobPost.location}</p>
                       <p className="card-text">Salary: {jobPost.salary}</p>
                    </div>
                    <button style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} className='btn text-white' onClick={() => navigate(`/${id}`)}>View details</button>
                </div>
                </div>
             </div>
        </div>
    );
};

export default FeaturedJobs;