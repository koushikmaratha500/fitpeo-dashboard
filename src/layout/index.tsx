import React from 'react'
// sub-components
import { MainContent } from './MainContent'
import { Sidebar } from 'src/layout/Sidebar';
import { Topbar } from 'src/layout/Topbar';

interface IProps {
    children: React.ReactNode
}
export const Layout: React.FC<IProps> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-200">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <div className="flex-1 overflow-y-auto mt-16 md:ml-20">
                    <MainContent children={children} />
                </div>
            </div>

        </div>
    )
}
