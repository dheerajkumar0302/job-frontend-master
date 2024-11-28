import { Avatar, Button, Divider, Tabs } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import AboutComp from './AboutComp'
import CompanyJob from './CompanyJob'
import CompanyEmployees from './CompanyEmployees'

const Company = (props: any) => {
    return (
        <div className='w-3/4'>
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img
                    className="w-36 h-36 rounded-3xl bg-mine-shaft-700 p-2 -bottom-1/4 absolute left-5 border-mine-shaft-950 border-8"
                    src="/avatar.png"
                    alt=""
                />
            </div>
            <div className="px-3 mt-12">
                <div className="text-3xl font-semibold flex text-mine-shaft-100 justify-between">
                    Google
                    <Avatar.Group>
                        <Avatar src="avatar.png" />
                        <Avatar src="avatar1.png" />
                        <Avatar src="avatar2.png" />
                        <Avatar>+10k</Avatar>
                    </Avatar.Group>
                </div>
                <div className="text-xl flex gap-1 items-center text-mine-shaft-300">
                    <IconBriefcase className="h-5 w-5" stroke={1.5} />
                    New York , United States
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="about">
                    <Tabs.List className='[ &_button]:text-lg font-semibold mb-5 [&_button[data-active="true"]]:text-cinnamon-600'>
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employees">Employees</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="about"><AboutComp /></Tabs.Panel>
                    <Tabs.Panel value="jobs"><CompanyJob /></Tabs.Panel>
                    <Tabs.Panel value="employees"><CompanyEmployees /></Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default Company
