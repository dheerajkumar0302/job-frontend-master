import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Jobs", url: "/post-jobs" },
    { name: "Posted Job", url: "/posted-job" },
    { name: "Job History", url: "/job-history" },
    { name: "Sign Up", url: "/signup" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-5 font-semibold !text-mine-shaft-100 h-full items-center text-1xl">
      {links.map((link, index) => (
        <div
          key={index} // Correct placement of the `key` prop
          className={`h-full flex items-center border-t-[3px] ${location.pathname === link.url
            ? "border-cinnamon-600 text-cinnamon-600"
            : "border-transparent"
            }`}
        >
          <Link
            to={link.url}
            className={`hover:underline px-3 ${location.pathname === link.url ? "text-cinnamon font-bold" : ""
              }`}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
