import React, { useState } from 'react'
// icon
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa'
import { IoSettingsSharp } from "react-icons/io5";
// icons
import { FaFan } from "react-icons/fa6";
// sub-components
import Dropdown from './Dropdown'
import { RoundedButton } from 'src/components/RoundedButton'
import SearchModal from './SearchModal';

export const Topbar: React.FC = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  return (
    <div className="fixed w-full flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <div className=" pl-2 pr-8 mb-2 cursor-pointer">
          <FaFan className="w-9 h-9 text-[#7691f9]" />
        </div >
        <div className='hidden md:block'>
          <div className='flex flex-row justify-between items-center bg-gray-700 rounded-md overflow-hidden'>
            <FaSearch className="text-md mx-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 p-2 text-white outline-none"
            />
          </div>
        </div>

      </div>
      <div className="flex items-center">
        <div className='mx-1 block sm:hidden'>
          <RoundedButton Icon={FaSearch} bgColor='bg-gray-700' iconColor='text-white' onClick={() => setIsSearchModalOpen(true)} />
          <SearchModal isOpen={isSearchModalOpen} closeModal={() => setIsSearchModalOpen(false)} />
        </div>
        <div className='mx-1'>
          <RoundedButton Icon={FaEnvelope} bgColor='bg-gray-700' iconColor='text-white' />
        </div>
        <div className='mx-1'>
          <RoundedButton Icon={IoSettingsSharp} bgColor='bg-gray-700' iconColor='text-white' />
        </div>
        <div className='mx-1'>
          <RoundedButton Icon={FaBell} bgColor='bg-gray-700' iconColor='text-white' showIndicator />
        </div>
        <div className='mx-1'>
          <Dropdown />
        </div>
      </div>
    </div>
  )
}
