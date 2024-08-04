import React from 'react'
// libs
import _ from 'lodash'
// constants
import { SidebarNavs } from 'src/constants/nav'
// sub-component
import DrawerItem from './DrawerItem'
// icons
import { RiLogoutCircleRLine } from 'react-icons/ri'

export const SidebarAside: React.FC = () => {
    return (
        <aside className="grid fixed top-0 bg-gray-800 w-20 h-full peer-focus:left-0 ease-in-out delay-150 duration-300">
            <div className='flex flex-col justify-between h-full'>
                <nav className="flex flex-col justify-center items-center py-3 mt-16">
                    {_.map(SidebarNavs, (navItem, index) => {
                        return (
                            <DrawerItem {...navItem} key={`drawer-sidebar-item-${index}`} />
                        );
                    })}
                </nav>
                <div className="py-4 w-full mb-2 cursor-pointer flex justify-center items-center">
                    <RiLogoutCircleRLine className="w-6 h-6 text-red-300 hover:text-[#7691f9]" />
                </div>
            </div>
        </aside>
    )
}
