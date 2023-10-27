import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = () => {
  return (
    <>
      <div style={{ width: '100%'}}>
        <Chart
          type="bar"
          height={550}
          width='100%'
          series={[
            {
              name: "sales",
              data: [
                {
                  x: "Jan",
                  y: 400,
                },
                {
                  x: "Feb",
                  y: 430,
                },
                {
                  x: "Mar",
                  y: 448,
                },
                {
                  x: "Apr",
                  y: 470,
                },
                {
                  x: "May",
                  y: 540,
                },
                {
                  x: "Jun",
                  y: 580,
                },
                {
                  x: "Jul",
                  y: 690,
                },
                {
                  x: "Aug",
                  y: 690,
                },
              ],
            },
            {
              name: "sales",
              data: [
                {
                  x: "Jan",
                  y: 500,
                },
                {
                  x: "Feb",
                  y: 130,
                },
                {
                  x: "Mar",
                  y: 148,
                },
                {
                  x: "Apr",
                  y: 50,
                },
                {
                  x: "May",
                  y: 54,
                },
                {
                  x: "Jun",
                  y: 80,
                },
                {
                  x: "Jul",
                  y: 60,
                },
                {
                  x: "Aug",
                  y: 90,
                },
              ],
            },
          ]}
          options={{
            title: { text: "Total Revenue" },
            dataLabels: {
              enabled: false,
            },
            legend: {
              show: false,
            },
            grid: {
              show: false,
              xaxis: {
                lines: {
                  show: false,
                },
              },
              yaxis: {
                lines: {
                  show: false,
                },
              },
            },
            plotOptions: {
              bar: {
                columnWidth: "60%",
              },
            },
            chart: {
              redrawOnParentResize: true,
              redrawOnWindowResize: true
            },
          }}
        ></Chart>
      </div>
    </>
  );
};

export default ColumnChart;
