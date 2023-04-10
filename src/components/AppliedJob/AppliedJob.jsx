import { CurrencyDollarIcon, MapPinIcon} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';
const AppliedJob = (props) => {
    const {image, name , jobPost, id} = props.company
    const navigate = useNavigate()
    return (
        <div className='mt-5'>
            <div className="card mb-4 ">
                <div className="row g-0">
                    <div className="col-md-4">
                            <img src={image} className="img-fluid h-100 rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="ms-3 card-body d-flex justify-content-between align-items-center">
                           <div>
                                <h5 className="card-title">{jobPost.name}</h5>
                                <p className="card-text">{name}</p>
                                <div className='my-4'>
                                    <span style={{border:"1px solid #7E90FE", color:"#7E90FE"}} className='me-2 p-2 rounded  '>{jobPost.work}</span>
                                    <span style={{border:"1px solid #7E90FE", color:"#7E90FE"}} className='p-2  rounded'>Full Time</span>
                                </div>
                                <div className='d-flex gap-4'>
                                    <p className='my-3 d-flex align-items-center gap-2'><MapPinIcon style={{height:"25px", width:"25px"}}></MapPinIcon> <span>Address : {jobPost.location}</span></p>
                                    <p className='my-3 d-flex align-items-center gap-2'><CurrencyDollarIcon style={{height:"25px", width:"25px"}}></CurrencyDollarIcon> <span>Salary : {jobPost.salary}  (Per Month)</span></p>
                                </div>
                           </div>
                           <div>
                             <button onClick={() => navigate(`/${id}`)} style={{background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)"}} className='btn text-white'>View Details</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;