import React from 'react';
// lib
import _ from 'lodash'
// models
import { OrderData } from 'src/@types/dashboard.model';

interface IProps {
  orderData: OrderData[]
}
export const OrderTable: React.FC<IProps> = ({ orderData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 text-white">
        <thead>
          <tr className="w-full">
            <th className="py-3 px-4 text-left font-semibold">Customer</th>
            <th className="py-3 px-4 text-left font-semibold">Order No.</th>
            <th className="py-3 px-4 text-left font-semibold">Amount</th>
            <th className="py-3 px-4 text-left font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {_.map(orderData, (order, index) => (
            <tr key={index} className="border-t border-gray-700 text-sm md:text-md">
              <td className="py-3 px-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                  {/* Placeholder for user image */}
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    alt={order.customer}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="ml-4">{order.customer}</span>
              </td>
              <td className="py-3 px-4">{order.orderNo}</td>
              <td className="py-3 px-4">{order.amount}</td>
              <td className="py-3 px-4">
                <span className={`py-1 px-3 rounded-full text-sm ${order.status === 'Delivered' ? 'bg-green-500' : order.status === 'Cancelled' ? 'bg-red-500' : 'bg-yellow-500'}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
