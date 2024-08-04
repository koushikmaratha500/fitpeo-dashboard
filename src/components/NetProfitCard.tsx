import React from 'react'
// icon
import { BiCaretDown, BiCaretUp } from 'react-icons/bi'
// sub-components
import { CircularProgressBar } from './CircularProgress'

interface IProps {
    progresValue: number
    raiseFallValue: string
    type: 'raise' | 'fall'
    profitValue: number
}
export const NetProfit: React.FC<IProps> = ({ profitValue, progresValue, raiseFallValue, type }) => {
    return (
        <>
            <div>
                <h3>Net Profit</h3>
                <p className='font-bold text-3xl md:text-4xl my-4'>$ {profitValue}</p>
                {type === 'fall' ? <div className='text-red-500 inline-flex mt-1 text-md'>
                    <BiCaretDown className='w-5 h-5' />
                    <span className='font-semibold'>{raiseFallValue}</span>
                </div> : <div className='text-green-500 inline-flex mt-1 text-md'>
                    <BiCaretUp className='w-5 h-5' />
                    <span className='font-semibold'>{raiseFallValue}</span>
                </div>}
            </div>
            <div>
                <CircularProgressBar percentage={progresValue} />
            </div>
        </>
    )
}
