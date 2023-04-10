import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/solid'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const JobDerails = () => {
    const dynamic = useParams()
    const companies = useLoaderData()
    const company = companies.find(company => company.id  === dynamic.jobsId)
    useEffect(() => {
        const storeCompany = getShoppingCart()
        const savedCompany = []
        for(const id in storeCompany){
            const addedCompany = companies.find(company => company.id === id)
                if(addedCompany){
                    const quantity = storeCompany[id]
                    addedCompany.quantity = quantity;
                    savedCompany.push(addedCompany)
                }
        }

    }, [companies])
    const  handleAddToCompany = (company) =>{
        addToDb(company.id)
    }
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Job details</h1>
            <div className="row">
                <div className="col-lg-8 mt-3">
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
                <div  className="col-lg-4 mt-5">
                    <h4>Job details</h4>
                    <hr />
                    <div>
                        <h6 className='my-3 d-flex align-items-center gap-2'><CurrencyDollarIcon style={{height:"25px", width:"25px"}}></CurrencyDollarIcon> <span>Salary : {company.jobPost.salary}  (Per Month)</span></h6>
                        <h6 className='d-flex align-items-center gap-2'><BriefcaseIcon style={{height:"25px", width:"25px"}}></BriefcaseIcon> <span>Job Title : {company.jobPost.name}</span></h6>
                    </div>
                    <h4 className='mt-3'>Contact Information</h4>
                    <hr />
                    <div>
                        <h6 className='my-3 d-flex align-items-center gap-2'><PhoneIcon style={{height:"25px", width:"25px"}}></PhoneIcon> <span>Phone : 01750-00 00 00</span></h6>
                        <h6 className='my-3 d-flex align-items-center gap-2'><EnvelopeIcon style={{height:"25px", width:"25px"}}></EnvelopeIcon> <span>Email : info@gmail.com</span></h6>
                        <h6 className='my-3 d-flex align-items-center gap-2'><MapPinIcon style={{height:"25px", width:"25px"}}></MapPinIcon> <span>Address : {company.jobPost.location}</span></h6>
                    </div>
                    <button onClick={() => handleAddToCompany(company)} style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} className='btn text-white w-100'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDerails;