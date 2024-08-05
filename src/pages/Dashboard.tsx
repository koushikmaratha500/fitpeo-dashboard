import React from 'react'
// icons
import { TbBasketPlus, TbShoppingBagCheck, TbShoppingBagX, TbReportMoney, TbCurrentLocation } from "react-icons/tb";
import { BiDish } from "react-icons/bi";
import { FaBurger } from "react-icons/fa6";
// components
import { BarChart } from 'src/components/BarChart'
import { TimeFrameButton } from 'src/components/DropDown';
import { OrderTable } from 'src/components/RecentOrders';
import { DashboardCard } from 'src/components/DashboardCard';
import { FeedbackCard } from 'src/components/FeedbackCard';
import { NetProfit } from 'src/components/NetProfitCard';
import { GoalCard } from 'src/components/GoalCard';
// sample-data
import { ordersData, FeedbackSamples } from 'src/constants/data';
// libs
import _ from 'lodash'

const Dashboard: React.FC = () => {
    return (
        <>
            <h2 className='text-white text-2xl font-semibold mb-2'>Dashboard</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <DashboardCard cardTitle='Total Orders' Icon={TbBasketPlus} iconBgColor='bg-[#293562]' iconColor='text-[#4166f6]' type='fall' cardValue='75' raiseFallValue='3%' />
                    <DashboardCard cardTitle='Total Dashboard' Icon={TbShoppingBagCheck} iconBgColor='bg-[#234a46]' iconColor='text-[#00ca8c]' type='raise' cardValue='70' raiseFallValue='3%' />
                    <DashboardCard cardTitle='Total Cancelled' Icon={TbShoppingBagX} iconBgColor='bg-[#633333]' iconColor='text-[#f25e5d]' type='raise' cardValue='05' raiseFallValue='3%' />
                    <DashboardCard cardTitle='Total Revenue' Icon={TbReportMoney} iconBgColor='bg-[#592e4a]' iconColor='text-[#e542a0]' type='fall' cardValue='$12k' raiseFallValue='3%' />
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-white lg:col-span-1 flex flex-row justify-between">
                    <NetProfit profitValue={4600.20} progresValue={90} raiseFallValue='4%' type='raise' />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg text-white">
                    <div className="flex flex-row justify-between">
                        <h2 className='text-white font-semibold text-xl md:text-2xl'>Activity</h2>
                        <TimeFrameButton />
                    </div>
                    <BarChart />
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-white lg:col-span-1">
                    <div className="flex flex-col">
                        <GoalCard goalName='Goals' iconBgColor='bg-[#623138]' iconColor='text-[#f77f00]' onClick={() => { }} Icon={TbCurrentLocation} />
                        <GoalCard goalName='Pupular Dishes' iconBgColor='bg-[#263468]' iconColor='text-[#6877c6]' onClick={() => { }} Icon={FaBurger} />
                        <GoalCard goalName='Menus' iconBgColor='bg-[#204b5f]' iconColor='text-[#3094c1]' onClick={() => { }} Icon={BiDish} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <div className="lg:col-span-2 bg-gray-800 p-4 pb-1 rounded-lg text-white">
                    <h2 className='text-white font-semibold text-xl md:text-2xl mb-2'>Recent Orders</h2>
                    <OrderTable orderData={ordersData} />
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-white lg:col-span-1 h-[450px] overflow-y-auto">
                    <h2 className='text-white font-semibold text-xl md:text-2xl mb-2'>Customer Feedback</h2>
                    {_.map(FeedbackSamples, (sampleItem, index) => <FeedbackCard {...sampleItem} key={`feedback-item-${index}`}/>)}
                </div>
            </div>
        </>

    )
}

export default Dashboard