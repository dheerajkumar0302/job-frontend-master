import { Button } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Job = () => {
    <><div className="flex items-center gap-2">
        <div className="p-3 bg-mine-shaft-800 rounded-xl flex">
            <img className="h-8" src={'/Icons/Google.png'} alt="" />
        </div>
        <div>
            <div className='text-lg font-medium'>Google</div>
            <div className='text-mine-shaft-300'>10k+ Employees</div>
        </div>
    </div>
        <Link to="/company">
            <Button color="brightSum.4" variant='Light'>Company Page</Button>
        </Link>
        <div className='text-mine-shaft-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias facere voluptate ipsum dolor saepe officiis nihil est recusandae! Quo temporibus iusto non quasi libero voluptate adipisci blanditiis earum explicabo laudantium?</div>
    </>
}

export default Job
