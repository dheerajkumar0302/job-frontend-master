import { useState } from "react";
import { ActionIcon, Combobox, useCombobox, } from "@mantine/core";
import { IconAdjustments } from '@tabler/icons-react';
const opt = [
  "Relevance",
  "Most Recent",
  "Salary(Low to High)",
  "Salary(High to Low)",

];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("Relevance");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className="!text-xs" value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div onClick={() => combobox.toggleDropdown()} className="border cursor-pointer border-cinnamon-600 flex gap-2 text-sm px-2 py-1 items-center rounded-xl">
            {selectedItem}<ActionIcon color="cinnamon.4" variant="transparent" aria-label="Settings">
              <IconAdjustments style={{ width: '700', height: '70%' }} stroke={1.5} />
            </ActionIcon>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
export default Sort;