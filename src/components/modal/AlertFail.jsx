import React from 'react';
import { FaExclamation } from "react-icons/fa";

const AlertFail = ({ onClose }) => {
    return (
        <div className='fixed flex flex-col gap-5 inset-0 justify-center items-center max-h-screen bg-gray-400/40 z-50 text-gray-600'>
            <div className='emboss p-4 rounded-full'>
                <FaExclamation className='text-gray-600 text-5xl' />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center emboss  rounded-xl p-1 text-center' >
                <div className='flex justify-between items-center gap-6 py-6 px-8 emboss-inset rounded-md'>
                    <p className=''>All field must be filled with valid value</p>
                    <button
                        onClick={onClose}
                        className='rounded-lg hover:shadow-2xl hover:shadow-gray-700 p-4 border border-transparent hover:border-gray-400/30'>
                        X
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AlertFail