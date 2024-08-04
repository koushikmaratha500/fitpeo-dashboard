import React, { useState } from 'react';
// libs
import { Menu, MenuItems, MenuItem, MenuButton } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

export const TimeFrameButton: React.FC = () => {
    const [selectedText, setSelectedText] = useState<string>('Weekly')
    return (
        <Menu as="div" className="relative inline-block text-left outline-none">
            <div>
                <MenuButton className="outline-none inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-gray-500 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {selectedText}
                    <FaChevronDown className="w-4 h-4 ml-2 -mr-1 text-white" aria-hidden="true" />
                </MenuButton>
            </div>

            <MenuItems className="z-10 origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <MenuItem>
                        {({ active }) => (
                            <a
                                href="#"
                                onClick={() => setSelectedText('Daily')}
                                className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                    } block px-4 py-2 text-sm`}
                            >
                                Daily
                            </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ active }) => (
                            <a
                                href="#"
                                onClick={() => setSelectedText('Weekly')}
                                className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                    } block px-4 py-2 text-sm`}
                            >
                                Weekly
                            </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ active }) => (
                            <a
                                href="#"
                                onClick={() => setSelectedText('Monthly')}
                                className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                    } block px-4 py-2 text-sm`}
                            >
                                Monthly
                            </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ active }) => (
                            <a
                                href="#"
                                onClick={() => setSelectedText('Yearly')}
                                className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                    } block px-4 py-2 text-sm`}
                            >
                                Yearly
                            </a>
                        )}
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
};
