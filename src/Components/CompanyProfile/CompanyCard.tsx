import { ActionIcon } from '@mantine/core'
import { IconAdjustments, IconBookmarks, IconExternalLink } from '@tabler/icons-react'
import React from 'react'

const CompanyCard = (props: any) => {
    return (
        <div className="flex justify-between  bg-mine-shaft-900 items-center rounded-lg p-2">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.name}.png`} alt="" />
                </div>
                <div>
                    <div className="text-mine-shaft-100 font-semibold">{props.name}</div>
                    <div className="font-xs text-mine-shaft-300">
                        {props.employees} Employees
                    </div>
                </div>

            </div>
            <ActionIcon color="cinnamon.4" variant="subtle">
                <IconExternalLink />
            </ActionIcon>
        </div>
    )
}

export default CompanyCard
