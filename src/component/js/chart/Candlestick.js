import React,{useState, useEffect} from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment/moment";
import axios from "axios";
import '../../css/Chart.css';

const Candlestick = () => {

    const [chartData, setChartData] = useState({
        series : [],
        options : {}
    });

    useEffect(() => {
        /*setChartData({
            series : [{
                data : [
                    {
                        x: moment(new Date()).format('HH:mm'),
                        y: ['6629.81', '6650.5', '6623.04', '6633.33']
                    },
                    {
                        x: new Date(),
                        y: [6632.01, 6643.59, 6620, 6630.11]
                    },
                    {
                        x: new Date(1538782200000),
                        y: [6630.71, 6648.95, 6623.34, 6635.65]
                    },
                    {
                        x: new Date(1538784000000),
                        y: [6635.65, 6651, 6629.67, 6638.24]
                    }
                ]
            }],
            options: {
                chart: {
                    type: 'candlestick',
                    height: 350
                },
                title: {
                    text: 'CandleStick Chart',
                    align: 'left'
                },
                xaxis: {
                    type: 'category'
                },
                yaxis: {
                    tooltip: {
                        enabled: true
                    }
                }
            }
        });*/

        axios.get('/api/chart/selectCandles/KRW-BTC/days').then(res=>{
            console.log("성공ㅇㅇㅇㅇㅇㅇ!!");
            console.log(res);
            setChartData({
                series : [{
                    data : res.data
                }],
                options: {
                    chart: {
                        type: 'candlestick',
                        height: 350
                    },
                    title: {
                        text: 'CandleStick Chart',
                        align: 'left'
                    },
                    xaxis: {
                        type: 'category'
                    },
                    yaxis: {
                        tooltip: {
                            enabled: true
                        }
                    }
                }
            });
        }).catch(err => {console.log("오류  : " + err)})
    }, []);

    return(
        <div id="chart">
            <ReactApexChart type="candlestick" series={chartData.series} options={chartData.options}/>
        </div>
    );
}

export default Candlestick;