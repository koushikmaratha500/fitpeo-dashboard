import React  from "react";

interface IProps {
  rating: number,
}
export const StarRating: React.FC<IProps> = ({ rating }) => {
  const stars = Array(5).fill(0);

  return (
    <div className="flex items-center">
      {stars.map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 cursor-pointer ${index < rating ? "text-yellow-400" : "text-gray-400"
            }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431 8.245 1.207-5.957 5.773 1.407 8.187L12 18.897l-7.363 3.868 1.407-8.187-5.957-5.773 8.245-1.207z" />
        </svg>
      ))}
    </div>
  );
};