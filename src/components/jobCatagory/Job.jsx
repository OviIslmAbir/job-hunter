import React from 'react';

const Job = (props) => {
    const {name, availableJob, img} = props.job
    return (
        <div className="col-lg-3 my-4 p-4 ">
            <img style={{background: "linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%)"}} className='mb-3 p-1 rounded' src={img} alt="" />
            <h4 className='mb-3'>{name}</h4>
            <p>{availableJob}</p>
        </div>
    );
};

export default Job;