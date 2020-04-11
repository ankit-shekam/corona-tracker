import React, {useEffect, useState} from 'react';
import { fetchDailyData } from '../../api/index';
import { Line, Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";


const Charts = ({data, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ? (
            <Line data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'infected',
                    borderColor: 'rgba(0, 0, 255, 0.5)',
                    borderWidth: 2,
                    fill: true
                },{
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'deaths',
                    borderColor: 'red',   
                    borderWidth: 2,
                    backgroundColor: 'rgba(199, 70, 19, 0.767)',
                    fill: true
                }]
            }}
            />
            ): null
    );

    const barChart = (
        data.confirmed ? (
            <Bar data={{
                    labels: [ 'infected', 'recovered', 'deaths'],
                    datasets: [{
                        label: 'people',
                        backgroundColor: [ 'rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)' ],
                        data: [ data.confirmed.value, data.recovered.value, data.deaths.value ]
                    }]    
                 }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: 'current state in ' + country }
                }}
            />

        ) : null
    );

    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
}

export default Charts;