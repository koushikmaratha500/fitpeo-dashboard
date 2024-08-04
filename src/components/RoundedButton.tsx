import React from 'react'
// model
import { IconType } from 'react-icons'
// libs
import { twMerge } from 'tailwind-merge'

interface IProps {
    Icon: IconType
    bgColor?: string
    iconColor?: string
    showIndicator?: boolean
    onClick?: () => void
}
export const RoundedButton: React.FC<IProps> = ({ Icon, bgColor = 'bg-red-300', iconColor = 'text-white', showIndicator = false, onClick }) => {
    return (
        <button type='button' onClick={onClick} className={twMerge('relative h-9 w-9 rounded-full flex items-center justify-center', bgColor)}>
            <div className="relative">
                <Icon className={twMerge('w-4 h-4 z-10', iconColor)} />
                {showIndicator && (
                    <span className="animate-ping absolute top-0 right-0 h-2 w-2 bg-[#7691f9] opacity-75 rounded-full border-none z-30"></span>
                )}
            </div>
        </button>
    )
}
