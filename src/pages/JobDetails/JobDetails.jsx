import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { _id, title, company } = useLoaderData();
    return (
        <div className="m-10">
            <h2 className="text-3xl">Job Details for {title}</h2>
            <p>Apply For {company}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className="btn btn-outline rounded-none btn-neutral">Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;