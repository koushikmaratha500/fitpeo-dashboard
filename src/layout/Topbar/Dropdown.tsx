import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaUser, FaSignOutAlt } from 'react-icons/fa'

const Dropdown: React.FC = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center w-9 h-9">
                <img
                    src={'https://i.pravatar.cc/150?img=1'}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full overflow-hidden"
                />
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-md shadow-lg outline-none z-10">
                <div className="py-1 z-20">
                    <MenuItem>
                        {({ active }) => (
                            <a
                                href="#"
                                className={`${active ? 'bg-gray-100' : ''
                                    } flex items-center px-4 py-2 text-sm text-gray-700`}
                            >
                                <FaUser className="mr-3" />
                                Profile
                            </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ active }) => (
                            <a
                                href="#"
                                className={`${active ? 'bg-gray-100' : ''
                                    } flex items-center px-4 py-2 text-sm text-gray-700`}
                            >
                                <FaSignOutAlt className="mr-3" />
                                Logout
                            </a>
                        )}
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
}

export default Dropdown
