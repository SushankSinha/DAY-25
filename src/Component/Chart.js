import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(...registerables)

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + "").replace(",", "").replace(" ", "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

const ChartPage = () => {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Charts</h1>
            <p className="mb-4">
              Chart.js is a third party plugin that is used to generate the
              charts in this theme. The charts below have been customized - for
              further customization options, please visit the{" "}
              <a target="_blank" rel="noreferrer" href="https://www.chartjs.org/docs/latest/">
                official Chart.js documentation
              </a>
              .
            </p>

            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Area Chart
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="chart-area">
                      <Line
                        data={{
                          labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                          ],
                          datasets: [
                            {
                              label: "Earnings",
                              lineTension: 0.3,
                              backgroundColor: "rgba(78, 115, 223, 0.05)",
                              borderColor: "rgba(78, 115, 223, 1)",
                              pointRadius: 3,
                              pointBackgroundColor: "rgba(78, 115, 223, 1)",
                              pointBorderColor: "rgba(78, 115, 223, 1)",
                              pointHoverRadius: 3,
                              pointHoverBackgroundColor:
                                "rgba(78, 115, 223, 1)",
                              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                              pointHitRadius: 10,
                              pointBorderWidth: 2,
                              data: [
                                0, 10000, 5000, 15000, 10000, 20000, 15000,
                                25000, 20000, 30000, 25000, 40000,
                              ],
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          layout: {
                            padding: {
                              left: 10,
                              right: 25,
                              top: 25,
                              bottom: 0,
                            },
                          },
                          scales: {
                            xAxes: [
                              {
                                time: {
                                  unit: "date",
                                },
                                gridLines: {
                                  display: false,
                                  drawBorder: false,
                                },
                                ticks: {
                                  maxTicksLimit: 7,
                                },
                              },
                            ],
                            yAxes: [
                              {
                                ticks: {
                                  maxTicksLimit: 5,
                                  padding: 10,
                                  callback: function (value, index, values) {
                                    return "$" + number_format(value);
                                  },
                                },
                                gridLines: {
                                  color: "rgb(234, 236, 244)",
                                  zeroLineColor: "rgb(234, 236, 244)",
                                  drawBorder: false,
                                  borderDash: [2],
                                  zeroLineBorderDash: [2],
                                },
                              },
                            ],
                          },
                          legend: {
                            display: false,
                          },
                          tooltips: {
                            backgroundColor: "rgb(255,255,255)",
                            bodyFontColor: "#858796",
                            titleMarginBottom: 10,
                            titleFontColor: "#6e707e",
                            titleFontSize: 14,
                            borderColor: "#dddfeb",
                            borderWidth: 1,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            intersect: false,
                            mode: "index",
                            caretPadding: 10,
                            callbacks: {
                              label: function (tooltipItem, chart) {
                                var datasetLabel =
                                  chart.datasets[tooltipItem.datasetIndex]
                                    .label || "";
                                return (
                                  datasetLabel +
                                  ": $" +
                                  number_format(tooltipItem.yLabel)
                                );
                              },
                            },
                          },
                        }}
                      />
                    </div>
                    <hr />
                    Styling for the area chart can be found in the
                    <code>/js/demo/chart-area-demo.js</code> file.
                  </div>
                </div>

                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Bar Chart
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="chart-bar">
                      <Bar
                        data={{
                          labels: [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                          ],
                          datasets: [
                            {
                              label: "Revenue",
                              backgroundColor: "#4e73df",
                              hoverBackgroundColor: "#2e59d9",
                              borderColor: "#4e73df",
                              data: [4215, 5312, 6251, 7841, 9821, 14984],
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          layout: {
                            padding: {
                              left: 10,
                              right: 25,
                              top: 25,
                              bottom: 0,
                            },
                          },
                          scales: {
                            xAxes: [
                              {
                                time: {
                                  unit: "month",
                                },
                                gridLines: {
                                  display: false,
                                  drawBorder: false,
                                },
                                ticks: {
                                  maxTicksLimit: 6,
                                },
                                maxBarThickness: 25,
                              },
                            ],
                            yAxes: [
                              {
                                ticks: {
                                  min: 0,
                                  max: 15000,
                                  maxTicksLimit: 5,
                                  padding: 10,
                                  callback: function (value, index, values) {
                                    return "$" + number_format(value);
                                  },
                                },
                                gridLines: {
                                  color: "rgb(234, 236, 244)",
                                  zeroLineColor: "rgb(234, 236, 244)",
                                  drawBorder: false,
                                  borderDash: [2],
                                  zeroLineBorderDash: [2],
                                },
                              },
                            ],
                          },
                          legend: {
                            display: false,
                          },
                          tooltips: {
                            titleMarginBottom: 10,
                            titleFontColor: "#6e707e",
                            titleFontSize: 14,
                            backgroundColor: "rgb(255,255,255)",
                            bodyFontColor: "#858796",
                            borderColor: "#dddfeb",
                            borderWidth: 1,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            caretPadding: 10,
                            callbacks: {
                              label: function (tooltipItem, chart) {
                                var datasetLabel =
                                  chart.datasets[tooltipItem.datasetIndex]
                                    .label || "";
                                return (
                                  datasetLabel +
                                  ": $" +
                                  number_format(tooltipItem.yLabel)
                                );
                              },
                            },
                          },
                        }}
                      />
                    </div>
                    <hr />
                    Styling for the bar chart can be found in the
                    <code>/js/demo/chart-bar-demo.js</code> file.
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Donut Chart
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="chart-pie pt-4">
                      <Doughnut
                        data={{
                          labels: ["Direct", "Referral", "Social"],
                          datasets: [
                            {
                              data: [55, 30, 15],
                              backgroundColor: [
                                "#4e73df",
                                "#1cc88a",
                                "#36b9cc",
                              ],
                              hoverBackgroundColor: [
                                "#2e59d9",
                                "#17a673",
                                "#2c9faf",
                              ],
                              hoverBorderColor: "rgba(234, 236, 244, 1)",
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          tooltips: {
                            backgroundColor: "rgb(255,255,255)",
                            bodyFontColor: "#858796",
                            borderColor: "#dddfeb",
                            borderWidth: 1,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            caretPadding: 10,
                          },
                          legend: {
                            display: false,
                          },
                          cutoutPercentage: 80,
                        }}
                      />
                    </div>
                    <hr />
                    Styling for the donut chart can be found in the
                    <code>/js/demo/chart-pie-demo.js</code> file.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ChartPage;
