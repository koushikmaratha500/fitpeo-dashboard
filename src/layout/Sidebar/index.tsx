import React, { useState } from 'react'
// libs
import { Dialog, DialogPanel } from '@headlessui/react'
import { HiMenu } from 'react-icons/hi'
// sub-components
import { SidebarAside } from './SidebarAside';

export const Sidebar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    return (
        <>
            <div className='hidden md:block'>
                <SidebarAside />
            </div>
            {/* Mobile Sidebar Drawer */}
            <div className="block sm:hidden">
                <button
                    className="fixed top-4 left-16 z-10 p-2  text-white rounded-md"
                    onClick={() => setIsSidebarOpen(prevState => !prevState)}
                >
                    <HiMenu className="w-6 h-6" />
                </button>
                <Dialog
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 z-40 flex lg:hidden"
                >
                    <DialogPanel className="fixed inset-0 bg-black opacity-50" onClick={() => setIsSidebarOpen(false)} />
                    <SidebarAside />
                </Dialog>
            </div>
        </>

    )
}
