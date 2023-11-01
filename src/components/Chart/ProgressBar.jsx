import React from "react";
import Chart from "react-apexcharts";

const ProgressBar = ({ series }) => {
  return (
    <>
      <div className="Property-Referrals-container">
        <Chart
          type="donut"
          height={110}
          series={[35, 100 - 35]}
          width={120}
          options={{
            chart: {
              type: "radialBar",
              toolbar: {
                reset: false,
              },
            },
            // fill: {
            //   colors: [
            //     "var(--secondary-color-three,--primary-color)",
            //     "var(--second-text-color)",
            //   ],
            // },
            plotOptions: {
              radialBar: {
                distributed: true
              },
            },
            colors: [
              "#04C584",
              "#047DDA"
            ],
            dataLabels: {
              enabled: false,
            },
            legend: {
              show: false,
            },
            stroke: {
              show: false,
            },
            labels: [],
            yaxis: {
              labels: {
                show: false,
              },
              max: 1000,
            },
          }}
        ></Chart>
      </div>
    </>
  );
};

export default ProgressBar;
