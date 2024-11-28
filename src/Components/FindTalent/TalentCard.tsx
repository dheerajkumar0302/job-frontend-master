import React, { useRef, useState } from "react";
import { Avatar, Text, Button, Modal } from "@mantine/core";
import { Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { DateInput, DatePickerInput, TimeInput } from '@mantine/dates';
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null)
  return (
    <>
      <div className="bg-mine-shaft-800 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-cinnamon-500 ">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-2 bg-mine-shaft-800 rounded-full">
              <Avatar src={`/${props.image}.png`} size="lg" alt="" />
            </div>
            <div>
              <div className=" text-mine-shaft-50 text-lg font-semibold">
                {props.name}
              </div>
              <div className="font-sm text-mine-shaft-300">
                {props.role} &bull; {props.company}
              </div>
            </div>
          </div>
          <IconHeart className="text-mine-shaft-300 hover:cursor-pointer " stroke={1.5} />
        </div>

        <div
          className="
            flex gap-2 
            // [&>div]:py-1
            // [&>div]:px-2
            // [&>div]:bg-mine-shaft-700 
            // [&>div]:text-cinnamon-600 
            //  [&>div]:rounded-lg 
            //  [&>div]:text-xs
            "
        >
          {
            props.topSkills?.map((skill: any, index: number) => <div className="p-2 py-1 bg-mine-shaft-800 text-cinnamon-600 rounded-lg text-xs">{skill}</div>)
          }
        </div>
        <div>
          <Text
            className="!text-xs !text-mine-shaft-300 text-justify"
            lineClamp={3}
          >
            {props.about}
          </Text>

        </div>
        <Divider size="xs" color="mineShaft.6" />
        {
          props.invited ? <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
            <IconMapPin className="h-5 w-5" stroke={1.5} /> Interview:August 27 , 2024 10:00  AM
          </div>
            :
            <div className="flex justify-between">
              <div className="font-semibold text-mine-shaft-100">
                {props.expectedCtc}
              </div>
              <div className="flex gap-1 text-xs items-center">
                <IconMapPin className="h-5 w-5 text-mine-shaft-400" stroke={1.5} />
                {props.location}
              </div>
            </div>
        }

        <Divider size="xs" color="mineShaft.6" />
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
          {
            !props.invited && <>
              <Link to="/talent-profile">
                <Button color="cinnamon.6" variant="outline" fullWidth>Profile</Button>
              </Link>
              <div>
                {
                  props.posted ? <Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5 " />} color="bright-sun.4" variant="light" fullWidth>Scheduled</Button> : <Button color="bright-sun.4" variant="light" fullWidth>Message</Button>
                }
              </div>
            </>
          }
          {
            props.invited && <>
              <div><Button color="bright-sun.4" variant="outline" fullWidth>Accept</Button></div>
              <div><Button color="bright-sun.4" variant="light" fullWidth>Reject</Button></div>
            </>
          }

        </div>
        <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
          <div className="flex flex-col gap-4">
            <DateInput
              value={value}
              minDate={new Date()}
              onChange={setValue}
              label="Date"
              placeholder="Enter Date "
            />
            <TimeInput label="Time " ref={ref} onClick={() => ref.current?.showPicker()} />
            <Button color="bright-sun.4" variant="light" fullWidth>Schedule</Button>
          </div>
        </Modal>

      </div >
    </>
  );
};

export default TalentCard;


