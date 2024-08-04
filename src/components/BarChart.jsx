import React from "react";
// libs
import _ from "lodash";
import ReactECharts from "echarts-for-react";

export const BarChart = () => {
  const options = {
    grid: {
      left: "1%",
      right: "1%",
      top: "5%",
      bottom: "1%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: _.range(1, 31), // lodash method to generate 30 elements in array
      axisLabel: {
        formatter: function (value) {
          return value % 2 === 0 ? value : "";
        },
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          color: "#343a40", // changing grid-line behind the graph to gray-400 color
        },
      },
    },
    series: [
      {
        // lodahs method to generate 30 random numbers rangeing 1-150 of 30 elements
        data: _.times(30, () => ({
          value: _.random(1, 100),
          itemStyle: {
            borderRadius: [10, 10, 0, 0],
          },
        })),
        type: "bar",
      },
    ],
  };
  return (
    <>
      <ReactECharts option={options} style={{ height: 200, zIndex: -1 }} />
    </>
  );
};
