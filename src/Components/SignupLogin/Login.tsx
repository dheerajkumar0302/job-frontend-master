import { Anchor, Button, Checkbox, LoadingOverlay, PasswordInput, TextInput, rem } from '@mantine/core'
import { IconAt, IconCheck, IconLock, IconX, icons } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../Services/UserService'
import { loginValidation, signupValidation } from '../../Services/FormValidation'
import { notifications } from '@mantine/notifications'
import { useDisclosure } from '@mantine/hooks'
import ResetPassword from './ResetPassword'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/UserSlice'

const form = {
    email: "",
    password: "",
}
const Login = () => {
    const [loading, setLoding] = useState(false);
    const dispatch = useDispatch();
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const navigate = useNavigate();
    const [opened, { open, close }] = useDisclosure(false);
    const handleChange = (event: any) => {
        setFormError({ ...formError, [event.target.name]: "" })
        setData({ ...data, [event.target.name]: event.target.value })

    }
    const handleSubmit = () => {
        let valid = true, newFormError: { [key: string]: string } = {};
        for (let key in data) {
            newFormError[key] = loginValidation(key, data[key]);
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);
        if (valid) {
            setLoding(true);
            loginUser(data).then((res) => {
                console.log(res);
                notifications.show({
                    title: 'Login Successfull',
                    message: 'Redirecting to Home page....',
                    withCloseButton: true,
                    icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                    color: "teal",
                    withBorder: true,
                    className: "!border-green-500"
                })
                setTimeout(() => {
                    setLoding(false);
                    dispatch(setUser(res));
                    navigate("/");
                }, 4000)
            }).catch((err) => {
                setLoding(false);
                console.log(err)
                notifications.show({
                    title: 'Login  Failed',
                    message: err.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <IconX style={{ width: "90%", height: "90%" }} />,
                    color: "red",
                    withBorder: true,
                    className: "!border-green-500"
                })
            })

        }

    }
    return (
        <> <LoadingOverlay
            visible={loading}
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 2 }}
            loaderProps={{ color: 'bright-sun.8', type: 'bars' }}
        />
            <div className='w-1/2 px-20 flex flex-col gap-3 justify-center'>
                <div className='text-2xl font-semibold'>Login</div>
                <TextInput
                    value={data.email}
                    name='email'
                    error={formError.email}
                    onChange={handleChange}
                    leftSection={<IconAt size={16} />}
                    label="Email"
                    withAsterisk
                    placeholder="Your Email"
                />
                <PasswordInput
                    value={data.password}
                    error={formError.password}
                    name='password'
                    onChange={handleChange}
                    withAsterisk leftSection={<IconLock size={16} />
                    } label="Password" placeholder="Password" />

                <Button loading={loading} onClick={handleSubmit}
                    autoContrast variant="filled">Login</Button>
                <div className='mx-auto'>
                    Don't Have an account? <span onClick={() => { navigate("/signup"); setFormError(form); setData(form) }} className='text-cinnamon-600 hover:underline cursor-pointer'>Sign Up</span>
                </div>
                <div onClick={open} className=' text-bright-sun-400  hover:underline cursor-pointer text-center'>
                    Forget Password
                </div>

                <ResetPassword opened={opened} close={close} />
            </div>
        </>
    )
}

export default Login
// function loginValidation(key: string, arg1: string): string {
//     throw new Error('Function not implemented.')
// }

