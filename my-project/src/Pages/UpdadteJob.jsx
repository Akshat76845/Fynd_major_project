import { useLoaderData,useParams } from 'react-router-dom';
import {useState} from "react";
import {useForm} from "react-hook-form";
import CreatableSelect from 'react-select/dist/declarations/src/Creatable';

const UpdadteJob = () => {
    const {id} = useParams();
    const {_id,jobTitle,companyName,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,companyLogo, employmentType, description,postedBy,skills} = useLoaderData();
    const [selectedOption,setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors},
    }=useForm();

    const onSubmit = (data) => {

      data.skills = selectedOption;
      fetch(`http://localhost:5000/update-job/${id}`,{
        method: "PATCH",
        headers: {"content-Type":"application/json"},
        body: JSON.stringify(data)
      })
      .then(res=> res.json()).then((result) =>{
        console.log(result);
        if(result.acknowldged == true){
          alert("Job Updated Successfully!!!")
        }
        reset()
      });
    };
    const options = [
      {value:"Javascript",label:"Javascript"},
      {value:"C++",label:"C++"},
      {value:"HTML",label:"HTML"},
      {value:"CSS",label:"CSS"},
      {value:"React",label:"React"},
      {value:"Node",label:"Node"},
      {value:"MongoDB",label:"MongoDB"},
      {value:"Redux",label:"Redux"},
    ]
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

      {/* register your input into the hook by invoking the "register" function */}
      <div className="create-job-flex ">
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Job Title</label>
          <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className="create-job-input"/>
        </div>
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Company Name</label>
          <input type="text" placeholder="Ex: Microsoft" defaultValue={companyName} {...register("companyName")} className="create-job-input"/>
        </div>  
      </div>
      <div className="create-job-flex">
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Minimum Salary</label>
          <input type="text" placeholder={"$20k"} defaultValue={minPrice} {...register("minPrice")} className="create-job-input"/>
        </div>
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Maximum Salary</label>
          <input type="text" placeholder={"$120k"} defaultValue={maxPrice} {...register("maxPrice")} className="create-job-input"/>
        </div>  
      </div>

      <div className="create-job-flex">
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Salary Type</label>
          <select {...register("salaryType")} className="create-job-input">
          <option value={salaryType}>{salaryType}</option>
          <option value="Hourly">Hourly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
          </select>

        </div>
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Job Location</label>
          <input type="text" placeholder="Ex: New York" defaultValue={jobLocation}{...register("companyName")} className="create-job-input"/>
        </div>   
      </div>
      <div className="create-job-flex">
      <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Job Posting Date</label>
          <input type="date" placeholder={"Ex: 2023-10-28"} defaultValue={postingDate} {...register("postingDate")} className="create-job-input"/>
        </div>  
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Experience Level</label>
          <select {...register("experienceLevel")} className="create-job-input">
          <option value={experienceLevel}>Choose your experience</option>
          <option value="Fresher">Fresher</option>
          <option value="Less than 5 year of experience">Less than 5 year of experience</option>
          <option value="More than 5 year of experience">More than 5 year of experience</option>
          </select>

        </div>
        
      </div>
      <label className="block mb-2 text-lg">Required Skill Sets:</label>
      <CreatableSelect defaultValue={skills} onChange={setSelectedOption} options={options} isMulti className="create-job-inpkkut py-4 "/>
      <div>

      </div>

      <div className="create-job-flex">
      <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Company Logo</label>
          <input type="url" placeholder={"Paste your company Logo URL: https://weshare.com/img1"} defaultValue={companyLogo}{...register("companyLogo")} className="create-job-input"/>
        </div>  
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Employment Type</label>
          <select {...register("experienceLevel")} className="create-job-input">
          <option value={employmentType}>{employmentType}</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Temporary">Temporary</option>
          </select>
        </div> 
      </div>

      <div className="w-full">
      <label className="block mb-2 text-lg">Job Description</label>
      <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700" rows={6} defaultValue={description} placeholder="Job Desciption"{...register("desciption")}/>
      </div>
      <div>
      <label className="block mb-2 text-lg">Job Posted By</label> 
      <input type="email" defaultValue={postedBy} placeholder="your email" {...register("postedBy")} className="create-job-input"/>
      </div>
      <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" />
    </form>
    </div>
    </div>

    )
}
export default UpdadteJob;