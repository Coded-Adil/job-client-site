import { FaLocationDot } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";

const HotJobCard = ({ job }) => {
    const { title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="flex gap-2 m-2">
                <figure>
                    <img
                    className="w-16"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className="flex gap-2 items-center"><FaLocationDot></FaLocationDot>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {requirements.map(skill => <p className="border rounded-md text-center px-2 hover:text-purple-300 hover:bg-gray-400">{skill}</p>)}
                </div>
                <div className="card-actions justify-end items-center">
                    <p className="flex items-center">Salary: <MdAttachMoney></MdAttachMoney> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <button className="btn btn-outline rounded-none btn-sm btn-neutral">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;