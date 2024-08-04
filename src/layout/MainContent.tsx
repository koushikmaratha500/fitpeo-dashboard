import React from 'react'

interface IProps {
    children: React.ReactNode
}
export const MainContent: React.FC<IProps> = ({ children }) => {
    return (
        <div className="py-6 px-4 bg-[#0d1b2a] flex-1">
            {children}
        </div>
    )
}
