import React from 'react'

interface CircularProgressBarProps {
    percentage: number
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
    const circleRadius = 60
    const circleCircumference = 2 * Math.PI * circleRadius
    const strokeDashoffset = circleCircumference - (percentage / 100) * circleCircumference

    return (
        <div className="flex flex-col items-center z-0 w-44">
            <svg className="w-28 h-28 transform z-0" viewBox="0 0 140 140">
                <circle
                    cx="70"
                    cy="70"
                    r={circleRadius}
                    stroke="#4A5568" // Tailwind's gray-700
                    strokeWidth="15"
                    fill="none"
                />
                <circle
                    cx="70"
                    cy="70"
                    r={circleRadius}
                    stroke="#4C51BF" // Tailwind's indigo-600
                    strokeWidth="15"
                    fill="none"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-stroke-dashoffset duration-300 ease-out"
                />
                <text
                    x="70"
                    y="70"
                    textAnchor="middle"
                    dy=".3em"
                    className="text-2xl text-white font-semibold"
                    fill='#FFF'
                >
                    {percentage}%
                </text>
                <text
                    x="70"
                    y="95"
                    textAnchor="middle"
                    dy=".2em"
                    className="text-xs text-white"
                    fill='#FFF'
                >
                    Goal
                </text>
                <text
                    x="70"
                    y="105"
                    textAnchor="middle"
                    dy=".4em"
                    className="text-xs text-white"
                    fill='#FFF'
                >
                    Completed
                </text>
            </svg>
            <div className="text-gray-500 text-xs text-center">
                The values here have been rounded off.
            </div>
        </div>
    )
}
