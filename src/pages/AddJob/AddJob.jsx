const AddJob = () => {
    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.entries());
    }
    return (
        <div>
            <h2 className="text-3xl">Add New Job Here</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" placeholder="Job Title" name="title" className="input input-bordered" required />
                </div>
                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" placeholder="Job Location" name="location" className="input input-bordered" required />
                </div>
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Select Job Type</option>
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>Internship</option>
                    </select>
                </div>
                {/* Job Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Select Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                        <option>Accounting</option>
                        <option>Sales</option>
                        <option>Robotics</option>
                        <option>Graphic Design</option>
                    </select>
                </div>
                {/* Salary Range */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" placeholder="Min" name="min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Max" name="max" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <select className="select select-bordered w-full">
                            <option disabled selected>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                            <option>URO</option>
                        </select>
                    </div>
                </div>
                {/* Job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="description" placeholder="Job Description"></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" placeholder="Company Name" name="company" className="input input-bordered" required />
                </div>
                {/* Job Requirments */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirments</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="requirments" placeholder="Put each Job Requirments in a new line"></textarea>
                </div>
                {/* Job Responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="responsibilities" placeholder="Put each Job Responsibilities in a new line"></textarea>
                </div>
                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" placeholder="HR Name" name="hr_name" className="input input-bordered" required />
                </div>
                {/* HR Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" placeholder="HR Email" name="hr_email" className="input input-bordered" required />
                </div>
                {/* Company Logo URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="text" placeholder="Company Logo URL" name="company_logo" className="input input-bordered" required />
                </div>
                {/* Submit */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;