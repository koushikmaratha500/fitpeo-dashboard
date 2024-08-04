/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { LazyExoticComponent, memo } from "react";
// libs
import { useLocation, useNavigate } from "react-router-dom";
import _ from "lodash";
import { twMerge } from "tailwind-merge";
// types
import { IconType } from "react-icons";

interface IProps {
    icon: LazyExoticComponent<IconType>;
    path?: string;
}
const DrawerItem: React.FunctionComponent<IProps> = memo(
    ({ icon: Icon, path }) => {
        const navigate = useNavigate();
        const location = useLocation();
        const isActive = _.isEqual(location.pathname, path);

        return (
            <div
                onClick={() => navigate(path as string)}
                className={twMerge("py-4 w-full mb-2 cursor-pointer flex justify-center items-center",
                    isActive ? "border-l-[#7691f9] border-l-2" : "")}
            >
                <Icon className={twMerge("w-6 h-6 text-[#FFF] hover:text-[#7691f9]", isActive ? "text-[#7691f9]" : "text-white",)} />
            </div >
        );
    },
);

DrawerItem.displayName = "DrawerItem";

export default DrawerItem;
