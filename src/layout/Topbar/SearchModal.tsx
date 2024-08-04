import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
// icons
import { FaSearch } from 'react-icons/fa';

interface IProps {
    isOpen: boolean;
    closeModal: () => void
}
const SearchModal: React.FC<IProps> = ({ isOpen, closeModal }) => {
    return (
        <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-50 overflow-y-auto">
            <DialogPanel className="fixed inset-0 bg-black opacity-50" onClick={closeModal} />
            <div className="fixed top-14 right-0 left-0 bg-white rounded-md shadow-lg p-1">
                <div className='flex flex-row justify-between items-center bg-gray-700 rounded-md overflow-hidden'>
                    <FaSearch className="text-md mx-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-700 p-2 text-white outline-none w-full"
                    />
                </div>
            </div>
        </Dialog>
    );
};

export default SearchModal;
