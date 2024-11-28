import React from 'react'
import { jobList } from '../../Data/JobsData'
import JobCard from '../FindJobs/JobCard'

const CompanyJob = () => {
    return (
        <div>
            <div className='mt-10  flex flex-wrap gap-3'>
                {
                    jobList.map((job, index) => <JobCard key={index} {...job} />)
                }
            </div>
        </div>
    )
}

export default CompanyJob
