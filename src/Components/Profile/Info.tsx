import { ActionIcon } from '@mantine/core'
import { IconDeviceFloppy, IconPencil, IconBriefcase, IconMapPin, IconCheck, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import SelectInput from './SelectInput'
import fields from '../../Data/Profile'
import { useForm } from '@mantine/form'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeProfile } from '../slices/ProfileSlice'
import { successNotification } from '../../Services/NotificationService'

const Info = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user)
    const select = fields;
    const profile = useSelector((state: any) => state.profile)
    const [edit, setEdit] = useState(false)
    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            form.setValues({ jobTitle: profile.jobTitle, company: profile.company, location: profile.location })
        }
        else {
            setEdit(false)
        }
    }
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { jobTitle: '', company: '', location: ' ' },
    });
    const handleSave = () => {
        setEdit(false)
        let updatedProfile = { ...profile, ...form.getValues() }
        dispatch(changeProfile(updatedProfile));
        successNotification("Success", "Profile Updated Successfully")
    }
    return (
        <div>
            <div className="text-3xl font-semibold flex text-mine-shaft-100 justify-between">
                {user.name}
                <div>
                    {edit && <ActionIcon
                        variant="subtle"
                        color="bright-sun.6"
                        size="lg"
                        onClick={handleSave}
                    >
                        <IconCheck className='w-4/5 h-4/5' stroke={1.5} />


                    </ActionIcon>}
                    <ActionIcon
                        variant="subtle"
                        color={"bright-sun.6"}
                        size="lg"
                        onClick={handleClick}
                    >
                        {edit ? (
                            <IconX className="h-4/5 w-4/5 " stroke={1.5} />
                        ) : (
                            <IconPencil className="h-4/5 w-4/5" />
                        )}


                    </ActionIcon>
                </div>
            </div>
            {
                edit ? (
                    <>
                        <div className="flex gap-10 [&>*]:w-1/2 my-3">
                            <SelectInput form={form} name='jobTitle' {...select[0]} />
                            <SelectInput form={form} name='company' {...select[1]} />
                        </div>
                        <SelectInput form={form} name='location' {...select[2]} />
                    </>
                ) : (
                    <>
                        <div className="text-xl flex gap-1 items-center">
                            <IconBriefcase className="h-5 w-5" stroke={1.5} />
                            {profile.jobTitle} &bull;{profile.company}
                        </div>
                        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                            <IconMapPin className="h-5 w-5" stroke={1.5} />
                            {profile.location}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Info
