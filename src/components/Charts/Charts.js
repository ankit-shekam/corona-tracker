import React, {useEffect, useState} from 'react';
import { fetchDailyData } from '../../api/index';
import { Line, Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";


const Charts = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    });

    const lineChart = (
        dailyData.length ? (
            <Line data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'infected',
                    borderColor: 'rgba(0, 0, 255, 0.5)',
                    fill: true
                },{
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }}
            />
            ): null
    );

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    );
}

export default Charts;