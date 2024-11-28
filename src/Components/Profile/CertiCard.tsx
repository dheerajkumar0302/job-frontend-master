import { ActionIcon } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import React from "react";
import { formatDate } from "../../Services/Utilities";

const CertiCard = (props: any) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/${props.issuer}.png`} alt="" />
          </div>
          <div>
            <div className="text-mine-shaft-100 font-semibold">{props.name}</div>
            <div className="font-sm text-mine-shaft-300">
              {props.issuer}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-end flex-col">
            <div className="text-sm text-mine-shaft-300">{formatDate(props.issueDate)}</div>
            <div className="text-sm text-mine-shaft-300">ID:{props.certificatedId}</div>
          </div>
          {props.edit && <ActionIcon size='lg' variant="subtle" color='red.9'>
            <IconTrash className='h-4/5 w-4/5' stroke={.5} />
          </ActionIcon>}
        </div>
      </div >
    </>
  );
};

export default CertiCard;
