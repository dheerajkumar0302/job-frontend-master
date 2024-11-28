import React from "react";
import { Button, Text } from "@mantine/core";
import { Divider } from "@mantine/core";
import { IconBookmarks, IconBookmarksFilled, IconCalendarMinus, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
const Card = (props: any) => {
    return (
        <Link to="/jobs" className="bg-mine-shaft-800 p-4 w-72 flex flex-col gap-3 justify-evenly rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-cinnamon-500 ">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    <div>
                        <div className="text-mine-shaft-100 font-semibold">{props.jobTitle}</div>
                        <div className="font-xs text-mine-shaft-300">
                            {props.company} &#x2022;{props.applicants}Applicants
                        </div>
                    </div>

                </div>
                {props.saved ? < IconBookmarksFilled className="text-bright-sun-4 00 cursor-pointer" /> : < IconBookmarks className="text-mine-shaft-300 hover:cursor-pointer" />}
            </div>
            <div
                className="
            flex gap-2 
            [&>div]:py-1
            [&>div]:px-2
            [&>div]:bg-mine-shaft-700 
            [&>div]:text-cinnamon-600 
             [&>div]:rounded-lg 
             [&>div]:text-xs
            "
            >
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>
            <div>
                <Text className="!text-xs !text-mine-shaft-300 text-justify" lineClamp={3}>
                    {props.description}
                </Text>
                <Divider size="xs" color="mineShaft.6" />
            </div>
            <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-100">
                    &#8377;{props.package}
                </div>
                <div className="flex gap-1 text-xs items-center">
                    <IconClockHour3 className="h-5 w-5 text-mine-shaft-400" stroke={1.5} />{props.applied || props.interviewing ? "Applied" : props.offered ? "Interviewed" : "Posted"} {props.postedDaysAgo}Days ago
                </div>
            </div>
            {
                (props.offered || props.interviewing) && <Divider size="xs" color="mineShaft.6" />
            }
            {
                props.offered && <div className="flex gap-2">
                    <div><Button color="bright-sun.4" variant="outline" fullWidth>Accept</Button></div>
                    <div><Button color="bright-sun.4" variant="light" fullWidth>Reject</Button></div>
                </div>
            }
            {
                props.interviewing && <div className="flex gap-1 text-sm items-center"> <IconCalendarMonth className="text-bright-sun-400 w-5 h-5 " stroke={1.5} />
                    Sun, 25 August &bull;  <span className="text-mine-shaft-400">10:00 AM</span></div>
            }
        </Link >
    );
};

export default Card;
