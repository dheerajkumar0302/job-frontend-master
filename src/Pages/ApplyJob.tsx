
import { Button, Divider } from "@mantine/core";
import PostJob from "../Components/PostJob/PostJob";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import ApplyJobComp from "../Components/ApplyJob/ApplyJobComp";

const ApplyJobPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-[`poppins] p-4">
            <Link className="my-4 inline-block" to="/jobs">
                <Button
                    leftSection={<IconArrowLeft size={20} />}
                    color="cinnamon.6"
                    variant="light"
                >
                    Back
                </Button>
            </Link>
            <ApplyJobComp />
        </div>
    );
};
export default ApplyJobPage;
