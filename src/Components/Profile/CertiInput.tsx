import { Button, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import SelectInput from './SelectInput'
import fields from '../../Data/Profile'
import { MonthPickerInput } from '@mantine/dates'

const CertiInput = (props: any) => {
    const select = fields;
    const [issueDate, setIssueDate] = useState<Date | null>(new Date())
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex gap-10 [&>*]:w-1/2'>
                Add Certificate
            </div>
            <div className='flex gap-10 [&>*]:w-1/2 '>
                <TextInput
                    label="Title"
                    withAsterisk
                    placeholder="Enter Title"
                />
                <SelectInput{...select[1]} />
            </div>
            <div className='flex gap-10 [&>*]:w-1/2 '>
                <MonthPickerInput withAsterisk maxDate={new Date()} label="Issue Date" placeholder=' Pick Date' value={issueDate}
                    onChange={setIssueDate} />
                <TextInput label="Certificate Id" withAsterisk placeholder='Enter ID' />
            </div>
            <div className="flex gap-5">
                <Button onClick={() => props.setEdit(false)} color="cinnamon.4" variant="outline">Save</Button>
                <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Discard</Button>
            </div>
        </div>
    )
}

export default CertiInput
