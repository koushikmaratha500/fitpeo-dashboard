import React from "react";
// sub-component
import { StarRating } from "./StarRating";
// models
import { type FeedbackData } from "src/@types/dashboard.model";

export const FeedbackCard: React.FC<FeedbackData> = ({ customerFeedback, customerName, customerRating }) => {
  return (
    <div className="py-2 border-b-gray-500 border-b-2">
      <div className="flex flex-row justify-start items-center">
        <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
          <img
            src={`https://i.pravatar.cc/150?img=1`}
            alt={customerName}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="ml-4">{customerName}</span>
      </div>
      <div className="py-2">
        <StarRating rating={customerRating} />
      </div>
      <span className="text-xs">
        {customerFeedback}
      </span>
    </div>
  );
};
