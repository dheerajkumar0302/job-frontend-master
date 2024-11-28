import { Button, Divider } from '@mantine/core'
import { IconArrowLeft, IconRobotFace } from '@tabler/icons-react'
import React from 'react'
import SignUp from '../Components/SignupLogin/SignUp'
import Login from '../Components/SignupLogin/Login'
import { useLocation, useNavigate } from 'react-router-dom'

const SignUpPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-[`poppins] p-4 overflow-hidden relative" >
            <Button
                leftSection={<IconArrowLeft size={20} />}
                color="cinnamon.6"
                variant="light"
                my="md"
                onClick={() => navigate("/")}
                className='!absolute left-5 z-10'
            >
                Home
            </Button>
            <div className={`w-[100vw] transition-all ease-in-out duration-1000 h-[100vh] flex [&>*]:flex-shrink-0 ${location.pathname === '/signup' ? '-translate-x-1/2' : 'translate-x-0'}`}>
                <Login />
                <div className={`w-1/2 h-full transition-all ease-in-out duration-1000 bg-mine-shaft-800 ${location.pathname === "/signup" ? "rounded-r-[200px]" : "rounded-l-[200px]"
                    } flex items-center gap-5 justify-center flex-col`}
                >
                    <div className="flex gap-1 items-center text-cinnamon-600">
                        <IconRobotFace className="h-16 w-16" stroke={2.25} />
                        <div className="text-6xl font-semibold">jobHUNT</div>
                    </div>
                    <div className='text-2xl text-mine-shaft-200 font-simibold'>
                        Find the made for you
                    </div>
                    L</div>
                <SignUp />
            </div>

        </div >
    )
}

export default SignUpPage
