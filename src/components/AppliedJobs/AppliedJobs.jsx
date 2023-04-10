import React , { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
const AppliedJobs = () => {
    const companies = useLoaderData()
    const [showRemoteJobs, setShowRemoteJobs] = useState(false);
    const [showOnsiteJobs, setShowOnsiteJobs] = useState(false);
    const filteredJobPostings = companies.filter(company => {
        if (showRemoteJobs && company.jobPost.work === 'remote') {
            return true;
        }
        if (showOnsiteJobs && company.jobPost.work !== 'remote') {
          return true;
        }
        return false;
      });
    const RemoteJobsButton = () => (
        <button onClick={() => {setShowRemoteJobs(true); setShowOnsiteJobs(false); hide()}} style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} className='btn me-2 p-2 rounded text-white'>Remote Jobs</button>

    );
    const OnsiteJobsButton = () => (
        <button onClick={() => {setShowOnsiteJobs(true); setShowRemoteJobs(false); hide()}} style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} className='btn me-2 p-2 rounded text-white'>Onsite Jobs</button>
    );
    const hide = () => {
        const companies = document.getElementById("companies")
        companies.classList.add('d-none')
    }
    const visible = () => {
        const companies = document.getElementById("companies")
        companies.classList.remove('d-none')
    }
    return (
        <div className='container'>
            <div className='text-end mt-5'>
            <button onClick={() => {setShowOnsiteJobs(false); setShowRemoteJobs(false); visible()}} style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} className='btn me-2 p-2 rounded text-white'>All Jobs</button>
              <OnsiteJobsButton></OnsiteJobsButton>
              <RemoteJobsButton></RemoteJobsButton>
            </div>
            <div>
                {
                    filteredJobPostings.map(company => <AppliedJob key={company.id} company={company}></AppliedJob>)
                }
            </div>
            <div id='companies'>
            {
                companies.map(company => <AppliedJob key={company.id} company={company}></AppliedJob>)
            }
            </div>
        </div>

    );
};

export default AppliedJobs;