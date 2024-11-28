import {
    ActionIcon,
    Avatar,
    Divider,
    FileInput,
    Indicator,
    TagsInput,
    Textarea,
} from '@mantine/core';
import {
    IconBriefcase,
    IconDeviceFloppy,
    IconMapPin,
    IconPencil,
    IconPlus,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CertiCard from './CertiCard';
import ExpCard from './ExpCard';
import SelectInput from './SelectInput';
import fields from '../../Data/Profile';
import ExpInput from './ExpInput';
import CertiInput from './CertiInput';
import { getProfile } from '../../Services/ProfileService';
import Info from './Info';
import { setProfile } from '../slices/ProfileSlice';

const Profile = () => {
    const select = fields;
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const profile = useSelector((state: any) => state.profile);
    const [skills, setSkills] = useState([
        'Java',
        'Spring Boot',
        'MongoDB',
        'MySQL',
        'Docker',
        'Kubernetes',
        'React.js',
        'Node.js',
        'Python',
        'AWS',
    ]);
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [addExp, setAddExp] = useState(false);
    const [addCerti, setAddCerti] = useState(false);
    const [about, setAbout] = useState(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    );

    const handleEdit = (index: number) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    };

    useEffect(() => {
        if (user.id) {

            getProfile(user.id)
                .then((data: any) => {
                    console.log(data);

                    dispatch(setProfile(data))
                })
                .catch((err: any) => {
                    console.error(err)
                });
        }
    }, [user.id]);

    return (
        <div className="w-4/5 mx-auto">
            {/* Banner and Avatar */}
            <div className="relative">
                <img
                    className="rounded-t-2xl"
                    src="/Profile/banner.jpg"
                    alt="Banner"
                />
                <div className='absolute-bottom-1/3 left-3'>
                    <Indicator className='[&_.mantine-Indicator-indicator]:!border-4[&_img]:hover:opacity-80' autoContrast inline offset={30}
                        label={<IconPencil className='w-4/5 h-4/5' />} size={45} position='bottom-end' color='bright-sun.4' withBorder>
                        <Avatar className='!w-48 !h-48 border-mine-shaft-950 border-8 rounded-full ' src="/Avatar.png" alt="" />
                        <FileInput className='absolute bottom-2  right -2 z-[201] w-12 [&_div]:text-transparent' variant='unstyled' size='lg' radius='xl' accept='image/png,image/jpeg' />
                    </Indicator>
                </div>
            </div>

            {/* Profile Info */}
            <div className="px-3 mt-20">
                <Info />

                <Divider mx="xs" my="xl" />
            </div>

            {/* About Section */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 text-mine-shaft-100 flex justify-between">
                    About
                    <ActionIcon
                        variant="subtle"
                        color="bright-sun.6"
                        size="lg"
                        onClick={() => handleEdit(1)}
                    >
                        {edit[1] ? (
                            <IconDeviceFloppy className="h-4/5 w-4/5" />
                        ) : (
                            <IconPencil className="h-4/5 w-4/5" />
                        )}
                    </ActionIcon>
                </div>
                {edit[1] ? (
                    <Textarea
                        autosize
                        minRows={3}
                        value={about}
                        placeholder="Enter something about yourself"
                        onChange={(event) => setAbout(event.currentTarget.value)}
                    />
                ) : (
                    <div className="text-sm text-mine-shaft-300 text-justify">
                        {profile?.about}
                    </div>
                )}
            </div>
            <Divider mx="xs" my="xl" />

            {/* Skills Section */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 text-mine-shaft-100 flex justify-between">
                    Skills
                    <ActionIcon
                        variant="subtle"
                        color="bright-sun.6"
                        size="lg"
                        onClick={() => handleEdit(2)}
                    >
                        {edit[2] ? (
                            <IconDeviceFloppy className="h-4/5 w-4/5" />
                        ) : (
                            <IconPencil className="h-4/5 w-4/5" />
                        )}
                    </ActionIcon>
                </div>
                {edit[2] ? (
                    <TagsInput
                        placeholder="Add Skills"
                        splitChars={[',', ' ', '|']}
                        value={skills}
                        onChange={setSkills}
                    />
                ) : (
                    <div className="flex flex-wrap gap-2">
                        {profile?.skills?.map((skill: any, index: number) => (
                            <div
                                key={index}
                                className="bg-cinnamon-500 text-sm bg-opacity-15 rounded-3xl text-cinnamon-500 px-3 py-1"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Divider mx="xs" my="xl" />

            {/* Experience Section */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-4 text-mine-shaft-100 flex justify-between">
                    Experience
                    <div>
                        <ActionIcon
                            variant="subtle"
                            color="bright-sun.6"
                            size="lg"
                            onClick={() => setAddExp(true)}
                        >
                            <IconPlus className="h-4/5 w-4/5 " />
                        </ActionIcon>
                        <ActionIcon
                            variant="subtle"
                            color="bright-sun.6"
                            size="lg"
                            onClick={() => handleEdit(3)}
                        >
                            {edit[3] ? (
                                <IconDeviceFloppy className="h-4/5 w-4/5" />
                            ) : (
                                <IconPencil className="h-4/5 w-4/5" />
                            )}
                        </ActionIcon>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    {profile?.experiences?.map((exp: any, index: number) => (
                        <ExpCard key={index} {...exp} edit={edit[3]} />
                    ))}
                    {addExp && <ExpInput add setEdit={setAddExp} />}
                </div>
            </div>
            <Divider mx="xs" my="xl" />

            {/* Certifications Section */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-4 text-mine-shaft-100 flex justify-between">
                    Certifications
                    <div>
                        <ActionIcon
                            variant="subtle"
                            color="bright-sun.6"
                            size="lg"
                            onClick={() => setAddCerti(true)}
                        >
                            <IconPlus className="h-4/5 w-4/5 " />
                        </ActionIcon>
                        <ActionIcon
                            variant="subtle"
                            color="bright-sun.6"
                            size="lg"
                            onClick={() => handleEdit(4)}
                        >
                            {edit[4] ? (
                                <IconDeviceFloppy className="h-4/5 w-4/5" />
                            ) : (
                                <IconPencil className="h-4/5 w-4/5" />
                            )}
                        </ActionIcon>
                    </div>
                </div>
                {profile?.certifications?.map((certi: any, index: number) => (
                    <CertiCard key={index} edit={edit[4]} {...certi} />
                ))}
                {addCerti && <CertiInput setEdit={setAddCerti} />}
            </div>
        </div >
    );
};

export default Profile;
