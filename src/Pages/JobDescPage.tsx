import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../Components/TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommentTalent from "../Components/TalentProfile/RecommentTalent";
import JobDesc from "../Components/JobDesc/JobDesc";
import RecommendedJobs from "../Components/JobDesc/RecommendedJobs";


const JobDescPage = () => {
    return (
        <>
            <div className="min-h-[100vh] bg-mine-shaft-950 font-[`poppins] p-4">
                <Link className="my-4 inline-block" to="/find-jobs">
                    <Button
                        leftSection={<IconArrowLeft size={20} />}
                        color="cinnamon.6"
                        variant="light"
                    >
                        Back
                    </Button>
                </Link>
                <div className="flex gap-5 justify-around ">
                    <JobDesc />
                    <RecommendedJobs />
                </div>
            </div>
        </>
    );
};

export default JobDescPage;
