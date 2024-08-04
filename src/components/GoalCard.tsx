import React from 'react'
// icons
import { IoChevronForward } from 'react-icons/io5'
// libs
import { twMerge } from 'tailwind-merge'
// models
import { IconType } from 'react-icons'

interface IProps {
    onClick: () => void
    iconBgColor: string
    iconColor: string
    Icon: IconType
    goalName: string
}
export const GoalCard: React.FC<IProps> = ({ onClick, iconBgColor, iconColor, Icon, goalName }) => {
    return (
        <button className='flex flex-row justify-between items-center my-2' onClick={onClick}>
            <div className='flex justify-center items-center'>
                <div className={twMerge('w-16 h-16 rounded-full flex justify-center items-center', `${iconBgColor}`)}>
                    <Icon className={twMerge('w-9 h-9', `${iconColor}`)} />
                </div>
                <span className='text-xl md:text-2xl text-white ml-3'>{goalName}</span>
            </div>
            <div className='w-8 h-8 rounded-full flex justify-center items-center bg-gray-600'><IoChevronForward className='w-5 h-5 text-gray-400' /></div>
        </button>
    )
}
