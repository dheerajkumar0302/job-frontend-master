import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IconRobotFace,
  IconBellRinging,
  IconSettings,
} from "@tabler/icons-react";
import { Indicator, Avatar, Button } from "@mantine/core";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const user = useSelector((state: any) => state.user);
  return location.pathname !== "/signup" && location.pathname != "/login" ? (
    <div className="w-full bg-mine-shaft-950 font-[poppins] px-6 text-white h-20 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex gap-1 items-center  text-cinnamon-600">
        <IconRobotFace className="h-8 w-8" stroke={2.25} />
        <div className="text-3xl font-semibold">jobHUNT</div>
      </div>

      {/* Navigation Links */}
      {NavLinks()}

      {/* User Actions */}
      <div className="flex gap-2 items-center">
        {user ? <ProfileMenu /> : <Link to="/login">
          <Button variant="subtle" color="cinnamon-600">Login</Button>
        </Link>}

        {/* Settings Icon */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        {/* Notifications Icon with Indicator */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="cinnamon.5" size={8} processing offset={6}>
            <IconBellRinging />
          </Indicator>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
