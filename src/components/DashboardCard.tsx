import React from 'react'
// models
import { IconType } from 'react-icons'
// libs
import { twMerge } from 'tailwind-merge'
// icons
import { BiCaretDown, BiCaretUp } from 'react-icons/bi'

interface IProps {
    Icon: IconType,
    iconBgColor: string
    iconColor: string
    type: 'raise' | 'fall'
    cardValue: string
    raiseFallValue: string
}
export const DashboardCard: React.FC<IProps> = ({ Icon, iconBgColor, iconColor, type, cardValue, raiseFallValue }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg text-white">
            <div className={twMerge('w-12 h-12 rounded-md flex justify-center items-center my-1', `${iconBgColor}`)}>
                <Icon className={twMerge('w-8 h-8', `${iconColor}`)} />
            </div>
            <p className='mb-3'>Total Orders</p>
            <div className='flex justify-between items-center'>
                <span className='font-bold text-3xl'>{cardValue}</span>
                {type === 'fall' ? <div className='inline-flex text-red-500'>
                    <BiCaretDown className='w-5 h-5' />
                    <span className='font-semibold'>{raiseFallValue}</span>
                </div> : <div className='inline-flex text-green-500'>
                    <BiCaretUp className='w-5 h-5' />
                    <span className='font-semibold'>{raiseFallValue}</span>
                </div>}
            </div>
        </div>
    )
}
