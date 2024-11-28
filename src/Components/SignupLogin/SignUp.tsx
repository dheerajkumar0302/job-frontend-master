import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, TextInput, rem } from '@mantine/core'
import { IconAt, IconCheck, IconLock, IconX, icons } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { registerUser } from '../../Services/UserService'
import { signupValidation } from '../../Services/FormValidation'
import { notifications } from '@mantine/notifications'
import { errorNotification } from '../../Services/NotificationService'

const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT",
}

const SignUp = () => {

    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const navigate = useNavigate();
    const [loading, setLoding] = useState(false);
    const handleChange = (event: any) => {
        if (typeof (event) == "string") {
            setData({ ...data, accountType: event });
            return;
        }
        let name = event.target.name, value = event.target.value;
        setData({ ...data, [name]: value });
        setFormError({ ...formError, [name]: signupValidation(name, value) })
        if (name === "password" && data.confirmPassword !== "") {
            let err = ""
            if (data.confirmPassword !== value) setFormError({ ...formError, confirmPassword: err = "Passwords do not match." });
            setFormError({ ...formError, [name]: signupValidation(name, value), confirmPassword: err });
        }
        if (name === "confirmPassword") {
            if (data.password !== value) setFormError({ ...formError, [name]: "Passwords do not match." })
            else setFormError({ ...formError, confirmPassword: "" });
        }
    }

    const handleSubmit = () => {
        let valid = true, newFormError: { [key: string]: string } = {};
        for (let key in data) {
            if (key === "accountType") continue;
            if (key !== "confirmPassword") newFormError[key] = signupValidation(key, data[key]);
            else if (data[key] !== data["password"]) newFormError[key] = "Password do not match";
            if (newFormError[key]
            ) valid = false;
        }
        setFormError(newFormError);
        notifications.show({
            title: 'Default notification',
            message: 'Do not forget to star Mantine on GitHub! 🌟',
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500"
        })
        if (valid === true) {
            setLoding(true);
            registerUser(data).then((res) => {
                console.log(res)
                setData(form);
                notifications.show({
                    title: 'Registered Successfully',
                    message: 'Redirecting to Login page....',
                    withCloseButton: true,
                    icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                    color: "teal",
                    withBorder: true,
                    className: "!border-green-500"
                })
                setTimeout(() => {
                    setLoding(false);
                    navigate("/login");
                }, 4000)
            }).catch((err) => {
                console.log(err)
                setLoding(false);
                errorNotification("Registation Failed", err.response.data.errorMessage)
            })

        }

    }
    return (<> <LoadingOverlay
        visible={loading}
        zIndex={1000}
        className='translate-x-1/2'
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'bright-sun.8', type: 'bars' }}
    />
        <div className='w-1/2 px-20 flex flex-col gap-3 justify-center'>
            <div className='text-2xl font-semibold'>Create Account</div>
            <TextInput value={data.name}
                error={formError.name}
                name='name'
                onChange={handleChange}
                label="Full Name"
                placeholder="Your Name"
            />
            <TextInput value={data.email}
                error={formError.email}
                name='email'
                onChange={handleChange}

                leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
                label="Email"
                placeholder="Your email"
            />
            <PasswordInput value={data.password}
                error={formError.password}
                name='password'
                onChange={handleChange}

                withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                } label="Password" placeholder="Password" />

            <PasswordInput value={data.confirmPassword}
                error={formError.confirmPassword}
                name='confirmPassword'
                onChange={handleChange}

                withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                } label="Confirm Password" placeholder="Confirm Password" />

            <Radio.Group

                value={data.accountType}
                onChange={handleChange}
                label="Are You ?"
                withAsterisk
            >
                <Group mt="xs">
                    <Radio className='py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400  border-mine-shaft-800 rounded-lg ' autoContrast value="APPLICANT" label="APPLICANT" />
                    <Radio className='py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400  border-mine-shaft-800 rounded-lg ' autoContrast value="EMPLOYER" label="EMPLOYER" />
                </Group>
            </Radio.Group>

            <Checkbox
                autoContrast
                label={<>I accept{' '}<Anchor> terms & conditions</Anchor></>}
            />
            <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Sign Up</Button>
            <div className='mx-auto'>
                Have an account? <span onClick={() => { navigate("/login"); setFormError(form); setData(form) }} className='text-cinnamon-600 hover:underline cursor-pointer'>Login</span>
            </div>


        </div></>
    )
}

export default SignUp
